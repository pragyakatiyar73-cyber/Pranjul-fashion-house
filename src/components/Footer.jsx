import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Heart, Sparkles, Store, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenWhatsAppModal, setSelectedCategory }) {
  return (
    <footer className="bg-[#4E0C1E] text-amber-100/90 text-xs mt-12 border-t border-amber-300/20">
      
      {/* Top Back To Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-[#3D0A18] hover:bg-[#320813] py-3 text-center text-xs font-bold text-amber-200 transition border-b border-white/10 cursor-pointer flex items-center justify-center gap-1.5"
      >
        Back to top <ArrowUp className="w-3.5 h-3.5" />
      </button>

      {/* Main Footer Columns */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Col 1: Store Branding & Chaubepur Address */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-white font-black text-2xl tracking-tight leading-none font-serif">
              Pranjul
            </span>
            <span className="text-amber-300 text-[10px] font-extrabold tracking-[0.2em] leading-tight uppercase">
              FASHION HOUSE
            </span>
          </div>

          <p className="text-amber-100/70 leading-relaxed text-xs">
            Chaubepur's premier family fashion destination. Providing top quality Sarees, Lehengas, Suits, Menswear Kurtas, and Kids outfits at wholesale market prices.
          </p>

          <div className="space-y-2 pt-1 text-amber-100/90">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <span>Main Market Road, Near Union Bank, Chaubepur, Kanpur Nagar, UP</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+91 98765 43210</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-300 shrink-0" />
              <span>09:30 AM - 09:30 PM (Open All 7 Days)</span>
            </p>
          </div>
        </div>

        {/* Col 2: Shop Demographics */}
        <div>
          <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-3 text-amber-300 font-serif">
            Shop Collections
          </h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => setSelectedCategory('Women')} className="hover:text-amber-300 transition text-left cursor-pointer">
                Women's Sarees, Suits & Lehengas
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory('Men')} className="hover:text-amber-300 transition text-left cursor-pointer">
                Men's Kurtas, Shirts & Denim Jeans
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory('Kids')} className="hover:text-amber-300 transition text-left cursor-pointer">
                Kids & Baby Born Cotton Sets
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory('Sarees')} className="hover:text-amber-300 transition text-left cursor-pointer">
                Banarasi Silk & Partywear Sarees
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory('Kurtis')} className="hover:text-amber-300 transition text-left cursor-pointer">
                Dailywear Printed Cotton Kurtis
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Customer Care & WhatsApp Channel */}
        <div>
          <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-3 text-amber-300 font-serif">
            WhatsApp Channel & Lead
          </h4>
          <p className="text-amber-100/70 mb-4 leading-relaxed">
            Subscribe to our official WhatsApp Channel for exclusive daily collection drops & secret store coupons.
          </p>

          <button
            onClick={onOpenWhatsAppModal}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 transition shadow-md cursor-pointer text-xs"
          >
            <MessageCircle className="w-4 h-4 fill-current" /> Join WhatsApp Channel
          </button>
        </div>

        {/* Col 4: Store Guarantees */}
        <div>
          <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-3 text-amber-300 font-serif">
            Why Choose Us?
          </h4>
          <div className="space-y-2.5">
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>100% Quality Fabric</strong> checked before sale.</span>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <span><strong>Wholesale Rates</strong> in Chaubepur market.</span>
            </div>
            <div className="flex items-start gap-2">
              <Store className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <span><strong>Free Store Pickup</strong> & Reserve at Store.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#300713] py-4 px-4 text-center border-t border-white/10 text-[11px] text-amber-200/60">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 Pranjul Fashion House (Chaubepur Market). All Rights Reserved.</span>
          <span className="flex items-center gap-1">
            Handcrafted with <Heart className="w-3 h-3 text-red-500 fill-current" /> for Chaubepur & Kanpur Families
          </span>
        </div>
      </div>

    </footer>
  );
}
