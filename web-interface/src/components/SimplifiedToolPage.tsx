'use client';

import { useState, useEffect } from 'react';
import { Tool, Category } from '@/types';
import { Search, Filter, Clock, ExternalLink, Tag, DollarSign } from 'lucide-react';
import Link from 'next/link';

interface SimplifiedToolPageProps {
  toolsData: {
    categories: Record<string, Category>;
    tools: Tool[];
    stats: {
      totalTools: number;
      totalCategories: number;
      freeTools: number;
      lastUpdated: string;
    };
  };
}

export default function SimplifiedToolPage({ toolsData }: SimplifiedToolPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredTools, setFilteredTools] = useState(toolsData.tools);

  useEffect(() => {
    let results = toolsData.tools;

    // 搜尋過濾
    if (searchQuery) {
      results = results.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.overview.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 分類過濾
    if (selectedCategory) {
      results = results.filter(tool => tool.category === selectedCategory);
    }

    setFilteredTools(results);
  }, [searchQuery, selectedCategory, toolsData.tools]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryName = (categoryKey: string) => {
    return toolsData.categories[categoryKey]?.name || categoryKey;
  };

  const getPriceDisplay = (tool: Tool) => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              工具庫
            </h1>
            <p className="text-gray-600">
              探索各種 AI 工具，找到最適合您需求的解決方案
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="搜尋工具..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-4 h-4" />
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
              >
                <option value="">所有分類</option>
                {Object.entries(toolsData.categories).map(([key, category]) => (
                  <option key={key} value={key}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <div className="text-sm text-gray-600">
            找到 {filteredTools.length} 個工具
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {filteredTools.map((tool) => (
            <Link key={tool.id} href={`/tools/${tool.id}`} className="block h-full">
              <div className="bg-white rounded-lg shadow-sm p-4 h-full hover:shadow-md transition-shadow cursor-pointer flex flex-col min-h-[240px]">
                <div className="flex-shrink-0">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {tool.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                    <Tag className="w-3 h-3" />
                    <span>{getCategoryName(tool.category)}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>{formatDate(tool.lastUpdated)}</span>
                  </div>
                </div>

                <div className="flex-grow flex flex-col">
                  <div className="bg-gray-50 rounded-lg p-3 mb-3 flex-grow">
                    <p className="text-xs text-gray-700 line-clamp-3">
                      {tool.overview || '暫無描述'}
                    </p>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="flex-shrink-0 mt-auto">
                  {tool.features.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {tool.features.slice(0, 2).map((feature, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {tool.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                          +{tool.features.length - 2}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              找不到匹配的工具
            </h3>
            <p className="text-gray-600">
              請嘗試調整搜尋關鍵詞或分類篩選
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
