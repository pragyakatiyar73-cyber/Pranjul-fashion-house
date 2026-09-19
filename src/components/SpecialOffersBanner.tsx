'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Tag, Sparkles } from 'lucide-react';

export const SpecialOffersBanner: React.FC = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Festive Collection Offer Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-[#FBE3D5] p-6 lg:p-8 flex flex-col justify-between min-h-[220px] border border-[#E8D4C8] shadow-xs group">
          <div className="space-y-2 max-w-xs z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#5A1827] text-white text-[10px] font-bold uppercase tracking-wider">
              <Tag className="w-3 h-3" /> Special Offer
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#5A1827]">
              Festive Collection
            </h3>
            <p className="text-xs sm:text-sm text-[#66463F] font-medium">
              Get up to <span className="font-bold text-[#5A1827]">30% OFF</span> on selected party suits & sarees.
            </p>
          </div>

          <div className="pt-4 z-10">
            <Link
              href="/offers"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5A1827] text-white text-xs font-semibold hover:bg-[#42101B] transition-colors shadow-xs"
            >
              <span>Shop Offers Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Decorative Background Image */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden opacity-90 group-hover:scale-105 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1610030469668-98e550d6193c?auto=format&fit=crop&q=80&w=600"
              alt="Festive Offer"
              className="w-full h-full object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBE3D5] via-[#FBE3D5]/40 to-transparent" />
          </div>
        </div>

        {/* New Arrivals Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-[#F7D6D0] p-6 lg:p-8 flex flex-col justify-between min-h-[220px] border border-[#E9C3BC] shadow-xs group">
          <div className="space-y-2 max-w-xs z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#5A1827] text-white text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#F7D6D0]" /> Fresh Stock
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#5A1827]">
              New Arrivals
            </h3>
            <p className="text-xs sm:text-sm text-[#66463F] font-medium">
              Fresh styles & modern boutique vibes arriving weekly in Chaubepur!
            </p>
          </div>

          <div className="pt-4 z-10">
            <Link
              href="/products?filter=new"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5A1827] text-white text-xs font-semibold hover:bg-[#42101B] transition-colors shadow-xs"
            >
              <span>Explore New Stock</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Decorative Background Image */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden opacity-90 group-hover:scale-105 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600"
              alt="New Arrivals"
              className="w-full h-full object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7D6D0] via-[#F7D6D0]/40 to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
};
