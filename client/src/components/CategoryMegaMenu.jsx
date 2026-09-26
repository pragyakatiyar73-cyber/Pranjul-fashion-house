import React, { useState } from 'react';
import { X, Sparkles, User, Heart, Smile, Calendar, Sun, Flame, ArrowRight, ChevronRight, Check } from 'lucide-react';

const CategoryMegaMenu = ({
  isOpen,
  onClose,
  categoriesTree,
  onSelectCategory,
  onSelectSubcategory,
  language = 'en'
}) => {
  if (!isOpen) return null;

  const isHi = language === 'hi';
  const [activeGenderTab, setActiveGenderTab] = useState('WOMEN');

  const mainTabs = [
    { id: 'WOMEN', label: isHi ? 'महिलाएं (WOMEN)' : 'WOMEN', icon: '💃', color: 'from-rose-700 to-pink-800' },
    { id: 'MEN', label: isHi ? 'पुरुष (MEN)' : 'MEN', icon: '🕺', color: 'from-blue-700 to-indigo-800' },
    { id: 'KIDS', label: isHi ? 'बच्चे (KIDS)' : 'KIDS', icon: '🧒', color: 'from-amber-600 to-orange-700' },
    { id: 'BABY', label: isHi ? 'छोटे बच्चे (BABY)' : 'BABY (0-2Y)', icon: '👶', color: 'from-emerald-600 to-teal-700' },
    { id: 'OCCASIONS', label: isHi ? 'अवसर (OCCASIONS)' : 'OCCASIONS', icon: '🎈', color: 'from-purple-700 to-fuchsia-800' },
    { id: 'SEASONAL', label: isHi ? 'मौसम (SEASONAL)' : 'SEASONAL', icon: '🍂', color: 'from-amber-700 to-yellow-800' },
    { id: 'TRENDING NOW', label: isHi ? 'ट्रेंडिंग (TRENDING)' : 'TRENDING NOW', icon: '🔥', color: 'from-red-600 to-rose-700' },
  ];

  const subcategoryMap = {
    WOMEN: [
      { title: 'Daily / Home Wear', desc: 'Comfortable cotton kurtis & lounge sets' },
      { title: 'Western Wear', desc: 'Dresses, tops, jeans & trousers' },
      { title: 'Ethnic Wear', desc: 'Banarsi sarees, suit sets & lehengas' },
      { title: 'Office / Formal Wear', desc: 'Formal shirts, trousers & kurti sets' },
      { title: 'Party Wear', desc: 'Designer suits, fusion wear & silk sarees' },
      { title: 'Wedding Wear', desc: 'Heavy bridal lehengas & festive sarees' },
      { title: 'Travel Wear', desc: 'Stretch jeans, breathable cotton tops' },
      { title: 'Sports / Athleisure', desc: 'Gym leggings, stretch t-shirts' },
      { title: 'Night Wear', desc: 'Soft hosiery cotton pajama sets' },
    ],
    MEN: [
      { title: 'Daily / Home Wear', desc: 'Cotton shorts, t-shirts & lounge pants' },
      { title: 'Casual Wear', desc: 'Printed shirts, casual denim & polo tees' },
      { title: 'Formal / Office Wear', desc: 'Crisp cotton shirts & formal trousers' },
      { title: 'Party Wear', desc: 'Overshirts, blazers & trendy denim' },
      { title: 'Ethnic Wear', desc: 'Kurta pajama & Nehru jackets' },
      { title: 'Wedding Wear', desc: 'Royal sherwani & embroidered kurta sets' },
      { title: 'Travel Wear', desc: 'Cargo trousers & comfortable linen shirts' },
      { title: 'Sports / Athleisure', desc: 'Tracksuits & dry-fit activewear' },
      { title: 'Night Wear', desc: 'Comfortable cotton nightwear shorts' },
    ],
    KIDS: [
      { title: 'Baby Wear', desc: 'Cute soft clothes for infants (0-2Y)' },
      { title: 'Girls Wear', desc: 'Party frocks, tops, jeans & skirts' },
      { title: 'Boys Wear', desc: 'Shirts, denim jeans & t-shirts' },
      { title: 'School Wear', desc: 'Durable school uniform shirts & trousers' },
      { title: 'Casual Wear', desc: 'Comfortable everyday cotton sets' },
      { title: 'Party Wear', desc: 'Designer dresses & party suits' },
      { title: 'Wedding Wear', desc: 'Mini sherwanis & silk lehengas' },
      { title: 'Ethnic Wear', desc: 'Boys kurta sets & girls ghagra choli' },
      { title: 'Sports Wear', desc: 'Activewear shorts & cotton t-shirts' },
      { title: 'Winter Wear', desc: 'Fleece jackets, hoodies & sweaters' },
    ],
    BABY: [
      { title: 'Onesies & Rompers', desc: '100% pure cotton baby suits' },
      { title: 'Soft Cotton Sets', desc: 'Breathable daily wear sets' },
      { title: 'Baby Frocks', desc: 'Cute party frocks for baby girls' },
      { title: 'Baby Ethnic Wear', desc: 'Soft infant kurta pajama sets' },
      { title: 'Baby Winter Wear', desc: 'Warm thermal fleece baby suits' },
    ],
    OCCASIONS: [
      { title: 'Home & Daily Wear', desc: 'Everyday comfortable outfits' },
      { title: 'Party Wear', desc: 'Festive & evening party wear' },
      { title: 'Wedding Wear', desc: 'Wedding trousseau & grand attire' },
      { title: 'Festival Wear', desc: 'Diwali & Navratri traditional specials' },
      { title: 'School Wear', desc: 'School uniform essentials' },
      { title: 'Office Wear', desc: 'Professional office attire' },
      { title: 'Travel Wear', desc: 'Wrinkle-free travel clothing' },
      { title: 'Sports & Active Wear', desc: 'Fitness & outdoor activewear' },
    ],
    SEASONAL: [
      { title: 'Summer Collection', desc: 'Lightweight breathable cottons' },
      { title: 'Winter Collection', desc: 'Warm fleece, shawls & jackets' },
      { title: 'Monsoon Collection', desc: 'Quick-dry casual fabrics' },
      { title: 'Wedding Season', desc: 'Grand wedding wear collection' },
      { title: 'Festival Collection', desc: 'Traditional festival wear' },
    ],
    'TRENDING NOW': [
      { title: 'Co-ord Sets', desc: 'Matching top & trousers sets' },
      { title: 'Relaxed Fit Jeans', desc: 'Comfortable baggy & wide fit' },
      { title: 'Wide-Leg Trousers', desc: 'Modern high-waist trousers' },
      { title: 'Overshirts', desc: 'Trendy layered casual shirts' },
      { title: 'Fusion Wear', desc: 'Indo-western fusion outfits' },
      { title: 'Indo-Western', desc: 'Modernized traditional dresses' },
      { title: 'Athleisure', desc: 'Sporty everyday streetwear' },
      { title: 'Embroidered Denim', desc: 'Decorated denim jackets & jeans' },
      { title: 'Modern Ethnic Wear', desc: 'Contemporary traditional suits' },
    ]
  };

  const currentSubcategories = subcategoryMap[activeGenderTab] || [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden border border-rose-100 flex flex-col my-auto max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#6b1426] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-rose-950/80 flex items-center justify-center border border-rose-800 text-amber-300 font-bold">
              ✨
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl leading-tight">
                {isHi ? 'संपूर्ण फैमिली कलेक्शन कैटलॉग (Collections)' : 'Complete Family Clothing Collections'}
              </h3>
              <p className="text-xs text-rose-200 font-medium">
                {isHi
                  ? 'हर उम्र, हर अवसर और हर मौसम के लिए कपड़े - मात्र 2 क्लिक में खोजें'
                  : 'Find outfits by Gender, Age, Occasion, Season or Trend in 2 clicks'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-rose-200 hover:text-white p-1.5 rounded-full hover:bg-rose-900/60 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px] flex-1 overflow-hidden">
          
          {/* Left Column: Primary Category Navigation Tabs */}
          <div className="md:col-span-4 bg-stone-100 border-r border-stone-200 p-3 space-y-1.5 overflow-y-auto">
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest px-3 py-1 block">
              {isHi ? 'मुख्य श्रेणियां (Main Categories)' : 'Select Category'}
            </span>

            {mainTabs.map((tab) => {
              const isActive = activeGenderTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveGenderTab(tab.id)}
                  className={`w-full text-left px-3.5 py-3 rounded-2xl transition flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#6b1426] text-white font-bold shadow-md'
                      : 'bg-white hover:bg-rose-50 text-stone-800 font-semibold border border-stone-200/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{tab.icon}</span>
                    <span className="text-xs sm:text-sm tracking-tight">{tab.label}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-stone-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Subcategories & Direct Catalog Filter Links */}
          <div className="md:col-span-8 p-6 overflow-y-auto bg-stone-50/50 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div>
                <h4 className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
                  <span>{activeGenderTab}</span>
                  <span className="text-xs font-normal text-stone-500">
                    ({currentSubcategories.length} subcategories available)
                  </span>
                </h4>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onSelectCategory(activeGenderTab);
                }}
                className="bg-[#6b1426] hover:bg-[#520f1d] text-white font-bold text-xs px-4 py-2 rounded-xl transition flex items-center gap-1 cursor-pointer shadow-2xs"
              >
                <span>View All {activeGenderTab} Items</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Subcategory Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentSubcategories.map((sub, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onClose();
                    onSelectSubcategory(activeGenderTab, sub.title);
                  }}
                  className="bg-white p-3.5 rounded-2xl border border-stone-200/90 hover:border-rose-400 hover:shadow-md transition duration-200 cursor-pointer group flex items-start justify-between"
                >
                  <div className="space-y-0.5">
                    <h5 className="font-bold text-stone-900 text-xs sm:text-sm group-hover:text-[#6b1426] transition flex items-center gap-1.5">
                      <span>{sub.title}</span>
                    </h5>
                    <p className="text-[11px] text-stone-500 leading-tight">
                      {sub.desc}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-rose-50 text-[#6b1426] flex items-center justify-center shrink-0 group-hover:bg-[#6b1426] group-hover:text-white transition">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Footer Shortcut Bar */}
        <div className="bg-stone-100 px-6 py-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
          <span className="font-serif italic text-stone-700">
            {isHi ? 'चौबेपुर, कानपुर नगर में परिवार के हर सदस्य के लिए उपलब्ध' : 'Available at Chaubepur, Kanpur Nagar Store'}
          </span>
          <button
            onClick={() => {
              onClose();
              onSelectCategory('All');
            }}
            className="font-bold text-[#6b1426] hover:underline"
          >
            {isHi ? 'पूरा कैटलॉग देखें (Browse All 100+ Products)' : 'Browse Full Catalog →'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default CategoryMegaMenu;
