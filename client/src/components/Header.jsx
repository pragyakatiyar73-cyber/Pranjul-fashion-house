import React, { useState } from 'react';
import { Search, User, Lock, MapPin, MessageCircle, Phone, Menu, X, Heart, Sparkles, ShoppingBag, Globe } from 'lucide-react';

const Header = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenOwnerLogin,
  storeSettings,
  language,
  setLanguage,
  wishlistCount,
  onOpenWishlist,
  onOpenMegaMenu
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);

  const isHi = language === 'hi';

  const navLinks = [
    { id: 'home', label: isHi ? 'होम' : 'Home' },
    { id: 'catalog', label: isHi ? 'कलेक्शंस' : 'Collections' },
    { id: 'new-arrivals', label: isHi ? 'नए कपड़े' : 'New Arrivals' },
    { id: 'offers', label: isHi ? 'ऑफर & छूट' : 'Offers' },
    { id: 'festivals', label: isHi ? 'फेस्टिवल' : 'Festival Collection' },
    { id: 'about', label: isHi ? 'दुकान की जानकारी' : 'About' },
    { id: 'contact', label: isHi ? 'संपर्क' : 'Contact' },
  ];

  const handleNavClick = (id) => {
    if (id === 'catalog' && onOpenMegaMenu) {
      onOpenMegaMenu();
    } else {
      setActiveTab(id);
    }
    setMobileMenuOpen(false);
    setUserModalOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNum = storeSettings?.whatsappNumber || '+91 98765 43210';
  const cleanWhatsapp = whatsappNum.replace(/[^0-9]/g, '');
  const generalWhatsappMsg = encodeURIComponent(
    isHi
      ? 'नमस्ते प्रांजुल फैशन हाउस, मुझे कपड़ों की उपलब्धता और ऑफर की जानकारी चाहिए।'
      : 'Hello Pranjul Fashion House, I have an enquiry regarding clothing availability and current offers.'
  );
  const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${generalWhatsappMsg}`;
  const phoneUrl = `tel:${storeSettings?.phoneNumber || '+919876543210'}`;

  return (
    <header className="w-full bg-white shadow-2xs sticky top-0 z-50">
      {/* 1. TOP INFORMATION BAR */}
      <div className="w-full bg-[#6b1426] text-white text-[11px] sm:text-xs py-1.5 px-4 sm:px-6 border-b border-[#590f1f]">
        <div className="w-full flex items-center justify-between gap-2">
          {/* Left Location */}
          <div className="flex items-center gap-1.5 shrink-0">
            <MapPin className="w-3.5 h-3.5 text-rose-300" />
            <span className="font-medium text-rose-100">
              {isHi ? 'चौबेपुर, कानपुर नगर, उत्तर प्रदेश' : 'Chaubepur, Kanpur Nagar, Uttar Pradesh'}
            </span>
          </div>

          {/* Center Tagline & Language Switcher */}
          <div className="flex items-center gap-3 font-medium">
            <div className="hidden md:flex items-center gap-2 text-rose-100/90 text-center">
              <span>{isHi ? 'हर जनरेशन के लिए स्टाइल' : 'Style for Every Generation'}</span>
              <span className="opacity-50">|</span>
              <span>{isHi ? 'नया कलेक्शन' : 'New Collection'}</span>
              <span className="opacity-60">•</span>
              <span>{isHi ? 'बेहतरीन दाम' : 'Great Prices'}</span>
            </div>

            {/* Language Switcher Pill */}
            <div className="bg-rose-950/80 rounded-full p-0.5 border border-rose-800 flex items-center shrink-0">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition ${
                  language === 'en' ? 'bg-amber-400 text-slate-950' : 'text-rose-200 hover:text-white'
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition ${
                  language === 'hi' ? 'bg-amber-400 text-slate-950' : 'text-rose-200 hover:text-white'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>

          {/* Right Communication Shortcuts */}
          <div className="flex items-center gap-4 shrink-0 font-medium">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-white transition cursor-pointer"
              title="WhatsApp Us"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{isHi ? 'व्हाट्सएप करें' : 'WhatsApp Us'}</span>
            </a>
            <a
              href={phoneUrl}
              className="flex items-center gap-1 text-rose-200 hover:text-white transition cursor-pointer"
              title="Call Us"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{isHi ? 'कॉल करें' : 'Call Us'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <div className="w-full bg-[#faf8f5] border-b border-stone-200/80">
        <div className="w-full px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4">
            <div
              onClick={() => handleNavClick('home')}
              className="cursor-pointer flex items-center gap-2.5 group"
            >
              {/* Fashion Hanger Icon */}
              <div className="w-10 h-10 rounded-full bg-[#6b1426] flex items-center justify-center text-amber-300 shadow-sm shrink-0">
                <svg className="w-6 h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                  <path d="M12 2a2.5 2.5 0 0 1 2.5 2.5c0 .9-.47 1.68-1.18 2.12L20 13a2 2 0 0 1-1.3 3.5H5.3A2 2 0 0 1 4 13l6.68-6.38A2.49 2.49 0 0 1 9.5 4.5 2.5 2.5 0 0 1 12 2z" />
                </svg>
              </div>

              {/* Text Logo */}
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-[#6b1426] leading-none tracking-tight">
                  Pranjul
                </span>
                <span className="text-[10px] font-bold text-stone-700 uppercase tracking-[0.2em] leading-tight mt-0.5">
                  FASHION HOUSE
                </span>
              </div>
            </div>

            {/* Vertical Divider & Cursive Slogan */}
            <div className="hidden lg:flex items-center border-l border-stone-300 pl-4 h-8">
              <span className="font-serif italic text-sm text-[#6b1426] font-medium tracking-wide">
                {isHi ? 'हर जनरेशन के लिए स्टाइल' : 'Style for Every Generation'}
              </span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs sm:text-sm font-semibold text-stone-700">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition cursor-pointer ${
                    isActive
                      ? 'text-[#6b1426] font-bold border-b-2 border-[#6b1426]'
                      : 'hover:text-[#6b1426]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Search, Wishlist, User Icon, Owner Login */}
          <div className="flex items-center gap-2.5">
            {/* Search Input Box */}
            <div className="relative hidden sm:block w-44 lg:w-52">
              <input
                type="text"
                placeholder={isHi ? 'कपड़े खोजें...' : 'Search for products...'}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeTab !== 'catalog') setActiveTab('catalog');
                }}
                className="w-full pl-3 pr-8 py-1.5 rounded-md border border-stone-300 bg-white text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#6b1426]"
              />
              <Search className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Wishlist ❤️ Button with Counter */}
            <button
              onClick={onOpenWishlist}
              className="p-1.5 text-[#6b1426] hover:bg-rose-50 rounded-full border border-rose-200 bg-white shadow-2xs transition cursor-pointer relative"
              title={isHi ? 'दुकान पर दिखाने के लिए सेव किए गए कपड़े' : 'Wishlist - Saved Items'}
            >
              <Heart className="w-4 h-4 fill-rose-100 text-[#6b1426]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#6b1426] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* User Account Icon Button */}
            <button
              onClick={() => setUserModalOpen(!userModalOpen)}
              className="p-1.5 text-stone-600 hover:text-[#6b1426] rounded-full border border-stone-200 bg-white shadow-2xs transition cursor-pointer relative"
              title={isHi ? 'ग्राहक विकल्प' : 'Customer Account & Options'}
            >
              <User className="w-4 h-4" />
            </button>

            {/* Owner Login Button */}
            <button
              onClick={onOpenOwnerLogin}
              className="bg-[#6b1426] hover:bg-[#520f1d] text-white font-semibold text-xs px-3.5 py-2 rounded-md shadow-sm transition flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <Lock className="w-3 h-3 text-amber-300" />
              <span>{isHi ? 'मालिक लॉगिन' : 'Owner Login'}</span>
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-700 hover:text-[#6b1426] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Customer Account & Options Dropdown Modal */}
      {userModalOpen && (
        <div className="absolute right-4 top-24 z-50 bg-white rounded-2xl border border-stone-200 shadow-xl p-4 w-72 space-y-3 animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b pb-2">
            <span className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#6b1426]" /> {isHi ? 'ग्राहक विकल्प' : 'Customer Options'}
            </span>
            <button onClick={() => setUserModalOpen(false)} className="text-stone-400 hover:text-stone-600 p-1">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <button
              onClick={() => {
                setUserModalOpen(false);
                onOpenWishlist();
              }}
              className="w-full flex items-center gap-2 p-2 rounded-xl bg-rose-50 text-[#6b1426] font-bold hover:bg-rose-100 transition text-left"
            >
              <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
              <span>{isHi ? `सेव किए कपड़े (${wishlistCount})` : `Saved Wishlist Items (${wishlistCount})`}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50 text-emerald-800 font-semibold hover:bg-emerald-100 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>{isHi ? 'व्हाट्सएप सहायता' : 'WhatsApp Store Support'}</span>
            </a>

            <a
              href={phoneUrl}
              className="flex items-center gap-2 p-2 rounded-xl bg-stone-50 text-stone-800 font-semibold hover:bg-stone-100 transition"
            >
              <Phone className="w-4 h-4 text-[#6b1426]" />
              <span>{isHi ? 'दुकान को कॉल करें' : 'Call Store'}</span>
            </a>

            <div className="pt-2 border-t text-center">
              <button
                onClick={() => {
                  setUserModalOpen(false);
                  onOpenOwnerLogin();
                }}
                className="w-full bg-[#6b1426] text-white font-bold py-2 rounded-xl flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-amber-300" />
                <span>{isHi ? 'मालिक लॉगिन डैशबोर्ड' : 'Switch to Owner Dashboard'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-3 shadow-lg">
          <div className="relative">
            <input
              type="text"
              placeholder={isHi ? 'कपड़े खोजें...' : 'Search for products...'}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveTab('catalog');
              }}
              className="w-full pl-3 pr-8 py-2 text-xs rounded-md border border-stone-300 bg-stone-50"
            />
            <Search className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2 text-sm font-semibold rounded-md ${
                  activeTab === link.id ? 'bg-rose-50 text-[#6b1426] font-bold' : 'text-stone-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
