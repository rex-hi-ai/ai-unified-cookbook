import { notFound } from 'next/navigation';
import { Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import toolsData from '@/data/tools-data.json';
import CopyButton from './CopyButton';

interface PromptDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PromptDetailPage({ params }: PromptDetailPageProps) {
  const { id } = await params;
  const prompt = toolsData.prompts.find(p => p.id === id);

  if (!prompt) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link 
              href="/prompts"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              返回提示詞列表
            </Link>
          </div>
          
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-3">
                {prompt.name}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>最後更新：{formatDate(prompt.lastUpdated)}</span>
                </div>
                <div className="px-2 py-1 bg-gray-100 rounded-md text-xs">
                  {prompt.category}
                </div>
              </div>
              
              {/* Tags */}
              {prompt.tags && prompt.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {prompt.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex-shrink-0 ml-6">
              <CopyButton content={prompt.content} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-900">提示詞內容</h2>
          </div>
          
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto">
                {prompt.content}
              </pre>
            </div>
          </div>
        </div>

        {/* File Path Info */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">檔案資訊</h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium text-gray-700">檔案路徑：</span>
              <span className="text-gray-600 font-mono">{prompt.path}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">提示詞 ID：</span>
              <span className="text-gray-600 font-mono">{prompt.id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 生成靜態路由參數
export async function generateStaticParams() {
  return toolsData.prompts.map((prompt) => ({
    id: prompt.id,
  }));
}

// 生成頁面 metadata
export async function generateMetadata({ params }: PromptDetailPageProps) {
  const { id } = await params;
  const prompt = toolsData.prompts.find(p => p.id === id);
  
  if (!prompt) {
    return {
      title: '提示詞未找到',
    };
  }

  return {
    title: `${prompt.name} - AI 工作流程提示詞`,
    description: `查看 ${prompt.name} 提示詞的完整內容，適用於 ${prompt.category} 相關工作流程。`,
  };
}
