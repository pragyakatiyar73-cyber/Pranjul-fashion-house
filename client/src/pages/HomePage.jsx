import React from 'react';
import Hero from '../components/Hero';
import CategoryRow from '../components/CategoryRow';
import PromoCardsRow from '../components/PromoCardsRow';
import ProductCard from '../components/ProductCard';
import ServiceStrip from '../components/ServiceStrip';
import CountdownTimer from '../components/CountdownTimer';
import WeddingBulkSection from '../components/WeddingBulkSection';
import LocalTrustStrip from '../components/LocalTrustStrip';
import DualShopperStrip from '../components/DualShopperStrip';
import { ArrowRight, Sparkles, MapPin, Phone, MessageCircle, Clock, Flame } from 'lucide-react';

const HomePage = ({
  products,
  offers,
  festivals,
  setActiveTab,
  setCategory,
  setSubcategory,
  onViewProduct,
  storeSettings,
  language = 'en',
  wishlistIds = [],
  onToggleWishlist,
  onOpenMegaMenu
}) => {
  // New Arrivals (First 6 items)
  const newArrivals = products.slice(0, 6);

  // Popular Collections (Trending / Featured products, next 6 items)
  const popularCollections = products
    .filter((p) => p.isTrending || p.isFeatured || p.discount >= 15)
    .slice(0, 6);

  const whatsappNum = storeSettings?.whatsappNumber || '+91 98765 43210';
  const cleanWhatsapp = whatsappNum.replace(/[^0-9]/g, '');

  return (
    <div className="w-full space-y-4">
      
      {/* 1. HERO SECTION (PRANJUL FASHION HOUSE | Har Style, Har Family Ke Liye | Women • Men • Kids) */}
      <Hero
        onExploreClick={() => setActiveTab('catalog')}
        onOffersClick={() => setActiveTab('offers')}
      />

      {/* DUAL SHOPPER RURAL + URBAN EXPERIENCE STRIP */}
      <DualShopperStrip
        onSelectCategory={(cat) => {
          setCategory(cat);
          setSubcategory('All');
          setActiveTab('catalog');
        }}
        onSelectSubcategory={(sub) => {
          setSubcategory(sub);
          setActiveTab('catalog');
        }}
        language={language}
      />

      {/* 2. SHOP BY CATEGORY (Women | Men | Kids | Sarees | Kurtis | Shirts | Jeans | Tops) */}
      <CategoryRow
        setCategory={setCategory}
        setSubcategory={setSubcategory}
        setActiveTab={setActiveTab}
        onOpenMegaMenu={onOpenMegaMenu}
      />

      {/* 3. THREE PROMOTIONAL CARDS (New Collection | Today's Offers | Festival Collection) */}
      <PromoCardsRow
        setActiveTab={setActiveTab}
        setCategory={setCategory}
      />

      {/* FESTIVAL CLOTHING QUICK SWITCHER STRIP */}
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-3.5 bg-gradient-to-r from-rose-900 via-[#6b1426] to-amber-900 text-white rounded-2xl mx-auto max-w-[1320px] shadow-md my-2 border border-amber-300/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-lg">🪔</span>
            <div>
              <h4 className="font-serif font-bold text-sm sm:text-base text-amber-200 leading-tight">
                {language === 'hi' ? 'त्यौहार अनुसार कपड़े (Festival Special Edits)' : 'Shop Clothes by Festival'}
              </h4>
              <p className="text-[10px] text-rose-200">
                {language === 'hi' ? 'दिवाली, नवरात्रि, शादी & ईद विशेष कलेक्शन' : 'Diwali, Navratri, Eid, Wedding & Karwa Chauth collections'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {[
              { label: 'Diwali 🪔', name: 'Diwali' },
              { label: 'Navratri 💃', name: 'Navratri' },
              { label: 'Karwa Chauth 🌹', name: 'Karwa Chauth' },
              { label: 'Eid Special 🌙', name: 'Eid' },
              { label: 'Wedding Season 💍', name: 'Wedding Season' },
              { label: 'Raksha Bandhan 🎁', name: 'Raksha Bandhan' },
            ].map((fest, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab('festivals');
                }}
                className="bg-white/10 hover:bg-amber-400 hover:text-slate-950 text-white font-bold text-xs px-3 py-1.5 rounded-xl border border-white/20 transition shrink-0 cursor-pointer"
              >
                {fest.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEW ARRIVALS */}
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-6 border-b border-stone-200/60">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-stone-900 tracking-tight">
              New Arrivals
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('new-arrivals')}
            className="text-xs font-bold text-[#6b1426] hover:text-[#520f1d] flex items-center gap-1 transition"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6-Column Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 sm:gap-6 w-full">
          {newArrivals.map((product) => {
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
      </section>

      {/* WEDDING & BULK ASSISTANT WIDGET */}
      <WeddingBulkSection storeSettings={storeSettings} language={language} />

      {/* 5. POPULAR COLLECTIONS */}
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-600" />
            <div>
              <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-stone-900 tracking-tight">
                Popular Collections
              </h2>
              <p className="text-xs text-stone-500 font-medium hidden sm:block">
                Trending & Most-Loved Outfits at Pranjul Fashion House
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('catalog')}
            className="text-xs font-bold text-[#6b1426] hover:text-[#520f1d] flex items-center gap-1 transition"
          >
            <span>Explore All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6-Column Popular Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 sm:gap-6 w-full">
          {popularCollections.map((product) => {
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
      </section>

      {/* SHOP BY NEED COMPACT STRIP */}
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-4 bg-[#faf6f0] border-y border-stone-200/80">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-serif font-bold text-lg text-stone-900 flex items-center gap-2">
            <span>Shop by Need & Occasion</span>
          </h3>
          <span className="text-xs text-stone-500 font-medium">Curated for Family Needs</span>
        </div>

        <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
          {[
            { label: 'Home Wear', icon: '🏠', cat: 'Daily Wear' },
            { label: 'Party Wear', icon: '✨', cat: 'Party Wear' },
            { label: 'Office Wear', icon: '💼', cat: 'Office Wear' },
            { label: 'Wedding Wear', icon: '💍', cat: 'Wedding Wear' },
            { label: 'School Wear', icon: '🎒', cat: 'School Wear' },
            { label: 'Travel Wear', icon: '✈️', cat: 'Travel Wear' },
            { label: 'Sports Wear', icon: '🏃', cat: 'Sports Wear' },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSubcategory(item.cat);
                setActiveTab('catalog');
              }}
              className="bg-white hover:bg-rose-50 text-stone-800 hover:text-[#6b1426] border border-stone-200 hover:border-rose-300 font-bold text-xs px-3.5 py-2 rounded-xl shadow-2xs transition flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* TRENDING NOW COMPACT STRIP */}
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-serif font-bold text-lg text-stone-900 flex items-center gap-2">
            <span>Trending Now</span>
          </h3>
          <span className="text-xs text-[#6b1426] font-bold">Popular Indian Fashion Trends</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            'Co-ord Sets',
            'Wide-Leg Jeans',
            'Overshirts',
            'Indo-Western',
            'Fusion Wear',
            'Athleisure',
            'Embroidered Denim',
            'Modern Ethnic Wear',
          ].map((tag, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSubcategory(tag);
                setActiveTab('catalog');
              }}
              className="bg-rose-50 hover:bg-[#6b1426] text-[#6b1426] hover:text-white border border-rose-200 font-semibold text-xs px-3 py-1.5 rounded-full transition shrink-0 cursor-pointer"
            >
              #{tag}
            </button>
          ))}
        </div>
      </section>

      {/* LOCAL TRUST & TESTIMONIAL STRIP */}
      <LocalTrustStrip language={language} />

      {/* 6. VISIT OUR STORE */}
      <section id="store-location" className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-6">
        {/* Service/Benefit Strip */}
        <ServiceStrip />

        {/* Store Location Details & Interactive Google Maps */}
        <div className="bg-[#faf5f0] border border-rose-200/80 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
          <div className="lg:col-span-6 space-y-4">
            <span className="bg-[#6b1426] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
              VISIT OUR STORE
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900">
              Pranjul Fashion House Showroom
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Step into our digital showroom or visit us in person at <strong>Chaubepur, Kanpur Nagar, Uttar Pradesh</strong>. We bring you the finest fabrics, comfortable sizing, and honest prices for the entire family.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#6b1426] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900 font-bold">Showroom Address:</strong>
                  <span>{storeSettings?.location || 'Chaubepur, Kanpur Nagar, Uttar Pradesh - 209203'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#6b1426] shrink-0" />
                <div>
                  <strong className="block text-stone-900 font-bold">Call Store:</strong>
                  <span>{storeSettings?.phoneNumber || '+91 98765 43210'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <strong className="block text-stone-900 font-bold">WhatsApp Support:</strong>
                  <span>{whatsappNum}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-700 shrink-0" />
                <div>
                  <strong className="block text-stone-900 font-bold">Store Hours:</strong>
                  <span>{storeSettings?.openingHours || 'Monday to Sunday: 10:00 AM - 9:00 PM'}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${cleanWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#10b981] hover:bg-[#059669] text-white font-bold py-3 px-5 rounded-xl text-xs sm:text-sm transition shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask Availability on WhatsApp</span>
              </a>
              <button
                onClick={() => setActiveTab('about')}
                className="bg-white hover:bg-rose-50 text-[#6b1426] font-bold py-3 px-5 rounded-xl text-xs sm:text-sm border border-rose-200 transition"
              >
                Get Store Directions
              </button>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md border border-stone-300 min-h-[300px]">
            <iframe
              title="Pranjul Fashion House Location"
              src={storeSettings?.googleMapsEmbedUrl || "https://maps.google.com/maps?q=Chaubepur,+Kanpur+Nagar,+Uttar+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"}
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
