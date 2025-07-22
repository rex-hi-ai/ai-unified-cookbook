'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { FilterOptions, Category } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchAndFilterProps {
  categories: Record<string, Category>;
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  totalResults: number;
}

export default function SearchAndFilter({
  categories,
  filters,
  onFiltersChange,
  totalResults
}: SearchAndFilterProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [searchInput, setSearchInput] = useState(filters.searchQuery);

  // 延遲搜尋
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== filters.searchQuery) {
        onFiltersChange({ ...filters, searchQuery: searchInput });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput, filters, onFiltersChange]);

  const handleCategoryToggle = (categoryKey: string) => {
    const newCategories = filters.categories.includes(categoryKey)
      ? filters.categories.filter(c => c !== categoryKey)
      : [...filters.categories, categoryKey];
    
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handlePriceToggle = () => {
    onFiltersChange({ 
      ...filters, 
      hasFree: filters.hasFree === null ? true : filters.hasFree ? false : null 
    });
  };

  const handleSortChange = (sortBy: FilterOptions['sortBy']) => {
    onFiltersChange({ 
      ...filters, 
      sortBy,
      sortOrder: filters.sortBy === sortBy && filters.sortOrder === 'asc' ? 'desc' : 'asc'
    });
  };

  const clearFilters = () => {
    setSearchInput('');
    onFiltersChange({
      categories: [],
      hasFree: null,
      priceRange: null,
      searchQuery: '',
      sortBy: 'name',
      sortOrder: 'asc'
    });
  };

  const activeFiltersCount = 
    filters.categories.length + 
    (filters.hasFree !== null ? 1 : 0) + 
    (filters.searchQuery ? 1 : 0);

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* 搜尋列 */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜尋 AI 工具..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            {searchInput && (
              <button
                onClick={() => setSearchInput('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
              showFilters || activeFiltersCount > 0
                ? 'border-primary-500 bg-primary-50 text-primary-700'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>篩選</span>
            {activeFiltersCount > 0 && (
              <span className="bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* 結果數量和排序 */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-600">
            找到 <span className="font-medium text-gray-900">{totalResults}</span> 個工具
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">排序：</span>
            <select
              value={`${filters.sortBy}-${filters.sortOrder}`}
              onChange={(e) => {
                const [sortBy, sortOrder] = e.target.value.split('-') as [FilterOptions['sortBy'], FilterOptions['sortOrder']];
                onFiltersChange({ ...filters, sortBy, sortOrder });
              }}
              className="text-sm border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="name-asc">名稱 A-Z</option>
              <option value="name-desc">名稱 Z-A</option>
              <option value="category-asc">分類 A-Z</option>
              <option value="updated-desc">最近更新</option>
              <option value="price-asc">價格低到高</option>
              <option value="price-desc">價格高到低</option>
            </select>
          </div>
        </div>

        {/* 篩選選項 */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="border-t border-gray-200 pt-4 space-y-4">
                {/* 分類篩選 */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">分類</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {Object.entries(categories).map(([key, category]) => (
                      <button
                        key={key}
                        onClick={() => handleCategoryToggle(key)}
                        className={`text-left p-2 rounded-lg border text-sm transition-colors ${
                          filters.categories.includes(key)
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium">{category.name}</div>
                        <div className="text-xs text-gray-500">{category.count} 個工具</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 價格篩選 */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">定價</h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handlePriceToggle}
                      className={`px-3 py-2 rounded-lg border text-sm transition-colors ${
                        filters.hasFree === true
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : filters.hasFree === false
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {filters.hasFree === null 
                        ? '全部' 
                        : filters.hasFree 
                        ? '僅顯示免費' 
                        : '僅顯示付費'}
                    </button>
                  </div>
                </div>

                {/* 清除篩選 */}
                {activeFiltersCount > 0 && (
                  <div className="flex justify-end">
                    <button
                      onClick={clearFilters}
                      className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      <span>清除所有篩選</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 活動篩選標籤 */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-200">
            {filters.searchQuery && (
              <div className="flex items-center space-x-1 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                <span>搜尋: "{filters.searchQuery}"</span>
                <button
                  onClick={() => {
                    setSearchInput('');
                    onFiltersChange({ ...filters, searchQuery: '' });
                  }}
                  className="hover:bg-primary-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            {filters.categories.map(categoryKey => (
              <div
                key={categoryKey}
                className="flex items-center space-x-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                <span>{categories[categoryKey]?.name}</span>
                <button
                  onClick={() => handleCategoryToggle(categoryKey)}
                  className="hover:bg-gray-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}

            {filters.hasFree !== null && (
              <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                <span>{filters.hasFree ? '僅免費' : '僅付費'}</span>
                <button
                  onClick={() => onFiltersChange({ ...filters, hasFree: null })}
                  className="hover:bg-green-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
