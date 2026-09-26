import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const DualShopperStrip = ({ onSelectCategory, onSelectSubcategory, language = 'en' }) => {
  const isHi = language === 'hi';

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-4">
      <div className="bg-gradient-to-r from-[#faf4ec] via-[#fef8f2] to-[#faf4ec] rounded-3xl p-5 sm:p-7 border border-amber-200/80 shadow-xs space-y-4">
        
        {/* Header Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/60 pb-3">
          <div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#6b1426] bg-rose-100/80 px-2.5 py-0.5 rounded-md uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{isHi ? 'गाँव देहात एवं शहर दोनों के लिए खास संग्रह' : 'Curated for Village & City Shoppers'}</span>
            </div>
            <h3 className="font-serif font-extrabold text-xl sm:text-2xl text-stone-900 tracking-tight">
              {isHi
                ? 'अपनी पसंद के अनुसार कपड़े चुनें (Shop Your Favorite Style)'
                : 'Choose Shopping Collection by Style Preference'}
            </h3>
          </div>
          <span className="text-xs text-stone-500 font-semibold hidden sm:block">
            Chaubepur Store & Digital Catalog
          </span>
        </div>

        {/* 2 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* RURAL / DAILY WEAR CARD */}
          <div
            onClick={() => onSelectSubcategory('Daily / Home Wear')}
            className="bg-white rounded-2xl border border-rose-200 p-4 shadow-2xs hover:shadow-md transition duration-300 flex items-center gap-4 cursor-pointer group"
          >
            <div className="w-24 h-28 rounded-xl overflow-hidden bg-stone-100 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=400&q=80"
                alt="Rural and Daily Cotton Wear"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="flex-1 space-y-1.5 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-[#6b1426] bg-rose-50 px-2 py-0.5 rounded uppercase tracking-wider">
                  🌾 {isHi ? 'गाँव-देहात स्पेशल' : 'Rural & Budget'}
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                  Starting @ ₹299
                </span>
              </div>

              <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base group-hover:text-[#6b1426] transition">
                {isHi ? 'डेली वियर कॉटन कुर्ती, साड़ी & कुर्ता' : 'Daily Cotton Kurtis, Sarees & Kurta Sets'}
              </h4>

              <p className="text-xs text-stone-500 line-clamp-1 font-medium">
                {isHi ? 'टिकाऊ कपड़े, आरामदायक फिटिंग एवं मुफ़्त अल्टरेशन' : 'Durable cotton fabrics & comfortable daily wear'}
              </p>

              <div className="flex flex-wrap gap-1 pt-1">
                {['Sarees', 'Kurtis', 'Suits', 'Daily Wear'].map((tag) => (
                  <span
                    key={tag}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectSubcategory(tag);
                    }}
                    className="bg-stone-100 hover:bg-[#6b1426] hover:text-white text-stone-700 text-[10px] font-bold px-2 py-0.5 rounded border border-stone-200 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CITY FASHION & TRENDING CARD */}
          <div
            onClick={() => onSelectSubcategory('Western Wear')}
            className="bg-white rounded-2xl border border-blue-200 p-4 shadow-2xs hover:shadow-md transition duration-300 flex items-center gap-4 cursor-pointer group"
          >
            <div className="w-24 h-28 rounded-xl overflow-hidden bg-stone-100 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80"
                alt="City Fashion and Trending Outfits"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="flex-1 space-y-1.5 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-blue-900 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">
                  🏙️ {isHi ? 'कानपुर सिटी स्टाइल' : 'City Fashion'}
                </span>
                <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded">
                  Trending Now
                </span>
              </div>

              <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base group-hover:text-blue-900 transition">
                {isHi ? 'Co-ord Sets, जीन्स & वेस्टर्न ड्रेसेस' : 'Co-ord Sets, Jeans & Western Outfits'}
              </h4>

              <p className="text-xs text-stone-500 line-clamp-1 font-medium">
                {isHi ? 'लेटेस्ट फैशन ट्रेंड्स, कॉटन फॉर्मल शर्ट्स & पार्टी वियर' : 'Modern fashion trends, western dresses & partywear'}
              </p>

              <div className="flex flex-wrap gap-1 pt-1">
                {['Western Wear', 'Co-ord Sets', 'Wide-Leg Jeans', 'Party Wear'].map((tag) => (
                  <span
                    key={tag}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectSubcategory(tag);
                    }}
                    className="bg-stone-100 hover:bg-blue-900 hover:text-white text-stone-700 text-[10px] font-bold px-2 py-0.5 rounded border border-stone-200 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DualShopperStrip;
