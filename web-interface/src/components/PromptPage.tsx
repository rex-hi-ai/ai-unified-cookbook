'use client';

import { useState, useEffect } from 'react';
import { Prompt, PromptCategory } from '@/types';
import { Search, Filter, Clock, Tag, ChevronDown, ChevronUp, Copy, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface PromptPageProps {
  promptsData: {
    categories: Record<string, PromptCategory>;
    prompts: Prompt[];
    stats: {
      totalPrompts: number;
      totalCategories: number;
      lastUpdated: string;
    };
  };
}
// 標籤組件 - 僅顯示手動設定的標籤
const ManualTags = ({ tags, onTagToggle, selectedTags }: { 
  tags: string[]; 
  onTagToggle: (tag: string) => void;
  selectedTags: string[];
}) => {
  if (!tags || tags.length === 0) return null;
  
  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {tags.map(tag => {
        const isSelected = selectedTags.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors duration-200 border ${
              isSelected
                ? 'bg-blue-100 text-blue-700 border-blue-300'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200 hover:border-gray-300'
            }`}
          >
            #{tag}
          </button>
        );
      })}
    </div>
  );
};

// 提示詞卡片組件
function PromptCard({ prompt, onTagToggle, selectedTags }: { 
  prompt: Prompt;
  onTagToggle: (tag: string) => void;
  selectedTags: string[];
}) {
  const [copied, setCopied] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation(); // 防止觸發卡片點擊事件
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('複製失敗:', err);
    }
  };

  const handleCardClick = () => {
    // 導航到提示詞詳細頁面
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    window.location.href = `${basePath}/prompts/${prompt.id}`;
  };

  const handleTagClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 防止觸發卡片點擊事件
  };

  // 使用手動設定的標籤，不從路徑生成
  const tags = prompt.tags || [];
  const previewContent = prompt.content.length > 150 
    ? prompt.content.substring(0, 150) + '...'
    : prompt.content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleCardClick}
    >
      <div className="p-4">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
            {prompt.name}
          </h3>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>{formatDate(prompt.lastUpdated)}</span>
          </div>
        </div>

        {/* Content Preview */}
        <div className="bg-gray-50 rounded-lg p-3 mb-3">
          <pre className="text-xs text-gray-700 whitespace-pre-wrap overflow-x-auto line-clamp-4">
            {previewContent}
          </pre>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">點擊查看完整內容</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                copied 
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" />
                  已複製
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  複製
                </>
              )}
            </button>
          </div>
        </div>

        {/* Manual Tags */}
        <div onClick={handleTagClick}>
          <ManualTags tags={tags} onTagToggle={onTagToggle} selectedTags={selectedTags} />
        </div>
      </div>
    </motion.div>
  );
}

export default function PromptPage({ promptsData }: PromptPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredPrompts, setFilteredPrompts] = useState(promptsData.prompts);
  const [showTagSuggestions, setShowTagSuggestions] = useState(false);

  // 從所有提示詞的 tags 欄位中提取標籤
  const getAllTags = () => {
    const tagSet = new Set<string>();
    promptsData.prompts.forEach(prompt => {
      if (prompt.tags) {
        prompt.tags.forEach(tag => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  };

  const allTags = getAllTags();

  // 根據搜尋查詢過濾標籤建議
  const getTagSuggestions = () => {
    if (!searchQuery.includes('#')) return [];
    
    const lastHashIndex = searchQuery.lastIndexOf('#');
    const searchTerm = searchQuery.substring(lastHashIndex + 1).toLowerCase();
    
    if (!searchTerm) return allTags.slice(0, 8); // 顯示前 8 個標籤
    
    return allTags
      .filter(tag => tag.toLowerCase().includes(searchTerm))
      .slice(0, 8);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleTagSuggestionClick = (tag: string) => {
    // 檢查 searchQuery 是否已包含該 tag
    const tagPattern = new RegExp(`#${tag}(\s|$)`, 'i');
    if (tagPattern.test(searchQuery)) {
      setShowTagSuggestions(false);
      return; // 已存在則不重複加入
    }
    const lastHashIndex = searchQuery.lastIndexOf('#');
    if (lastHashIndex !== -1) {
      // 替換最後的 # 後面的內容
      const beforeHash = searchQuery.substring(0, lastHashIndex);
      setSearchQuery(`${beforeHash}#${tag} `);
    } else {
      // 添加新的標籤
      setSearchQuery(prev => `${prev}#${tag} `);
    }
    setShowTagSuggestions(false);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setShowTagSuggestions(false);
  };

  useEffect(() => {
    let results = promptsData.prompts;
    let processedSearchQuery = searchQuery;
    let searchTags: string[] = [];

    // 處理 # 標籤搜尋語法
    if (searchQuery) {
      const tagMatches = searchQuery.match(/#(\w+)/g);
      if (tagMatches) {
        searchTags = tagMatches.map(tag => tag.replace('#', ''));
        // 移除搜尋查詢中的標籤部分，保留其他文字
        processedSearchQuery = searchQuery.replace(/#\w+/g, '').trim();
      }
    }

    // 合併手動選擇的標籤和搜尋中的標籤
    const allSelectedTags = [...new Set([...selectedTags, ...searchTags])];

    // 文字搜尋過濾（排除標籤語法）
    if (processedSearchQuery) {
      results = results.filter(prompt =>
        prompt.name.toLowerCase().includes(processedSearchQuery.toLowerCase()) ||
        prompt.content.toLowerCase().includes(processedSearchQuery.toLowerCase())
      );
    }

    // 標籤過濾（多選）
    if (allSelectedTags.length > 0) {
      results = results.filter(prompt => {
        if (!prompt.tags || prompt.tags.length === 0) return false;
        return allSelectedTags.every(selectedTag => 
          prompt.tags!.includes(selectedTag)
        );
      });
    }

    setFilteredPrompts(results);
  }, [searchQuery, selectedTags, promptsData.prompts]);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              工作流程提示詞
            </h1>
            <p className="text-gray-600">
              探索各種 AI 工作流程提示詞，提升開發和協作效率
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 搜尋面板 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
          {/* 搜尋框 */}
          <div className="p-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="搜尋名稱、內容或使用 #標籤 篩選..."
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowTagSuggestions(e.target.value.includes('#'));
                }}
                onFocus={() => {
                  if (searchQuery.includes('#')) {
                    setShowTagSuggestions(true);
                  }
                }}
                onBlur={() => {
                  // 延遲隱藏，讓用戶可以點擊建議
                  setTimeout(() => setShowTagSuggestions(false), 200);
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setShowTagSuggestions(false);
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              
              {/* 標籤建議下拉選單 */}
              {showTagSuggestions && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                  <div className="p-2">
                    <div className="text-xs text-gray-500 mb-2 px-2">可用標籤：</div>
                    {getTagSuggestions().map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleTagSuggestionClick(tag)}
                        className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-md flex items-center gap-2 transition-colors"
                      >
                        <span className="text-gray-400">#</span>
                        <span>{tag}</span>
                      </button>
                    ))}
                    {getTagSuggestions().length === 0 && (
                      <div className="px-3 py-2 text-sm text-gray-500">找不到匹配的標籤</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* 常用標籤快選 */}
          <div className="px-6 pb-6 border-t border-gray-100">
            <div className="text-sm text-gray-600 mb-3">常用標籤：</div>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 12).map(tag => {
                const tagPattern = new RegExp(`#${tag}(\s|$)`, 'i');
                const alreadyInQuery = tagPattern.test(searchQuery);
                return (
                  <button
                    key={tag}
                    onClick={() => {
                      if (alreadyInQuery) return; // 已存在則不重複加入
                      setSearchQuery(prev => `${prev}#${tag} `.trim() + ' ');
                    }}
                    className={`inline-flex items-center px-2.5 py-1 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 hover:border-gray-300 transition-colors ${alreadyInQuery ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={alreadyInQuery}
                  >
                    <span className="mr-1">#</span>
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 活動篩選標籤 */}
        {(searchQuery || selectedTags.length > 0) && (
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-600 mr-2">活動篩選：</span>
              
              {(() => {
                // 處理搜尋查詢顯示
                const processedSearchQuery = searchQuery?.replace(/#\w+/g, '').trim();
                const searchTags = searchQuery?.match(/#(\w+)/g)?.map(tag => tag.replace('#', '')) || [];
                
                return (
                  <>
                    {processedSearchQuery && (
                      <div className="flex items-center space-x-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        <span>搜尋: "{processedSearchQuery}"</span>
                        <button
                          onClick={() => {
                            const newQuery = searchQuery?.replace(new RegExp(processedSearchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), '').trim() || '';
                            setSearchQuery(newQuery);
                          }}
                          className="hover:bg-blue-200 rounded-full p-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                    
                    {/* 從搜尋中提取的標籤 */}
                    {searchTags.map(tag => (
                      <div
                        key={`search-${tag}`}
                        className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                      >
                        <span>#{tag}</span>
                        <button
                          onClick={() => {
                            const newQuery = searchQuery?.replace(`#${tag}`, '').trim() || '';
                            setSearchQuery(newQuery);
                          }}
                          className="hover:bg-green-200 rounded-full p-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                    
                    {/* 手動選擇的標籤 */}
                    {selectedTags.map(tag => (
                      <div
                        key={`manual-${tag}`}
                        className="flex items-center space-x-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        <span>#{tag}</span>
                        <button
                          onClick={() => handleTagToggle(tag)}
                          className="hover:bg-gray-200 rounded-full p-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </>
                );
              })()} 
              
              <button
                onClick={clearAllFilters}
                className="text-sm text-gray-500 hover:text-gray-700 underline ml-2"
              >
                清除全部
              </button>
            </div>
          </div>
        )}

        {/* Results */}
        <div className="mb-4">
          <div className="text-sm text-gray-600">
            找到 {filteredPrompts.length} 個提示詞
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map((prompt) => (
            <PromptCard 
              key={prompt.id} 
              prompt={prompt} 
              onTagToggle={handleTagToggle}
              selectedTags={selectedTags}
            />
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              找不到匹配的提示詞
            </h3>
            <p className="text-gray-600">
              請嘗試調整搜尋關鍵詞或點擊標籤篩選
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
