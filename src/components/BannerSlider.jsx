import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Tag } from 'lucide-react';

export default function BannerSlider({ onOpenWhatsAppModal, onFilterFestival }) {
  const familyImgFallback = "https://images.unsplash.com/photo-1627886470008-8ac74744f69c?w=800&auto=format&fit=crop&q=80";
  const sareeStackFallback = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80";

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-4 pb-2">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FDF0E6] via-[#FFF8F2] to-[#FDF4EB] border border-[#F5E6D8] shadow-xs">
        
        {/* Decorative Gold Leaf Outline */}
        <div className="absolute left-0 bottom-0 opacity-15 pointer-events-none">
          <svg width="220" height="220" viewBox="0 0 200 200" fill="none">
            <path d="M10 190C40 160 60 120 70 80C80 40 100 10 140 10" stroke="#70142C" strokeWidth="2" strokeDasharray="4 4"/>
            <path d="M40 160C20 140 10 120 20 100C40 110 50 130 40 160Z" fill="#70142C"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[340px] sm:min-h-[380px]">
          
          {/* 1. Left Text Block (Cols 5) */}
          <div className="lg:col-span-5 p-6 sm:p-10 z-10 flex flex-col items-start justify-center">
            
            <span className="text-[#70142C] font-script text-4xl sm:text-5xl font-medium leading-none tracking-wide">
              Har Style
            </span>

            <h1 className="text-[#70142C] font-serif font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mt-1">
              Har Family Ke Liye
            </h1>

            <p className="text-gray-700 text-xs sm:text-sm font-medium mt-3 max-w-md leading-relaxed">
              Trendy, Traditional & Comfortable Clothing for Women, Men and Kids.
            </p>

            <button
              onClick={onFilterFestival}
              className="mt-6 bg-[#70142C] hover:bg-[#580E21] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full flex items-center gap-2 transition shadow-md hover:shadow-lg cursor-pointer group"
            >
              Explore Collection 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-[#F3DBE0] text-[11px] font-bold text-[#70142C]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                100% Quality Checked
              </span>
              <span className="flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                Direct Wholesale Rates
              </span>
            </div>

          </div>

          {/* 2. Center Family Hero Image (Cols 4) */}
          <div className="lg:col-span-4 relative flex items-end justify-center h-full min-h-[260px] sm:min-h-[340px]">
            <img
              src={familyImgFallback}
              alt="Happy Indian Family in Festive Clothing"
              className="w-full h-full max-h-[360px] object-cover object-top drop-shadow-md rounded-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&auto=format&fit=crop&q=80";
              }}
            />
          </div>

          {/* 3. Right Special Offers Scalloped Ribbon Badge (Cols 3) */}
          <div className="lg:col-span-3 relative h-full min-h-[240px] sm:min-h-[380px] flex items-center justify-center p-4">
            
            {/* Background Saree Stack preview */}
            <div className="absolute inset-0 overflow-hidden rounded-r-2xl opacity-90 bg-gray-200">
              <img
                src={sareeStackFallback}
                alt="Colorful Stacked Sarees"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = familyImgFallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/40" />
            </div>

            {/* Maroon Ribbon Badge */}
            <div className="relative z-10 bg-[#70142C] text-white text-center p-6 rounded-2xl shadow-2xl max-w-[220px] w-full border border-amber-300/30 transform hover:scale-105 transition duration-300">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="font-script text-3xl text-amber-200 block leading-tight">
                  Special
                </span>
              </div>
              <h3 className="font-black text-2xl uppercase tracking-wider leading-none text-white">
                Offers
              </h3>
              <p className="text-[11px] text-amber-100 font-medium mt-1 tracking-wide">
                On Selected Collections
              </p>

              <button
                onClick={onOpenWhatsAppModal}
                className="mt-4 bg-[#E5A93C] hover:bg-[#d49629] text-[#70142C] text-xs font-black px-5 py-2 rounded-full shadow-md transition cursor-pointer"
              >
                Shop Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
