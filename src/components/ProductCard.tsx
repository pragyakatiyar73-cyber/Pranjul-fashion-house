'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, MessageCircle, Calendar, Star, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { formatPrice, getWhatsAppLink } from '../lib/utils';
import { useWishlist } from '../context/WishlistContext';
import { ReserveModal } from './ReserveModal';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const isWishlisted = isInWishlist(product.id || product._id);

  // Badge determination
  let badgeText = '';
  let badgeBg = '';
  if (product.isNewArrival) {
    badgeText = 'NEW';
    badgeBg = 'bg-[#5A1827] text-white';
  } else if (product.isSale) {
    badgeText = 'SALE';
    badgeBg = 'bg-[#C0392B] text-white';
  } else if (product.isTrending) {
    badgeText = 'TRENDING';
    badgeBg = 'bg-[#D35400] text-white';
  } else if (product.isBestSeller) {
    badgeText = 'BESTSELLER';
    badgeBg = 'bg-[#27AE60] text-white';
  }

  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  // Star rating generator (Flipkart style: 4.3 to 4.9)
  const rating = (4.2 + (parseInt(product.id?.replace(/\D/g, '') || '3', 10) % 8) * 0.1).toFixed(1);
  const reviewsCount = 45 + (parseInt(product.id?.replace(/\D/g, '') || '5', 10) * 12) % 180;

  return (
    <>
      <div className="group rounded-2xl bg-white border border-[#EADED2] shadow-2xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between w-full">
        <div className="relative aspect-4/5 overflow-hidden bg-[#FAF7F2]">
          {/* Main Product Image */}
          <Link href={`/products/${product.id || product._id}`}>
            <ImageWithFallback
              src={product.images[0]}
              alt={product.name}
              fallbackText={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </Link>

          {/* Badge */}
          {badgeText && (
            <span
              className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-extrabold tracking-wider uppercase shadow-xs ${badgeBg}`}
            >
              {badgeText}
            </span>
          )}

          {/* SKU Badge */}
          <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-black/60 text-white text-[9px] font-mono tracking-wide">
            {product.id || product._id}
          </span>

          {/* Wishlist Button */}
          <button
            onClick={() => toggleWishlist(product.id || product._id)}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors shadow-xs ${
              isWishlisted
                ? 'bg-[#5A1827] text-white'
                : 'bg-white/90 text-[#5A1827] hover:bg-white'
            }`}
            title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Product Details */}
        <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] uppercase tracking-wider text-[#8C665D] font-bold block">
                {product.category}
              </span>

              {/* Flipkart Star Rating Badge */}
              <div className="flex items-center gap-1 bg-[#27AE60] text-white px-1.5 py-0.5 rounded-sm text-[10px] font-bold">
                <span>{rating}</span>
                <Star className="w-2.5 h-2.5 fill-white" />
              </div>
            </div>

            <Link href={`/products/${product.id || product._id}`}>
              <h3 className="text-xs sm:text-sm font-bold text-[#231815] group-hover:text-[#5A1827] transition-colors line-clamp-1">
                {product.name}
              </h3>
            </Link>

            {/* Price & Stock */}
            <div className="mt-2 flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold text-[#5A1827]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-xs text-[#8C7A77] line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="text-[10px] font-bold text-[#27AE60] bg-[#E8F8F0] px-1 py-0.5 rounded-sm">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>

              {/* Stock status indicator */}
              <div className="flex items-center gap-1 text-[10px] font-semibold text-[#27AE60]">
                <span className="w-2 h-2 rounded-full bg-[#27AE60]" />
                <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons (NO Cart/Checkout - Inquiry & Reservation Only) */}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={getWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-[#5A1827] text-white text-[11px] font-bold hover:bg-[#42101B] transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Enquire</span>
            </a>

            <button
              onClick={() => setReserveModalOpen(true)}
              className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl border border-[#5A1827] text-[#5A1827] text-[11px] font-bold hover:bg-[#F2E8DF] transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve</span>
            </button>
          </div>
        </div>
      </div>

      {/* Reserve Modal */}
      {reserveModalOpen && (
        <ReserveModal
          product={product}
          onClose={() => setReserveModalOpen(false)}
        />
      )}
    </>
  );
};
