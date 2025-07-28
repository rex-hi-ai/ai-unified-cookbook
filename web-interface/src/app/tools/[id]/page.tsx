import { notFound } from 'next/navigation';
import { Tool } from '@/types';
import toolsData from '@/data/tools-data.json';
import Link from 'next/link';
import { ExternalLink, Clock, DollarSign } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

// Generate static params for all tools
export async function generateStaticParams() {
  // Extract all tools from categories
  const allTools: Tool[] = [];
  Object.values(toolsData.categories || {}).forEach((category: any) => {
    if (category.tools && Array.isArray(category.tools)) {
      allTools.push(...category.tools);
    }
  });
  
  const tools = allTools.length > 0 ? allTools : (toolsData.tools || []);
  return tools.map((tool) => ({
    id: tool.id,
  }));
}

// Markdown 組件配置
const MarkdownComponents = {
  // 自訂程式碼區塊樣式
  code: ({ node, inline, className, children, ...props }: any) => {
    if (inline) {
      return (
        <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm" {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className="block bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm" {...props}>
        {children}
      </code>
    );
  },
  // 自訂連結樣式
  a: ({ href, children }: any) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-700 underline"
    >
      {children}
    </a>
  ),
  // 自訂清單樣式
  ul: ({ children }: any) => (
    <ul className="list-disc list-inside space-y-2 text-gray-700">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal list-inside space-y-2 text-gray-700">{children}</ol>
  ),
  // 自訂段落樣式
  p: ({ children }: any) => (
    <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
  ),
  // 自訂標題樣式
  h1: ({ children }: any) => (
    <h1 className="text-2xl font-bold text-gray-900 mb-4">{children}</h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-xl font-bold text-gray-900 mb-3">{children}</h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{children}</h3>
  ),
};

export default async function ToolDetail({ params }: Props) {
  const { id } = await params;
  
  // Extract all tools from categories
  const allTools: Tool[] = [];
  Object.values(toolsData.categories || {}).forEach((category: any) => {
    if (category.tools && Array.isArray(category.tools)) {
      allTools.push(...category.tools);
    }
  });
  
  const tools = allTools.length > 0 ? allTools : (toolsData.tools || []);
  const tool = tools.find((tool: Tool) => tool.id === id);

  if (!tool) {
    notFound();
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      agent: 'bg-purple-100 text-purple-800',
      automation: 'bg-blue-100 text-blue-800',
      browser: 'bg-green-100 text-green-800',
      chat: 'bg-pink-100 text-pink-800',
      cli: 'bg-gray-100 text-gray-800',
      design: 'bg-orange-100 text-orange-800',
      ide: 'bg-indigo-100 text-indigo-800',
      mcp: 'bg-teal-100 text-teal-800',
      notebook: 'bg-yellow-100 text-yellow-800',
      plugin: 'bg-red-100 text-red-800',
      search: 'bg-cyan-100 text-cyan-800',
      terminal: 'bg-slate-100 text-slate-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getPriceDisplay = () => {
    if (!tool.pricing) return '價格未知';
    if (tool.pricing.hasFree && tool.pricing.minPrice) {
      return `免費起 - $${tool.pricing.minPrice}+`;
    }
    if (tool.pricing.hasFree) return '免費';
    if (tool.pricing.minPrice && tool.pricing.maxPrice) {
      return `$${tool.pricing.minPrice} - $${tool.pricing.maxPrice}`;
    }
    if (tool.pricing.minPrice) return `$${tool.pricing.minPrice}+`;
    return '聯絡銷售';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">

        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* 標題區域 */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <span className={`badge ${getCategoryColor(tool.category)}`}>
                {tool.category}
              </span>
              {tool.pricing?.hasFree && (
                <span className="badge badge-success">免費</span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{tool.name}</h1>
            <p className="text-lg text-gray-600">{tool.overview}</p>
          </div>

          {/* 基本資訊 */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-gray-600">
                  <DollarSign className="w-5 h-5 mr-2" />
                  <span className="font-medium">定價</span>
                </div>
                <span className="font-semibold text-gray-900">
                  {getPriceDisplay()}
                </span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-medium">最後更新</span>
                </div>
                <span className="text-gray-900">
                  {formatDate(tool.lastUpdated)}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {tool.resources.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">相關連結</h3>
                  <div className="space-y-2">
                    {tool.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {resource.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 主要功能 */}
          {tool.features.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">主要功能</h2>
              <div className="grid gap-3">
                {tool.features.map((feature, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 使用案例 */}
          {tool.useCases.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">常見使用案例</h2>
              <div className="grid gap-3">
                {tool.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 定價詳情 - 使用 Markdown */}
          {tool.pricing && tool.pricing.raw && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">定價方案</h2>
              <div className="bg-gray-50 rounded-lg p-6 prose prose-gray max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={MarkdownComponents}
                >
                  {tool.pricing.raw}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {/* 安裝與設定 - 使用 Markdown */}
          {tool.installation && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">安裝與設定</h2>
              <div className="prose prose-gray max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={MarkdownComponents}
                >
                  {tool.installation}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {/* 基本用法 - 使用 Markdown */}
          {tool.basicUsage && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">基本用法與範例</h2>
              <div className="prose prose-gray max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={MarkdownComponents}
                >
                  {tool.basicUsage}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

