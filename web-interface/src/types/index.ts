// 工具資料型別定義
export interface Tool {
  id: string;
  name: string;
  category: string;
  overview: string;
  features: string[];
  useCases: string[];
  pricing: PricingInfo | null;
  installation: string;
  basicUsage: string;
  resources: Resource[];
  lastUpdated: string;
  // 可選的前置資料欄位
  tags?: string[];
  rating?: number;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  status?: 'active' | 'beta' | 'deprecated';
}

// 定價資訊
export interface PricingInfo {
  plans: string[];
  hasFree: boolean;
  minPrice: number | null;
  maxPrice: number | null;
  raw: string;
}

// 官方資源
export interface Resource {
  name: string;
  url: string;
}

// 分類資訊
export interface Category {
  name: string;
  description: string;
  tools: Tool[];
  count: number;
}

// 統計資訊
export interface Stats {
  totalTools: number;
  totalCategories: number;
  freeTools: number;
  lastUpdated: string;
}

// 主要資料結構
export interface ToolsData {
  stats: Stats;
  categories: Record<string, Category>;
  tools: Tool[];
}

// 篩選選項
export interface FilterOptions {
  categories: string[];
  hasFree: boolean | null;
  priceRange: [number, number] | null;
  searchQuery: string;
  sortBy: 'name' | 'category' | 'updated' | 'price';
  sortOrder: 'asc' | 'desc';
}

// 比較工具
export interface ComparisonTool {
  tool: Tool;
  selected: boolean;
}

// 搜尋結果
export interface SearchResult {
  tool: Tool;
  score: number;
  matches: string[];
}
