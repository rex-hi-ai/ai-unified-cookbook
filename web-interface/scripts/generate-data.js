const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

// 設定路徑
const SURVEY_DIR = path.join(__dirname, '../../docs/survey');
const OUTPUT_DIR = path.join(__dirname, '../src/data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'tools-data.json');

// 確保輸出目錄存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 分類映射
const CATEGORY_MAPPING = {
  agent: { name: 'AI 代理', description: '智能代理和自主AI系統' },
  automation: { name: '自動化工具', description: '工作流程自動化平台' },
  browser: { name: '瀏覽器工具', description: '瀏覽器擴展和網頁工具' },
  chat: { name: '對話工具', description: 'AI聊天和對話助手' },
  cli: { name: '命令列工具', description: '命令列和終端工具' },
  design: { name: '設計工具', description: 'AI設計和創作平台' },
  ide: { name: '開發環境', description: '整合開發環境和編輯器' },
  mcp: { name: 'MCP 協議', description: 'Model Context Protocol相關工具' },
  notebook: { name: '筆記工具', description: '智能筆記和知識管理' },
  plugin: { name: '插件工具', description: '編輯器插件和擴展' },
  search: { name: '搜尋工具', description: 'AI搜索和資訊檢索' },
  terminal: { name: '終端工具', description: '終端增強和AI助手' }
};

// 解析定價信息
function parsePricing(pricingSection) {
  if (!pricingSection) return null;
  
  const lines = pricingSection.split('\n').filter(line => line.trim() && !line.startsWith('#'));
  const plans = [];
  let hasFree = false;
  let minPrice = Infinity;
  let maxPrice = 0;
  
  lines.forEach(line => {
    const cleanLine = line.replace(/^-\s*/, '').trim();
    if (cleanLine.toLowerCase().includes('free') || 
        cleanLine.toLowerCase().includes('免費') ||
        cleanLine.includes('$0')) {
      hasFree = true;
    }
    
    // 提取價格信息
    const priceMatches = cleanLine.match(/\$(\d+(?:,\d+)?)/g);
    if (priceMatches) {
      priceMatches.forEach(match => {
        const price = parseInt(match.replace(/\$|,/g, ''));
        if (price > 0) {
          minPrice = Math.min(minPrice, price);
          maxPrice = Math.max(maxPrice, price);
        }
      });
    }
    
    plans.push(cleanLine);
  });
  
  return {
    plans,
    hasFree,
    minPrice: minPrice === Infinity ? null : minPrice,
    maxPrice: maxPrice === 0 ? null : maxPrice,
    raw: pricingSection
  };
}

// 解析 Markdown 文件
function parseMarkdownFile(filePath, category) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data: frontMatter, content: markdownContent } = matter(content);
  
  // 解析各個段落
  const sections = {};
  const lines = markdownContent.split('\n');
  let currentSection = null;
  let currentContent = [];
  
  lines.forEach(line => {
    if (line.startsWith('## ')) {
      if (currentSection) {
        sections[currentSection] = currentContent.join('\n').trim();
      }
      currentSection = line.replace('## ', '').split('.')[1]?.trim() || line.replace('## ', '').trim();
      currentContent = [];
    } else if (currentSection) {
      currentContent.push(line);
    }
  });
  
  if (currentSection) {
    sections[currentSection] = currentContent.join('\n').trim();
  }
  
  // 提取工具名稱
  const nameMatch = markdownContent.match(/^# (.+)$/m);
  const name = nameMatch ? nameMatch[1] : path.basename(filePath, '.md');
  
  // 解析關鍵功能
  const features = sections['關鍵功能'] ? 
    sections['關鍵功能'].split('\n')
      .filter(line => line.startsWith('- '))
      .map(line => line.replace('- ', '').trim()) : [];
  
  // 解析使用案例
  const useCases = sections['常見使用案例'] ? 
    sections['常見使用案例'].split('\n')
      .filter(line => line.startsWith('- '))
      .map(line => line.replace('- ', '').trim()) : [];
  
  // 解析官方資源
  const resources = sections['官方資源'] ? 
    sections['官方資源'].split('\n')
      .filter(line => line.startsWith('- '))
      .map(line => {
        const match = line.match(/\[(.+?)\]\((.+?)\)/);
        return match ? { name: match[1], url: match[2] } : null;
      })
      .filter(Boolean) : [];
  
  return {
    id: path.basename(filePath, '.md'),
    name,
    category,
    overview: sections['總覽'] || '',
    features,
    useCases,
    pricing: parsePricing(sections['定價方案']),
    installation: sections['安裝與設定'] || '',
    basicUsage: sections['基本用法與範例'] || '',
    resources,
    lastUpdated: fs.statSync(filePath).mtime.toISOString(),
    ...frontMatter
  };
}

// 生成主要資料
function generateToolsData() {
  const categories = {};
  const allTools = [];
  
  // 遍歷所有分類目錄
  const categoryDirs = fs.readdirSync(SURVEY_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  categoryDirs.forEach(categoryName => {
    const categoryPath = path.join(SURVEY_DIR, categoryName);
    const toolFiles = fs.readdirSync(categoryPath)
      .filter(file => file.endsWith('.md'));
    
    const categoryTools = toolFiles.map(file => {
      const filePath = path.join(categoryPath, file);
      return parseMarkdownFile(filePath, categoryName);
    });
    
    categories[categoryName] = {
      ...CATEGORY_MAPPING[categoryName],
      tools: categoryTools,
      count: categoryTools.length
    };
    
    allTools.push(...categoryTools);
  });
  
  // 生成統計資料
  const stats = {
    totalTools: allTools.length,
    totalCategories: Object.keys(categories).length,
    freeTools: allTools.filter(tool => tool.pricing?.hasFree).length,
    lastUpdated: new Date().toISOString()
  };
  
  // 生成最終資料結構
  const data = {
    stats,
    categories,
    tools: allTools
  };
  
  // 寫入 JSON 檔案
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2), 'utf8');
  
  console.log(`✅ 已生成 ${allTools.length} 個工具的資料`);
  console.log(`📁 分類數量: ${Object.keys(categories).length}`);
  console.log(`📄 輸出檔案: ${OUTPUT_FILE}`);
  
  return data;
}

// 執行資料生成
try {
  generateToolsData();
  console.log('🎉 資料生成完成！');
} catch (error) {
  console.error('❌ 資料生成失敗:', error);
  process.exit(1);
}
