'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ArrowLeft, Frown } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { initialProducts } from '../../data/demoData';
import { ProductCard } from '../../components/ProductCard';

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  const wishlistedProducts = initialProducts.filter((p) =>
    wishlist.includes(p.id || p._id)
  );

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-[#EADED2] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#5A1827] fill-[#5A1827]" />
            <h1 className="font-serif text-3xl font-bold text-[#5A1827]">
              My Wishlist
            </h1>
          </div>
          <p className="text-xs text-[#665B58] mt-1">
            {wishlistedProducts.length} saved fashion items
          </p>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A1827] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Continue Browsing
        </Link>
      </div>

      {wishlistedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistedProducts.map((p) => (
            <ProductCard key={p.id || p._id} product={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#EADED2] p-8 space-y-4 max-w-md mx-auto">
          <Heart className="w-12 h-12 text-[#D9C4B5] mx-auto" />
          <h3 className="font-serif text-xl font-bold text-[#5A1827]">
            Your Wishlist is Empty
          </h3>
          <p className="text-xs text-[#665B58]">
            Save sarees, suits, kurtis, or dresses by clicking the heart icon on any product card while browsing.
          </p>
          <Link
            href="/products"
            className="inline-block px-6 py-2.5 rounded-full bg-[#5A1827] text-white text-xs font-semibold hover:bg-[#42101B]"
          >
            Explore Catalogue
          </Link>
        </div>
      )}
    </div>
  );
}
