import React, { useState } from 'react';
import { Tag, Sparkles, Copy, Check, Gift, Flame } from 'lucide-react';
import { initialFestivalOffers } from '../data/mockData';

export default function FestivalBar({ onApplyCoupon }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (code) => {
    setCopiedCode(code);
    if (onApplyCoupon) onApplyCoupon(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2">
      <div className="bg-gradient-to-r from-red-950 via-purple-950 to-amber-950 text-white rounded-2xl p-4 sm:p-5 shadow-lg border border-red-500/30">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3 pb-2.5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="bg-amber-400 p-2 rounded-xl text-black shadow-md shrink-0">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-amber-200 flex items-center gap-2 font-serif">
                🎉 FESTIVAL SPECIAL DISCOUNTS & OFFERS
              </h3>
              <p className="text-xs text-gray-200">
                Exclusive Deals at Chaubepur Pranjul Fashion House — Click any coupon to apply to your order!
              </p>
            </div>
          </div>
          
          <span className="text-xs bg-red-600 px-3 py-1 rounded-full text-white font-extrabold self-start md:self-auto flex items-center gap-1 shrink-0 shadow-sm">
            <Flame className="w-3.5 h-3.5 text-yellow-300 animate-pulse" /> Valid for Festival Shopping
          </span>
        </div>

        {/* Offers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {initialFestivalOffers.map((offer) => (
            <div 
              key={offer.id} 
              className="bg-black/40 backdrop-blur-xs rounded-xl p-3.5 border border-amber-400/20 flex items-center justify-between hover:border-amber-400/60 transition group"
            >
              <div className="flex-1 pr-2">
                <div className="text-[11px] font-extrabold text-amber-300 uppercase tracking-wide flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-yellow-400" /> {offer.title}
                </div>
                <div className="text-xs sm:text-sm font-black text-white mt-0.5 leading-snug">
                  {offer.discount_text}
                </div>
                <div className="text-[10px] text-gray-300 mt-1">
                  {offer.banner_subtitle}
                </div>
              </div>

              <button
                onClick={() => handleCopyCode(offer.code)}
                className={`px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-1 transition shrink-0 cursor-pointer ${
                  copiedCode === offer.code 
                    ? 'bg-green-500 text-white shadow' 
                    : 'bg-amber-400 hover:bg-amber-500 text-black shadow'
                }`}
              >
                {copiedCode === offer.code ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Applied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> {offer.code}
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
