import React from 'react';
import { Search, User, ShoppingBag, Phone, MapPin, Sparkles, MessageCircle, Truck } from 'lucide-react';

export default function Header({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  cartCount, 
  onOpenCart,
  onOpenWhatsAppModal,
  onOpenTrackOrder,
  isOwnerMode,
  setIsOwnerMode
}) {
  const categoriesList = [
    { value: 'All', label: 'All Categories' },
    { value: 'Home Wear', label: '🏠 Home Wear' },
    { value: 'Party Wear', label: '🎉 Party Wear' },
    { value: 'Western Dresses', label: '👚 Western Dresses' },
    { value: 'Formal Wear', label: '👔 Formal Wear' },
    { value: 'School Dresses', label: '🏫 School Uniforms' },
    { value: 'Sarees & Traditional Wear', label: '👘 Sarees' },
    { value: "Men's Clothing", label: "👕 Men's Wear" },
    { value: "Women's Clothing", label: "👗 Women's Wear" },
    { value: "Kids Clothing", label: "👶 Kids' Wear" },
    { value: 'Tourist Wear', label: '🧳 Tourist/Travel' },
    { value: 'Trending Clothing', label: '🔥 Trending' }
  ];

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Collections', href: '#' },
    { name: 'New Arrivals', href: '#' },
    { name: 'Offers', href: '#' },
    { name: 'Festival Collection', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-gray-100">
      
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#70142C] text-white text-[11px] px-4 py-1.5 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-2 font-medium truncate">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0 animate-pulse" />
            <span>
              <strong className="text-amber-200 font-bold">Chaubepur's Family Fashion Store</strong> — Direct Wholesale Prices for Men, Women & Kids!
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] shrink-0 font-medium text-amber-100">
            <button
              onClick={onOpenTrackOrder}
              className="flex items-center gap-1 hover:text-white transition cursor-pointer"
            >
              <Truck className="w-3.5 h-3.5 text-amber-300" />
              <span>Track Order</span>
            </button>
            <span>|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-300" />
              Main Market Road, Chaubepur
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-300" />
              +91 98765 43210
            </span>
            <button
              onClick={onOpenWhatsAppModal}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 transition shadow-2xs cursor-pointer"
            >
              <MessageCircle className="w-3 h-3 fill-current" />
              WhatsApp Lead
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        
        {/* Left Logo Area */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-2.5 group">
            {/* SVG Logo Icon: Hanger with heart in maroon */}
            <div className="w-10 h-10 flex items-center justify-center text-[#70142C]">
              <svg className="w-9 h-9 transform group-hover:scale-105 transition" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 10C35.3137 10 38 12.6863 38 16C38 18.5 36.5 20.6 34.3 21.5C38.2 23.5 48 28.5 56 32.5C57.5 33.2 58 34.8 57.2 36.2C56.5 37.5 55 38 53.5 37.5L32 27.5L10.5 37.5C9 38 7.5 37.5 6.8 36.2C6 34.8 6.5 33.2 8 32.5C16 28.5 25.8 23.5 29.7 21.5C27.5 20.6 26 18.5 26 16C26 12.6863 28.6863 10 32 10Z" stroke="#70142C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M32 13.5C30.6193 13.5 29.5 14.6193 29.5 16C29.5 17.3807 30.6193 18.5 32 18.5C33.3807 18.5 34.5 17.3807 34.5 16C34.5 14.6193 33.3807 13.5 32 13.5Z" stroke="#70142C" strokeWidth="2.5"/>
                <path d="M32 30V48M25 40C25 40 28 44 32 44C36 44 39 40 39 40" stroke="#70142C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M32 22C32 22 30 20 28.5 20.5C27 21 27 23 28.5 24.5L32 28L35.5 24.5C37 23 37 21 35.5 20.5C34 20 32 22 32 22Z" fill="#70142C"/>
              </svg>
            </div>
            
            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="text-[#70142C] font-black text-2xl tracking-tight leading-none font-serif">
                Pranjul
              </span>
              <span className="text-[#70142C] text-[9px] font-extrabold tracking-[0.2em] leading-tight uppercase">
                FASHION HOUSE
              </span>
            </div>
          </a>

          {/* Divider & Cursive Tagline */}
          <div className="hidden lg:flex items-center gap-3 border-l border-gray-200 pl-3.5 h-8">
            <span className="text-[#70142C] font-script text-xl leading-none font-medium">
              Style for Every Generation
            </span>
          </div>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-gray-700">
          {navItems.map((item) => {
            const isActive = item.name === 'Home';
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative py-1 transition-colors hover:text-[#70142C] ${
                  isActive ? 'text-[#70142C] font-bold' : ''
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#70142C] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Search & Utilities Bar */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Enhanced Search Box with Dropdown */}
          <div className="relative hidden sm:flex items-center bg-[#f4f4f4] rounded-full overflow-hidden border border-gray-200 focus-within:ring-1 focus-within:ring-[#70142C]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-200 text-gray-900 text-[11px] font-bold px-3 py-1.5 border-r border-gray-300 focus:outline-none cursor-pointer max-w-[130px]"
            >
              {categoriesList.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Search Sarees, Western, Formal, Kids..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-40 md:w-48 text-xs text-gray-800 placeholder-gray-400 pl-3 pr-8 py-1.5 focus:outline-none bg-transparent"
            />

            <button className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#70142C]">
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* User Account / Track Order Shortcut */}
          <button 
            onClick={onOpenTrackOrder}
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#70142C] hover:border-[#70142C] transition cursor-pointer"
            title="Track Order"
          >
            <Truck className="w-4 h-4" />
          </button>

          {/* Cart Counter */}
          <button
            onClick={onOpenCart}
            className="relative w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:text-[#70142C] transition cursor-pointer"
            title="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#70142C] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Owner Login Switcher */}
          <button
            onClick={() => setIsOwnerMode(!isOwnerMode)}
            className="bg-[#70142C] hover:bg-[#580E21] text-white text-xs font-bold px-3.5 py-1.5 rounded-full transition shadow-xs cursor-pointer whitespace-nowrap"
          >
            {isOwnerMode ? 'Store View' : 'Owner Login'}
          </button>

        </div>
      </div>
    </header>
  );
}
