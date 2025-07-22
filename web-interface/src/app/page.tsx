import SimplifiedToolPage from '@/components/SimplifiedToolPage';
import { ToolsData, Tool } from '@/types';
import fs from 'fs';
import path from 'path';

// 載入工具資料
async function getToolsData(): Promise<ToolsData> {
  try {
    const dataPath = path.join(process.cwd(), 'src/data/tools-data.json');
    
    // 如果資料檔案不存在，回傳預設資料
    if (!fs.existsSync(dataPath)) {
      return {
        stats: {
          totalTools: 0,
          totalCategories: 0,
          freeTools: 0,
          lastUpdated: new Date().toISOString()
        },
        categories: {},
        tools: []
      };
    }
    
    const jsonData = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Failed to load tools data:', error);
    return {
      stats: {
        totalTools: 0,
        totalCategories: 0,
        freeTools: 0,
        lastUpdated: new Date().toISOString()
      },
      categories: {},
      tools: []
    };
  }
}

export default async function Page() {
  const toolsData = await getToolsData();
  
  // Extract tools from all categories (if available) or use root-level tools
  const extractedTools: Tool[] = [];
  if (toolsData.categories) {
    Object.values(toolsData.categories).forEach((category) => {
      if (category.tools && Array.isArray(category.tools)) {
        extractedTools.push(...category.tools);
      }
    });
  }
  
  const finalTools = extractedTools.length > 0 ? extractedTools : (toolsData.tools || []);
  
  return (
    <div className="min-h-screen">
      <SimplifiedToolPage toolsData={{
        categories: toolsData.categories || {},
        tools: finalTools,
        stats: {
          totalTools: toolsData.stats.totalTools,
          totalCategories: toolsData.stats.totalCategories,
          freeTools: toolsData.stats.freeTools,
          lastUpdated: toolsData.stats.lastUpdated
        }
      }} />
    </div>
  );
}

// 重新驗證間隔 (3600秒 = 1小時)
export const revalidate = 3600;
