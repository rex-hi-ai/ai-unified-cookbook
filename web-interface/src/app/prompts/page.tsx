import PromptPage from '@/components/PromptPage';
import toolsData from '@/data/tools-data.json';
import { ToolsData } from '@/types';

export default function PromptsPage() {
  const data = toolsData as ToolsData;

  if (!data.prompts || !data.promptCategories) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">提示詞資料不可用</h1>
          <p className="text-gray-600">目前沒有提示詞資料可以顯示。</p>
        </div>
      </div>
    );
  }

  return <PromptPage promptsData={{
    categories: data.promptCategories,
    prompts: data.prompts,
    stats: {
      totalPrompts: data.stats.totalPrompts || 0,
      totalCategories: data.stats.totalPromptCategories || 0,
      lastUpdated: data.stats.lastUpdated
    }
  }} />;
}

export const metadata = {
  title: '工作流程提示詞 - AI 工具統一手冊',
  description: '瀏覽和搜尋各種 AI 工作流程提示詞，提升開發效率',
};
