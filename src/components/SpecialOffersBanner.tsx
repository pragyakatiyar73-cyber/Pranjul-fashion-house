'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Tag, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const SpecialOffersBanner: React.FC = () => {
  return (
    <section className="py-10 px-6 lg:px-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        
        {/* Festive Collection Offer Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-[#FBE3D5] p-8 lg:p-10 flex flex-col justify-between min-h-[260px] border border-[#E8D4C8] shadow-xs group">
          <div className="space-y-3 max-w-md z-10">
            <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#5A1827] text-white text-[11px] font-bold uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" /> Special Offer
            </span>
            <h3 className="font-serif text-3xl lg:text-4xl font-bold text-[#5A1827]">
              Festive Collection
            </h3>
            <p className="text-sm text-[#66463F] font-semibold">
              Get up to <span className="font-extrabold text-[#5A1827]">30% OFF</span> on selected party suits & sarees.
            </p>
          </div>

          <div className="pt-6 z-10">
            <Link
              href="/offers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5A1827] text-white text-xs font-bold hover:bg-[#42101B] transition-colors shadow-sm"
            >
              <span>Shop Offers Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Decorative Background Image */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden opacity-90 group-hover:scale-105 transition-transform duration-500">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1610030469668-98e550d6193c?w=800&auto=format&fit=crop&q=80"
              alt="Festive Offer"
              fallbackText="Festive Offer"
              className="w-full h-full object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBE3D5] via-[#FBE3D5]/40 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* New Arrivals Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-[#F7D6D0] p-8 lg:p-10 flex flex-col justify-between min-h-[260px] border border-[#E9C3BC] shadow-xs group">
          <div className="space-y-3 max-w-md z-10">
            <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#5A1827] text-white text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F7D6D0]" /> Fresh Stock
            </span>
            <h3 className="font-serif text-3xl lg:text-4xl font-bold text-[#5A1827]">
              New Arrivals
            </h3>
            <p className="text-sm text-[#66463F] font-semibold">
              Fresh styles & modern boutique vibes arriving weekly in Chaubepur!
            </p>
          </div>

          <div className="pt-6 z-10">
            <Link
              href="/products?filter=new"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5A1827] text-white text-xs font-bold hover:bg-[#42101B] transition-colors shadow-sm"
            >
              <span>Explore New Stock</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Decorative Background Image */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden opacity-90 group-hover:scale-105 transition-transform duration-500">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80"
              alt="New Arrivals"
              fallbackText="New Arrivals"
              className="w-full h-full object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7D6D0] via-[#F7D6D0]/40 to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};
