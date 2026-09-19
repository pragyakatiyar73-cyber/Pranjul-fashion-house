import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { initialCollections } from '../../data/demoData';

export default function CollectionsPage() {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto space-y-8">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-[#8C4351] font-semibold flex items-center justify-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> Curated Elegance
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#5A1827]">
          Our Fashion Collections
        </h1>
        <p className="text-xs sm:text-sm text-[#665B58]">
          Explore seasonal lookbooks and curated fashion edits designed for your special moments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialCollections.map((col) => (
          <div
            key={col.id}
            className="group rounded-3xl bg-white border border-[#EADED2] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative aspect-16/10 overflow-hidden bg-[#FAF7F2]">
              <img
                src={col.coverImage}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {col.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#5A1827] text-white text-[10px] font-bold uppercase tracking-wider">
                  {col.badge}
                </span>
              )}
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#231815] group-hover:text-[#5A1827] transition-colors">
                  {col.title}
                </h3>
                <p className="text-xs text-[#665B58] mt-2 leading-relaxed">
                  {col.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2E8DF]">
                <Link
                  href={`/products?category=${encodeURIComponent(col.title)}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#5A1827] hover:underline"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
