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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col justify-center items-center">
        <div className="max-w-2xl w-full px-6 py-16 text-center rounded-2xl shadow-lg bg-white/80 border border-gray-200">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">HI-AI Tools Survey</h1>
          <p className="text-lg text-gray-700 mb-6">
            全面的 AI 工具調研與比較平台，幫助您找到最適合的 AI 解決方案，提升生產力與創新力。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/tools`} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors">探索工具庫</a>
            <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/prompts`} className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow hover:bg-purple-700 transition-colors">瀏覽提示詞</a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            資料持續更新，歡迎貢獻與回饋。
          </div>
        </div>
      </div>
    </div>
  );
}

// 重新驗證間隔 (3600秒 = 1小時)
export const revalidate = 3600;
