'use client';

import React from 'react';
import Link from 'next/link';
import { initialCategories } from '../data/demoData';
import { ImageWithFallback } from './ImageWithFallback';

export const ShopByCategory: React.FC = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto text-center">
      <div className="mb-8 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#8C4351] font-bold">
          Find Your Perfect Style
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5A1827]">
          Shop by Category
        </h2>
        <div className="w-16 h-0.5 bg-[#5A1827] mx-auto rounded-full mt-2" />
      </div>

      {/* Grid of Circular Category Avatars matching uploaded UI mockup */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 sm:gap-6 justify-center">
        {initialCategories.map((cat) => (
          <Link
            key={cat.id}
            href={`/products?category=${encodeURIComponent(cat.name)}`}
            className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#5A1827] via-[#F7D6D0] to-[#5A1827] shadow-sm group-hover:shadow-md transition-all">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <ImageWithFallback
                  src={cat.image}
                  alt={cat.name}
                  fallbackText={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="text-center">
              <span className="text-xs sm:text-sm font-semibold text-[#3B2D2B] group-hover:text-[#5A1827] block transition-colors leading-tight">
                {cat.name}
              </span>
              <span className="text-[10px] text-[#7A6B68] block mt-0.5 font-medium">
                {cat.count} Items
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
