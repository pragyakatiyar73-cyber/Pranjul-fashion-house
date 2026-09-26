import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = ({ onExploreClick, onOffersClick }) => {
  return (
    <div className="w-full bg-[#fef5ed] border-b border-amber-200/50 overflow-hidden py-6 sm:py-8 lg:py-10 relative">
      
      {/* Background Decorative Floral SVG Accents */}
      <div className="absolute top-0 left-0 w-44 h-full opacity-20 pointer-events-none hidden lg:block">
        <svg className="w-full h-full stroke-[#6b1426] fill-none" viewBox="0 0 100 200">
          <path d="M10 20 C 40 40, 20 80, 50 100 C 80 120, 30 160, 60 180" strokeWidth="1.5" />
          <circle cx="50" cy="100" r="3" fill="#6b1426" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-44 h-full opacity-20 pointer-events-none hidden lg:block">
        <svg className="w-full h-full stroke-[#6b1426] fill-none" viewBox="0 0 100 200">
          <path d="M90 20 C 60 40, 80 80, 50 100 C 20 120, 70 160, 40 180" strokeWidth="1.5" />
          <circle cx="50" cy="100" r="3" fill="#6b1426" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        
        {/* LEFT COLUMN: Main Headline & CTA */}
        <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
          <div className="space-y-1">
            <span className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-[#6b1426] font-semibold block leading-tight">
              Har Style
            </span>
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#3b0913] tracking-tight leading-none">
              Har Family Ke Liye
            </h1>
          </div>

          <p className="text-stone-700 text-xs sm:text-sm font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
            Trendy, Traditional & Comfortable Clothing for Women, Men and Kids.
          </p>

          <div className="pt-2">
            <button
              onClick={onExploreClick}
              className="bg-[#6b1426] hover:bg-[#520f1d] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CENTER COLUMN: INDIAN FAMILY FASHION COMPOSITION (Focal Point) */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-full aspect-16/11 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gradient-to-tr from-amber-100 via-rose-100 to-amber-50 group">
            {/* Indian Family Fashion Montage */}
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
              alt="Pranjul Fashion House Family Collection"
              className="w-full h-full object-cover object-top transition duration-700"
            />
            {/* Family Badge Overlay */}
            <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-center flex items-center justify-between">
              <span className="text-[11px] font-serif font-bold text-amber-300">
                Women • Men • Kids • Baby
              </span>
              <span className="text-[10px] bg-[#6b1426] text-white font-extrabold px-2 py-0.5 rounded uppercase">
                Family Store
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Special Offers Scalloped Promo Badge & Saree Stack */}
        <div className="lg:col-span-3 flex items-center justify-center lg:justify-end gap-2 relative">
          
          {/* Burgundy Scalloped Special Offers Card */}
          <div className="bg-[#6b1426] text-white p-5 sm:p-6 rounded-3xl shadow-xl text-center space-y-2 relative overflow-hidden w-full max-w-[210px] border-2 border-amber-300/40">
            <div className="space-y-1">
              <span className="font-serif italic text-2xl sm:text-3xl text-amber-300 block font-semibold leading-tight">
                Special
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-white block leading-none">
                Offers
              </span>
              <div className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block my-1 shadow-2xs">
                UP TO 20% OFF
              </div>
              <span className="text-[10px] text-rose-200 uppercase tracking-widest font-semibold block">
                On Selected Collections
              </span>
            </div>

            <button
              onClick={onOffersClick}
              className="bg-[#fce084] hover:bg-[#ebd073] text-[#6b1426] font-extrabold text-xs px-5 py-2 rounded-full shadow-sm transition inline-block cursor-pointer mt-1"
            >
              Shop Now
            </button>
          </div>

          {/* Right Saree Stack Visual Accent */}
          <div className="hidden xl:block w-14 h-48 rounded-r-2xl overflow-hidden shadow-md border-l border-amber-300/40 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=300&q=80"
              alt="Folded Festive Sarees"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;
