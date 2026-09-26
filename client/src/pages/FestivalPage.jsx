import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Sparkles, Crown, Flame, Heart, ArrowRight, ShieldCheck } from 'lucide-react';

const FestivalPage = ({
  festivals = [],
  products = [],
  onViewProduct,
  storeSettings,
  wishlistIds = [],
  onToggleWishlist,
  language = 'en'
}) => {
  const isHi = language === 'hi';

  const festivalList = [
    { id: 'Diwali', label: isHi ? 'दिवाली (Diwali)' : 'Diwali Special', icon: '🪔', color: 'from-[#4a0b18] via-[#6b1426] to-[#8c1c34]', tagline: 'Royal Banarsi Silk Sarees, Zari Suits & Family Festive Outfits' },
    { id: 'Navratri', label: isHi ? 'नवरात्रि (Navratri)' : 'Navratri & Garba', icon: '💃', color: 'from-[#800f2f] via-[#a4133c] to-[#c9184a]', tagline: 'Vibrant Chaniya Cholis, Mirror Work Suits & Garba Sets' },
    { id: 'Karwa Chauth', label: isHi ? 'करवा चौथ (Karwa Chauth)' : 'Karwa Chauth Edit', icon: '🌹', color: 'from-[#590d22] via-[#800f2f] to-[#a4133c]', tagline: 'Deep Red & Maroon Silk Sarees, Anarkalis & Heavy Dupattas' },
    { id: 'Eid', label: isHi ? 'ईद स्पेशल (Eid Special)' : 'Eid Festive Edit', icon: '🌙', color: 'from-[#064e3b] via-[#047857] to-[#059669]', tagline: 'Pathani Kurta Sets, Embroidered Anarkalis & Festive Shararas' },
    { id: 'Wedding Season', label: isHi ? 'शादी-ब्याह (Wedding Season)' : 'Wedding Season', icon: '💍', color: 'from-[#4c0519] via-[#881337] to-[#be123c]', tagline: 'Bridal Lehengas, Designer Sherwanis & Heavy Festive Silk' },
    { id: 'Raksha Bandhan', label: isHi ? 'रक्षाबंधन (Rakhi Edit)' : 'Raksha Bandhan', icon: '🎁', color: 'from-[#7c2d12] via-[#9a3412] to-[#c2410c]', tagline: 'Festive Printed Kurtis, Boys Kurta Sets & Ethnic Gifting' },
    { id: 'Holi', label: isHi ? 'होली कलेक्शन (Holi Special)' : 'Holi Special', icon: '🌸', color: 'from-[#701a75] via-[#86198f] to-[#a21caf]', tagline: 'Pure Cotton White Kurtas & Pastel Chikankari Ethnic Wear' },
  ];

  const [selectedFestival, setSelectedFestival] = useState('Diwali');
  const [selectedGender, setSelectedGender] = useState('All');

  const currentFestInfo = festivalList.find((f) => f.id === selectedFestival) || festivalList[0];

  // Filter products matching selected festival or general ethnic festival wear
  const festProducts = products.filter((p) => {
    // Match festival field or category/subcategory matching festival theme
    const matchesFestName =
      p.festival?.toLowerCase().includes(selectedFestival.toLowerCase()) ||
      p.season?.toLowerCase().includes(selectedFestival.toLowerCase()) ||
      p.occasion?.toLowerCase().includes('festival') ||
      p.occasion?.toLowerCase().includes('wedding') ||
      p.subcategory === 'Ethnic Wear' ||
      p.subcategory === 'Sarees' ||
      p.subcategory === 'Suits';

    // Gender filter
    if (selectedGender !== 'All') {
      const gLower = selectedGender.toLowerCase();
      if (p.category?.toLowerCase() !== gLower && p.gender?.toLowerCase() !== gLower) {
        return false;
      }
    }

    return matchesFestName;
  });

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* 1. FESTIVAL SELECTION TABS */}
      <div className="bg-stone-100 p-3 rounded-2xl border border-stone-200 space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            {isHi ? 'त्यौहार के अनुसार कलेक्शन चुनें (Choose Festival)' : 'Select Festival Collection:'}
          </span>
          <span className="text-[11px] text-[#6b1426] font-semibold hidden sm:block">
            Chaubepur Showroom Special Collection
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {festivalList.map((fest) => {
            const isSelected = selectedFestival === fest.id;
            return (
              <button
                key={fest.id}
                onClick={() => setSelectedFestival(fest.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#6b1426] text-white shadow-md border border-amber-300/40'
                    : 'bg-white text-stone-700 hover:bg-rose-50 border border-stone-200'
                }`}
              >
                <span>{fest.icon}</span>
                <span>{fest.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. DYNAMIC FESTIVAL BANNER */}
      <div className={`relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r ${currentFestInfo.color} text-white p-6 sm:p-10 border border-amber-300/30`}>
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
            <Crown className="w-3.5 h-3.5" />
            <span>{selectedFestival} SPECIAL EDIT</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-amber-100 leading-tight">
            {selectedFestival} Collection
          </h1>

          <p className="text-rose-100 text-xs sm:text-sm leading-relaxed font-normal">
            {currentFestInfo.tagline}. Festive styles for your brightest celebrations available exclusively at Pranjul Fashion House.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-amber-200">
            <span className="flex items-center gap-1 bg-black/20 px-3 py-1 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Quality Fabric Guarantee
            </span>
            <span>Reserve or Inquire on WhatsApp for Chaubepur Store Visit</span>
          </div>
        </div>

        {/* Right Decorative Sparkle */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block text-8xl">
          {currentFestInfo.icon}
        </div>
      </div>

      {/* 3. GENDER / CATEGORY SUB-FILTER & PRODUCTS HEADER */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-3">
          <div>
            <h2 className="font-serif font-extrabold text-2xl text-stone-900 tracking-tight">
              {selectedFestival} Festive Outfits
            </h2>
            <p className="text-xs text-stone-500 font-medium">
              Showing {festProducts.length} festive clothes for {selectedFestival}
            </p>
          </div>

          {/* Gender Selector Pills */}
          <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl border border-stone-200 self-start sm:self-auto">
            {['All', 'Women', 'Men', 'Kids'].map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGender(g)}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition cursor-pointer ${
                  selectedGender === g
                    ? 'bg-[#6b1426] text-white shadow-2xs'
                    : 'text-stone-700 hover:text-[#6b1426]'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* 4. FESTIVE PRODUCTS GRID */}
        {festProducts.length === 0 ? (
          <div className="py-12 bg-white rounded-3xl border border-rose-100 text-center space-y-2">
            <Sparkles className="w-10 h-10 text-amber-500 mx-auto opacity-50" />
            <h3 className="font-serif font-bold text-stone-800 text-lg">
              No products found for {selectedFestival} in {selectedGender} category
            </h3>
            <p className="text-xs text-stone-500">
              Try switching gender filter or choose another festival collection above.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {festProducts.map((product) => {
              const pId = product._id || product.productId;
              return (
                <ProductCard
                  key={pId}
                  product={product}
                  onViewDetails={onViewProduct}
                  storeSettings={storeSettings}
                  isWishlisted={wishlistIds.includes(pId)}
                  onToggleWishlist={onToggleWishlist}
                />
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};

export default FestivalPage;
