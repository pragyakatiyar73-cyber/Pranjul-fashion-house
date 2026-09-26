import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PromoBanners({ onFilterFestival, onFilterNew }) {
  const fallbackImg = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80";

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Banner 1: New Collection (Sage Green) */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#DCECD6] via-[#E6F3E1] to-[#CBE4C2] border border-[#C2DCB7] p-5 flex items-center justify-between min-h-[170px] shadow-xs hover:shadow-md transition">
          <div className="relative z-10 flex flex-col items-start max-w-[58%]">
            <h3 className="font-serif font-black text-2xl text-[#1E3F1A] tracking-tight leading-tight">
              New Collection
            </h3>
            <p className="text-xs text-[#2D5A27] font-medium mt-1">
              Fresh Styles for a New You
            </p>
            <button
              onClick={onFilterNew}
              className="mt-4 bg-[#70142C] hover:bg-[#580E21] text-white text-[11px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 transition cursor-pointer shadow-xs"
            >
              View Collection <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="relative z-10 w-28 h-36 rounded-xl overflow-hidden shrink-0 shadow-sm border border-white/60 bg-white">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80"
              alt="New Collection Saree"
              className="w-full h-full object-cover object-top"
              onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg; }}
            />
          </div>
        </div>

        {/* Banner 2: Today's Offers (Warm Gold / Orange) */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFE3A3] via-[#FFF0C7] to-[#FDD475] border border-[#F5C75A] p-5 flex items-center justify-between min-h-[170px] shadow-xs hover:shadow-md transition">
          <div className="absolute top-3 right-4 bg-[#70142C] text-white rounded-full w-14 h-14 flex flex-col items-center justify-center text-center shadow-md p-1 border-2 border-amber-300 z-20">
            <span className="text-[8px] font-bold uppercase leading-tight">UP TO</span>
            <span className="text-xs font-black text-amber-300 leading-none">20%</span>
            <span className="text-[8px] font-bold uppercase leading-tight">OFF</span>
          </div>

          <div className="relative z-10 flex flex-col items-start max-w-[65%]">
            <h3 className="font-serif font-black text-2xl text-[#5C2B04] tracking-tight leading-tight">
              Today's Offers
            </h3>
            <p className="text-xs text-[#6E3506] font-medium mt-1">
              Best Deals on Your Favourite Styles
            </p>
            <button
              onClick={onFilterFestival}
              className="mt-4 bg-[#70142C] hover:bg-[#580E21] text-white text-[11px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 transition cursor-pointer shadow-xs"
            >
              View Offers <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Banner 3: Festival Collection (Deep Magenta / Purple) */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#681039] via-[#7B1745] to-[#4F0B2A] border border-[#560C2E] p-5 flex items-center justify-between min-h-[170px] text-white shadow-xs hover:shadow-md transition">
          <div className="relative z-10 flex flex-col items-start max-w-[58%]">
            <h3 className="font-serif font-black text-2xl text-white tracking-tight leading-tight">
              Festival Collection
            </h3>
            <p className="text-xs text-amber-200 font-medium mt-1">
              Celebrate in Style
            </p>
            <button
              onClick={onFilterFestival}
              className="mt-4 bg-[#70142C] hover:bg-[#580E21] text-amber-200 border border-amber-300/40 text-[11px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 transition cursor-pointer shadow-xs"
            >
              Explore Now <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="relative z-10 w-28 h-36 rounded-xl overflow-hidden shrink-0 shadow-md border border-amber-300/30 bg-white">
            <img
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&auto=format&fit=crop&q=80"
              alt="Festival Saree Collection"
              className="w-full h-full object-cover object-top"
              onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg; }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
