'use client';

import React from 'react';
import Link from 'next/link';
import { initialCategories } from '../data/demoData';
import { ImageWithFallback } from './ImageWithFallback';

export const ShopByCategory: React.FC = () => {
  return (
    <section className="py-12 px-6 lg:px-12 w-full text-center">
      <div className="mb-10 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#8C4351] font-bold">
          Find Your Perfect Style
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5A1827]">
          Shop by Category
        </h2>
        <div className="w-20 h-1 bg-[#5A1827] mx-auto rounded-full mt-3" />
      </div>

      {/* Grid of Circular Category Avatars spanning full page width */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-6 justify-center w-full">
        {initialCategories.map((cat) => (
          <Link
            key={cat.id}
            href={`/products?category=${encodeURIComponent(cat.name)}`}
            className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1.5"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1.5 bg-gradient-to-tr from-[#5A1827] via-[#F7D6D0] to-[#5A1827] shadow-sm group-hover:shadow-lg transition-all">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <ImageWithFallback
                  src={cat.image}
                  alt={cat.name}
                  fallbackText={cat.name}
                  type="category"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="text-center">
              <span className="text-sm font-bold text-[#3B2D2B] group-hover:text-[#5A1827] block transition-colors leading-tight">
                {cat.name}
              </span>
              <span className="text-xs text-[#7A6B68] block mt-0.5 font-semibold">
                {cat.count} Items
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
