import React from 'react';
import { MessageCircle, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = ({ setActiveTab, storeSettings }) => {
  const whatsappNum = storeSettings?.whatsappNumber || '+91 98765 43210';
  const cleanWhatsapp = whatsappNum.replace(/[^0-9]/g, '');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'catalog', label: 'Collections' },
    { id: 'new-arrivals', label: 'New Arrivals' },
    { id: 'offers', label: 'Offers' },
    { id: 'festivals', label: 'Festival Collection' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="w-full bg-[#4d0c1b] text-stone-200 pt-8 pb-6 border-t-4 border-[#6b1426]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-6">
        
        {/* Top Row: Logo, Navigation, Socials & WhatsApp Button */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-rose-900/60">
          
          {/* Logo */}
          <div
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer flex items-center gap-2.5 shrink-0"
          >
            <div className="w-9 h-9 rounded-full bg-rose-900 flex items-center justify-center text-amber-300 border border-amber-300/40">
              <svg className="w-5 h-5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                <path d="M12 2a2.5 2.5 0 0 1 2.5 2.5c0 .9-.47 1.68-1.18 2.12L20 13a2 2 0 0 1-1.3 3.5H5.3A2 2 0 0 1 4 13l6.68-6.38A2.49 2.49 0 0 1 9.5 4.5 2.5 2.5 0 0 1 12 2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-white leading-none">
                Pranjul
              </span>
              <span className="text-[9px] font-bold text-rose-300 uppercase tracking-[0.2em] leading-tight mt-0.5">
                FASHION HOUSE
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-rose-100">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.id}>
                <button
                  onClick={() => {
                    setActiveTab(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition"
                >
                  {link.label}
                </button>
                {idx < navLinks.length - 1 && <span className="opacity-40">|</span>}
              </React.Fragment>
            ))}
          </nav>

          {/* Social Icons & Green WhatsApp Action Button */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 text-rose-300">
              <a href="#" className="p-1.5 hover:text-white transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-1.5 hover:text-white transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-1.5 hover:text-white transition">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <a
              href={`https://wa.me/${cleanWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#10b981] hover:bg-[#059669] text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-md transition flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Location Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-rose-300/80 font-medium">
          <p>© 2026 Pranjul Fashion House. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-rose-200">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Chaubepur, Kanpur Nagar, Uttar Pradesh</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
