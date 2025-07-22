"use client";

import ToolCard from '@/components/ToolCard';
import SearchAndFilter from '@/components/SearchAndFilter';
import StatsPanel from '@/components/StatsPanel';
import { useState, useEffect } from 'react';
import { ToolsData, FilterOptions } from '@/types';
import Fuse from 'fuse.js';

interface HomePageProps {
  toolsData: ToolsData;
}

export default function HomePage({ toolsData }: HomePageProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    hasFree: null,
    priceRange: null,
    searchQuery: '',
    sortBy: 'name',
    sortOrder: 'asc',
  });
  const [filteredTools, setFilteredTools] = useState(toolsData.tools);

  useEffect(() => {
    let results = toolsData.tools;

    // 搜尋過濾
    if (filters.searchQuery) {
      const fuse = new Fuse(results, {
        keys: ['name', 'overview', 'features', 'useCases'],
        threshold: 0.3,
      });
      results = fuse.search(filters.searchQuery).map(result => result.item);
    }

    // 分類過濾
    if (filters.categories.length > 0) {
      results = results.filter(tool => filters.categories.includes(tool.category));
    }

    // 價格過濾
    if (filters.hasFree !== null) {
      results = results.filter(tool => tool.pricing?.hasFree === filters.hasFree);
    }

    // 排序
    results = results.sort((a, b) => {
      const isAsc = filters.sortOrder === 'asc' ? 1 : -1;
      switch (filters.sortBy) {
        case 'name':
          return isAsc * a.name.localeCompare(b.name);
        case 'category':
          return isAsc * a.category.localeCompare(b.category);
        case 'updated':
          return isAsc * new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        case 'price':
          const aPrice = a.pricing?.minPrice || Infinity;
          const bPrice = b.pricing?.minPrice || Infinity;
          return isAsc * (aPrice - bPrice);
        default:
          return 0;
      }
    });

    setFilteredTools(results);
  }, [filters, toolsData.tools]);

  return (
    <div>
      {/* 統計面板 */}
      <StatsPanel stats={toolsData.stats} categories={toolsData.categories} onCategoryFilter={(category) => {
        setFilters((prevFilters) => ({ ...prevFilters, categories: [category] }));
      }} />

      {/* 搜尋與篩選 */}
      <SearchAndFilter
        categories={toolsData.categories}
        filters={filters}
        onFiltersChange={setFilters}
        totalResults={filteredTools.length}
      />

      {/* 工具列表 */}
      <section id="tools-section" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
