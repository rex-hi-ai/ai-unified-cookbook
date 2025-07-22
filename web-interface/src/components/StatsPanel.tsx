'use client';

import { Stats, Category } from '@/types';
import { TrendingUp, Users, Gift, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatsPanelProps {
  stats: Stats;
  categories: Record<string, Category>;
  onCategoryFilter?: (category: string) => void;
}

export default function StatsPanel({ stats, categories, onCategoryFilter }: StatsPanelProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const topCategories = Object.entries(categories)
    .sort(([,a], [,b]) => b.count - a.count)
    .slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="bg-gradient-to-br from-primary-50 to-blue-50 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            AI 工具生態系概覽
          </h2>
          <p className="text-gray-600">
            持續更新的 AI 工具調研資料庫，幫助您發現最適合的 AI 解決方案
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div 
            className="card p-6 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-primary-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stats.totalTools}
            </div>
            <div className="text-sm text-gray-600">
              AI 工具總數
            </div>
          </motion.div>

          <motion.div 
            className="card p-6 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stats.totalCategories}
            </div>
            <div className="text-sm text-gray-600">
              工具分類
            </div>
          </motion.div>

          <motion.div 
            className="card p-6 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stats.freeTools}
            </div>
            <div className="text-sm text-gray-600">
              免費工具
            </div>
          </motion.div>

          <motion.div 
            className="card p-6 text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-xs text-gray-600 mb-1">
              最後更新
            </div>
            <div className="text-sm font-medium text-gray-900">
              {formatDate(stats.lastUpdated)}
            </div>
          </motion.div>
        </div>

        {/* 熱門分類 */}
        <motion.div className="card p-6" variants={itemVariants}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            熱門分類
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {topCategories.map(([key, category], index) => (
              <div key={key} className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  index === 0 ? 'bg-yellow-100 text-yellow-800' :
                  index === 1 ? 'bg-gray-100 text-gray-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  #{index + 1}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{category.name}</div>
                  <div className="text-sm text-gray-600">{category.count} 個工具</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 分類快速導覽 */}
        <motion.div className="mt-8" variants={itemVariants}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            瀏覽分類
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {Object.entries(categories).map(([key, category]) => (
              <motion.button
                key={key}
                className="card p-4 text-center hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // 觸發分類篩選
                  onCategoryFilter?.(key);
                  // 稍微延遲後滾動到工具列表
                  setTimeout(() => {
                    document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {category.name}
                </div>
                <div className="text-xs text-gray-500">
                  {category.count} 個工具
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
