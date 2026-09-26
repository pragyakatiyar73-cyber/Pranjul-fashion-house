import React, { useState } from 'react';
import { MessageCircle, Star } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView, onDirectWhatsAppOrder }) {
  const [selectedSize, setSelectedSize] = useState(
    product.selectedSize || (product.sizes && product.sizes[0]) || 'Free Size'
  );

  const tagColor = product.tagType === 'green' || product.tag === 'NEW'
    ? 'bg-[#22C55E]' 
    : 'bg-[#EF4444]';

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-3 flex flex-col justify-between shadow-xs hover:shadow-md transition duration-200 group">
      
      {/* 1. Image Container */}
      <div 
        className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#FAF0F2] mb-3 cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        {/* Tag (NEW / OFFER) */}
        {product.tag && (
          <span className={`absolute top-2 left-2 z-10 ${tagColor} text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs`}>
            {product.tag}
          </span>
        )}

        {/* Rating Badge */}
        {product.rating && (
          <div className="absolute top-2 right-2 z-10 bg-white/90 backdrop-blur-2xs text-gray-900 text-[10px] font-bold px-1.5 py-0.5 rounded-md shadow-xs flex items-center gap-0.5">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span>{product.rating}</span>
          </div>
        )}

        {/* Product Image */}
        <img
          src={product.image || product.images?.[0]}
          alt={product.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80";
          }}
        />
      </div>

      {/* 2. Text Meta Details */}
      <div className="flex flex-col gap-0.5 mb-2">
        <h4 
          onClick={() => onQuickView(product)}
          className="font-bold text-gray-900 text-xs sm:text-sm line-clamp-1 cursor-pointer hover:text-[#70142C] transition"
        >
          {product.title}
        </h4>

        {/* SKU */}
        <span className="text-[10px] text-gray-400 font-medium">
          {product.sku || product.id}
        </span>

        {/* Category Demographic */}
        <span className="text-[10px] text-gray-500 font-semibold mb-1">
          {product.category || `${product.gender} Wear`}
        </span>

        {/* Price Row */}
        <div className="flex items-baseline gap-1.5 flex-wrap my-0.5">
          <span className="text-xs text-gray-400 line-through font-medium">
            ₹{(product.mrp || product.original_mrp || product.price * 1.2).toLocaleString('en-IN')}
          </span>
          <span className="text-sm font-black text-[#70142C]">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <span className="text-[10px] font-bold text-red-600">
            ({product.discount || `${product.discount_percent || 15}% OFF`})
          </span>
        </div>
      </div>

      {/* 3. Sizes Pill Row */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1 mb-2">
          {product.sizes.map((sz) => {
            const isSelected = selectedSize === sz;
            return (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`text-[9px] font-bold px-1.5 py-0.5 rounded border transition shrink-0 cursor-pointer ${
                  isSelected
                    ? 'border-[#70142C] bg-[#FAF0F2] text-[#70142C]'
                    : 'border-gray-200 text-gray-600 hover:border-gray-400'
                }`}
              >
                {sz}
              </button>
            );
          })}
        </div>
      )}

      {/* 4. Color Swatches Row */}
      {product.colors && product.colors.length > 0 && (
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-[9px] font-bold text-gray-400 mr-0.5">Color:</span>
          {product.colors.map((clr, idx) => (
            <span
              key={idx}
              className="w-2.5 h-2.5 rounded-full border border-gray-300 shadow-2xs"
              style={{ backgroundColor: clr }}
            />
          ))}
        </div>
      )}

      {/* 5. Stock Status */}
      <div className="flex items-center gap-1 text-[10px] font-bold text-[#22C55E] mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
        <span>In Stock</span>
      </div>

      {/* 6. Action Buttons */}
      <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-gray-100">
        <button
          onClick={() => onQuickView(product)}
          className="border border-[#70142C] text-[#70142C] hover:bg-[#70142C] hover:text-white text-[10px] font-bold py-1.5 px-2 rounded-lg transition cursor-pointer text-center truncate"
        >
          View Details
        </button>

        <button
          onClick={() => onDirectWhatsAppOrder(product, selectedSize)}
          className="bg-[#22C55E] hover:bg-[#16a34a] text-white text-[10px] font-bold py-1.5 px-2 rounded-lg flex items-center justify-center gap-1 transition cursor-pointer truncate shadow-xs"
        >
          <MessageCircle className="w-3 h-3 fill-current shrink-0" />
          WhatsApp
        </button>
      </div>

    </div>
  );
}
