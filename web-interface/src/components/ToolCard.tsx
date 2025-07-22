'use client';

import { Tool } from '@/types';
import { ExternalLink, Star, Clock, DollarSign, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ToolCardProps {
  tool: Tool;
  onSelect?: (tool: Tool) => void;
  isSelected?: boolean;
  showComparison?: boolean;
}

export default function ToolCard({ 
  tool, 
  onSelect, 
  isSelected = false, 
  showComparison = false 
}: ToolCardProps) {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`card p-6 relative ${
        isSelected ? 'ring-2 ring-primary-500 shadow-lg' : ''
      }`}
    >
      {showComparison && (
        <div className="absolute top-4 right-4">
          <button
            onClick={() => onSelect?.(tool)}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
              isSelected
                ? 'bg-primary-500 border-primary-500 text-white'
                : 'border-gray-300 hover:border-primary-500'
            }`}
          >
            {isSelected && <CheckCircle className="w-4 h-4" />}
          </button>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {tool.name}
          </h3>
          <div className="flex items-center space-x-2 mb-3">
            <span className={`badge ${getCategoryColor(tool.category)}`}>
              {tool.category}
            </span>
            {tool.pricing?.hasFree && (
              <span className="badge badge-success">免費</span>
            )}
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {tool.overview}
      </p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-500">
            <DollarSign className="w-4 h-4 mr-1" />
            <span>定價</span>
          </div>
          <span className="font-medium text-gray-900">
            {getPriceDisplay()}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span>更新</span>
          </div>
          <span className="text-gray-600">
            {formatDate(tool.lastUpdated)}
          </span>
        </div>
      </div>

      {tool.features.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">主要功能</h4>
          <div className="space-y-1">
            {tool.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
            {tool.features.length > 3 && (
              <div className="text-sm text-gray-500">
                +{tool.features.length - 3} 更多功能
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <Link
          href={`/tools/${tool.id}`}
          className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
        >
          查看詳情
        </Link>
        
        {tool.resources.length > 0 && (
          <button
            onClick={() => window.open(tool.resources[0].url, '_blank')}
            className="flex items-center text-gray-500 hover:text-gray-700 text-sm transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            官方網站
          </button>
        )}
      </div>
    </motion.div>
  );
}
