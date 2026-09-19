import React from 'react';
import Link from 'next/link';
import { Tag, Sparkles } from 'lucide-react';
import { initialProducts } from '../../data/demoData';
import { ProductCard } from '../../components/ProductCard';

export default function OffersPage() {
  const saleProducts = initialProducts.filter((p) => p.isSale || (p.originalPrice && p.originalPrice > p.price));

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto space-y-8">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7D6D0] text-[#5A1827] text-xs font-bold uppercase tracking-wider">
          <Tag className="w-3.5 h-3.5" /> Special Discounts & Deals
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#5A1827]">
          Offers & Savings
        </h1>
        <p className="text-xs sm:text-sm text-[#665B58]">
          Discover discounted suit sets, sarees, and kurtis available at special boutique prices in Chaubepur.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {saleProducts.map((p) => (
          <ProductCard key={p.id || p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
