import { notFound } from 'next/navigation';
import { Tool } from '@/types';
import toolsData from '@/data/tools-data.json';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Clock, DollarSign } from 'lucide-react';

interface Props {
  params: {
    id: string;
  };
}

// Generate static params for all tools
export async function generateStaticParams() {
  return toolsData.tools.map((tool) => ({
    id: tool.id,
  }));
}

export default async function ToolDetail({ params }: Props) {
  const { id } = await params;
  const tool = toolsData.tools.find((tool: Tool) => tool.id === id);

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
        {/* 返回按鈕 */}
        <Link 
          href="/" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回首頁
        </Link>

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

          {/* 定價詳情 */}
          {tool.pricing && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">定價方案</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                {tool.pricing.plans.map((plan, index) => (
                  <div key={index} className="mb-2 text-gray-700">
                    • {plan}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 安裝與設定 */}
          {tool.installation && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">安裝與設定</h2>
              <div className="prose max-w-none">
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <code>{tool.installation}</code>
                </pre>
              </div>
            </div>
          )}

          {/* 基本用法 */}
          {tool.basicUsage && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">基本用法與範例</h2>
              <div className="prose max-w-none">
                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <code>{tool.basicUsage}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

