import React from 'react';
import Link from 'next/link';
import { Flower2, MapPin, Phone, MessageCircle, Clock, Lock } from 'lucide-react';
import { initialStoreSettings } from '../data/demoData';
import { getWhatsAppLink, getCallLink } from '../lib/utils';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3B0D18] text-[#F7D6D0] pt-12 pb-6 border-t border-[#4E1422]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#4E1422]">
        
        {/* Brand Column */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#5A1827] flex items-center justify-center text-[#F7D6D0] border border-[#F7D6D0]/30">
              <Flower2 className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-white block">
                Pranjul Fashion House
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#F7D6D0]/80 block">
                Style for Every You
              </span>
            </div>
          </div>
          <p className="text-xs text-[#E5B5AC] leading-relaxed">
            Your premier boutique destination in Chaubepur for authentic silk sarees, designer suit sets, kurtis, lehengas, and western fashion.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-90 transition-opacity"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>
            <a
              href={getCallLink()}
              className="p-2 rounded-full bg-[#5A1827] text-white border border-[#F7D6D0]/20 hover:bg-[#48121F]"
              title="Call Store"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/collections" className="hover:text-white transition-colors">Collections</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white transition-colors">Digital Catalogue</Link>
            </li>
            <li>
              <Link href="/products?filter=new" className="hover:text-white transition-colors">New Arrivals</Link>
            </li>
            <li>
              <Link href="/offers" className="hover:text-white transition-colors">Special Offers</Link>
            </li>
            <li>
              <Link href="/wishlist" className="hover:text-white transition-colors">My Wishlist</Link>
            </li>
          </ul>
        </div>

        {/* Fashion Categories */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            Fashion Categories
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/products?category=Sarees" className="hover:text-white transition-colors">Silk & Banarasi Sarees</Link>
            </li>
            <li>
              <Link href="/products?category=Suits" className="hover:text-white transition-colors">Designer Suit Sets</Link>
            </li>
            <li>
              <Link href="/products?category=Kurtis" className="hover:text-white transition-colors">Cotton & Rayon Kurtis</Link>
            </li>
            <li>
              <Link href="/products?category=Lehengas" className="hover:text-white transition-colors">Bridal & Party Lehengas</Link>
            </li>
            <li>
              <Link href="/products?category=Western%20Dresses" className="hover:text-white transition-colors">Western Dresses</Link>
            </li>
            <li>
              <Link href="/products?category=Wedding%20Collection" className="hover:text-white transition-colors">Wedding Collection</Link>
            </li>
          </ul>
        </div>

        {/* Store Details */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            Boutique Location
          </h4>
          <div className="space-y-2 text-xs text-[#E5B5AC]">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>{initialStoreSettings.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-white shrink-0" />
              <span>{initialStoreSettings.shopTiming}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white shrink-0" />
              <span>{initialStoreSettings.phone}</span>
            </div>
            <div className="pt-2">
              <Link
                href="/admin/login"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#5A1827] border border-[#F7D6D0]/30 text-white text-[11px] font-semibold hover:bg-[#48121F]"
              >
                <Lock className="w-3 h-3" />
                <span>Boutique Owner Login</span>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#C59B92]">
        <p>© {new Date().getFullYear()} Pranjul Fashion House. All rights reserved.</p>
        <p>Digital Fashion Catalogue & Store Inquiry Platform • Chaubepur, UP</p>
      </div>
    </footer>
  );
};
