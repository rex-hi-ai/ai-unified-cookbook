import HomePage from '@/components/HomePage';
import { ToolsData } from '@/types';
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
  
  return (
    <div className="min-h-screen">
      <HomePage toolsData={toolsData} />
    </div>
  );
}

// 重新驗證間隔 (3600秒 = 1小時)
export const revalidate = 3600;
