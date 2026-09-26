import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function NewArrivals({ 
  products, 
  onAddToCart, 
  onQuickView, 
  onDirectWhatsAppOrder,
  onViewAll 
}) {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
      
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight font-serif">
          New Arrivals
        </h2>
        <button
          onClick={onViewAll}
          className="text-xs font-bold text-[#70142C] hover:underline flex items-center gap-1 cursor-pointer"
        >
          View All <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid of 6 Product Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleSelectAddToCart}
            onQuickView={onQuickView}
            onDirectWhatsAppOrder={onDirectWhatsAppOrder}
          />
        ))}
      </div>

    </div>
  );

  function handleSelectAddToCart(item) {
    if (onAddToCart) onAddToCart(item);
  }
}
