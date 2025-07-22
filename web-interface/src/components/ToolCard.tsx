'use client';

import { Tool } from '@/types';
import { ExternalLink, Star, Clock, CheckCircle } from 'lucide-react';
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


  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Link href={`/tools/${tool.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className={`card p-3 relative cursor-pointer ${
          isSelected ? 'ring-2 ring-primary-500 shadow-lg' : ''
        }`}
      >
        {showComparison && (
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSelect?.(tool);
              }}
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

        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className={`badge text-xs ${getCategoryColor(tool.category)}`}>
              {tool.category}
            </span>
          </div>
          <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
            {tool.name}
          </h3>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {tool.overview}
        </p>

        <div className="text-xs text-gray-500 mb-4">
          更新: {formatDate(tool.lastUpdated)}
        </div>

        {tool.resources.length > 0 && (
          <div className="flex items-center justify-end pt-3 border-t border-gray-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(tool.resources[0].url, '_blank');
              }}
              className="flex items-center text-gray-500 hover:text-gray-700 text-sm transition-colors z-10"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              官方網站
            </button>
          </div>
        )}
      </motion.div>
    </Link>
  );
}
