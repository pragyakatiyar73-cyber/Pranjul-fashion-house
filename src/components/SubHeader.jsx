import React from 'react';
import { Tag, Sparkles, MessageCircle, Flame } from 'lucide-react';

export default function SubHeader({ 
  selectedCategory, 
  setSelectedCategory, 
  activeFilter, 
  setActiveFilter,
  onOpenWhatsAppModal 
}) {
  const demographics = [
    { label: 'All Collections', value: 'All' },
    { label: "Women's Wear", value: 'Women' },
    { label: "Men's Wear", value: 'Men' },
    { label: "Boy's Wear", value: 'Boys' },
    { label: "Girl's Wear", value: 'Girls' },
    { label: 'Kids & Baby', value: 'Kids' }
  ];

  return (
    <div className="w-full bg-amazon-light_navy text-white text-xs sm:text-sm font-medium border-b border-gray-700 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between overflow-x-auto whitespace-nowrap scrollbar-none py-2 gap-3">
        
        {/* Category Demographic Buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          {demographics.map((demo) => (
            <button
              key={demo.value}
              onClick={() => {
                setSelectedCategory(demo.value);
                setActiveFilter('all');
              }}
              className={`px-3 py-1.5 rounded transition flex items-center gap-1 cursor-pointer text-xs sm:text-sm ${
                selectedCategory === demo.value && activeFilter === 'all'
                  ? 'bg-amber-400 text-black font-extrabold shadow'
                  : 'hover:bg-gray-700 text-gray-200'
              }`}
            >
              {demo.label}
            </button>
          ))}
        </div>

        {/* Feature Highlights & WhatsApp Button */}
        <div className="flex items-center gap-2 border-l border-gray-600 pl-3 shrink-0">
          <button
            onClick={() => {
              setActiveFilter('festival');
              setSelectedCategory('All');
            }}
            className={`px-3 py-1.5 rounded transition flex items-center gap-1.5 font-extrabold text-xs cursor-pointer ${
              activeFilter === 'festival'
                ? 'bg-red-600 text-white shadow-md'
                : 'hover:bg-red-900/60 text-red-300 border border-red-500/40 bg-red-950/30'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
            Festival Offers (50% OFF)
          </button>

          <button
            onClick={() => {
              setActiveFilter('new');
              setSelectedCategory('All');
            }}
            className={`px-3 py-1.5 rounded transition flex items-center gap-1.5 font-extrabold text-xs cursor-pointer ${
              activeFilter === 'new'
                ? 'bg-purple-600 text-white shadow-md'
                : 'hover:bg-purple-900/60 text-purple-300 border border-purple-500/40 bg-purple-950/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
            New Collections 2026
          </button>

          <button
            onClick={onOpenWhatsAppModal}
            className="flex items-center gap-1.5 text-green-400 hover:text-green-300 bg-green-950/80 px-3 py-1.5 rounded border border-green-500/50 transition font-bold text-xs cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            Join WhatsApp Channel
          </button>
        </div>

      </div>
    </div>
  );
}
