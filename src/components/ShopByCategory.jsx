import React from 'react';
import { ArrowRight, LayoutGrid } from 'lucide-react';

export default function ShopByCategory({ selectedCategory, setSelectedCategory }) {
  const fallbackImg = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80";

  const categories = [
    {
      name: 'Home Wear',
      label: 'Home Wear',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: 'Party Wear',
      label: 'Party Wear',
      icon: '🎉',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: 'Western Dresses',
      label: 'Western',
      icon: '👚',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: 'Formal Wear',
      label: 'Formal Wear',
      icon: '👔',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: 'School Dresses',
      label: 'School Uniforms',
      icon: '🏫',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: 'Sarees & Traditional Wear',
      label: 'Sarees',
      icon: '👘',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: "Men's Clothing",
      label: "Men's Wear",
      icon: '👕',
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: "Women's Clothing",
      label: "Women's Wear",
      icon: '👗',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: "Kids Clothing",
      label: "Kids' Wear",
      icon: '👶',
      image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: 'Tourist Wear',
      label: 'Tourist/Travel',
      icon: '🧳',
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400&auto=format&fit=crop&q=80',
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-extrabold text-gray-900 font-serif">
          Explore by Category
        </h3>
        {selectedCategory !== 'All' && (
          <button
            onClick={() => setSelectedCategory('All')}
            className="text-xs font-bold text-[#70142C] hover:underline cursor-pointer"
          >
            Show All Products ✕
          </button>
        )}
      </div>

      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 pt-1">
        
        {/* 1. Title Box Card */}
        <div 
          onClick={() => setSelectedCategory('All')}
          className={`shrink-0 w-32 h-36 bg-[#FAF0F2] rounded-2xl p-4 flex flex-col justify-between cursor-pointer border transition ${
            selectedCategory === 'All' ? 'border-[#70142C] ring-2 ring-[#70142C]/20 shadow-md' : 'border-[#F3DBE0] hover:shadow-md'
          }`}
        >
          <div className="flex flex-col">
            <span className="text-[#70142C] font-black text-sm leading-snug">
              Shop All Categories
            </span>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#70142C] text-white flex items-center justify-center">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* 2. Category Cards with image onError fallback */}
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.name;
          return (
            <div
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className="shrink-0 w-28 sm:w-32 flex flex-col items-center cursor-pointer group"
            >
              <div className={`w-full h-28 rounded-2xl overflow-hidden bg-[#FAF0F2] border transition p-1.5 flex items-center justify-center relative ${
                isSelected ? 'border-[#70142C] ring-2 ring-[#70142C]/20 shadow-md' : 'border-gray-200 group-hover:border-[#70142C]/50'
              }`}>
                <span className="absolute top-2 left-2 z-10 text-xs bg-white/90 rounded-full w-5 h-5 flex items-center justify-center shadow-2xs">
                  {cat.icon}
                </span>

                <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImg;
                    }}
                  />
                </div>
              </div>

              <span className={`text-xs font-bold mt-2 transition-colors text-center line-clamp-1 ${
                isSelected ? 'text-[#70142C]' : 'text-gray-800 group-hover:text-[#70142C]'
              }`}>
                {cat.label}
              </span>
            </div>
          );
        })}

        {/* 3. Last Card */}
        <div 
          onClick={() => setSelectedCategory('All')}
          className="shrink-0 w-32 h-36 bg-[#FAF0F2] rounded-2xl p-3 flex flex-col items-center justify-center text-center cursor-pointer border border-[#F3DBE0] hover:shadow-md transition group"
        >
          <div className="w-10 h-10 rounded-full bg-[#70142C]/10 text-[#70142C] flex items-center justify-center mb-2 group-hover:bg-[#70142C] group-hover:text-white transition">
            <LayoutGrid className="w-5 h-5" />
          </div>
          <span className="text-[#70142C] font-bold text-xs leading-tight">
            All Categories
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#70142C] mt-1" />
        </div>

      </div>
    </div>
  );
}
