import React from 'react';
import { ArrowRight } from 'lucide-react';

const PromoCardsRow = ({ setActiveTab, setCategory }) => {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        
        {/* CARD 1: New Collection */}
        <div className="relative bg-gradient-to-r from-[#e3ece5] via-[#edf3ee] to-[#f4f8f5] rounded-3xl border border-emerald-200/70 p-6 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition duration-300 h-56 w-full">
          <div className="space-y-2 z-10 max-w-[62%]">
            <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#1e4620] tracking-tight">
              New Collection
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
              Fresh Styles for a New You
            </p>
            <div className="pt-3">
              <button
                onClick={() => setActiveTab('new-arrivals')}
                className="bg-[#6b1426] hover:bg-[#520f1d] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-xs transition inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="absolute right-0 bottom-0 top-0 w-40 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
              alt="New Collection Indian Fashion"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* CARD 2: Today's Offers */}
        <div className="relative bg-gradient-to-r from-[#fde68a] via-[#fef08a] to-[#fef9c3] rounded-3xl border border-amber-300/80 p-6 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition duration-300 h-56 w-full">
          {/* Circular Offer Badge on top right */}
          <div className="absolute top-4 right-4 bg-[#6b1426] text-amber-300 w-16 h-16 rounded-full flex flex-col items-center justify-center text-center shadow-md border border-amber-300/50 z-20">
            <span className="text-[9px] font-bold uppercase text-white leading-tight">UP TO</span>
            <span className="text-sm font-extrabold leading-none text-amber-300">20%</span>
            <span className="text-[9px] font-bold uppercase text-white leading-tight">OFF</span>
          </div>

          <div className="space-y-2 z-10 max-w-[65%]">
            <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-amber-950 tracking-tight">
              Today's Offers
            </h3>
            <p className="text-xs sm:text-sm text-amber-900/80 font-medium leading-relaxed">
              Best Deals on Your Favourite Styles
            </p>
            <div className="pt-3">
              <button
                onClick={() => setActiveTab('offers')}
                className="bg-[#6b1426] hover:bg-[#520f1d] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-xs transition inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Offers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* CARD 3: Festival Collection */}
        <div className="relative bg-gradient-to-r from-[#4c0519] via-[#701a2b] to-[#881337] rounded-3xl border border-rose-900 p-6 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md transition duration-300 h-56 w-full text-white">
          <div className="space-y-2 z-10 max-w-[62%]">
            <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-amber-200 tracking-tight">
              Festival Collection
            </h3>
            <p className="text-xs sm:text-sm text-rose-100 font-medium leading-relaxed">
              Celebrate in Style
            </p>
            <div className="pt-3">
              <button
                onClick={() => setActiveTab('festivals')}
                className="bg-[#fce084] hover:bg-[#ebd073] text-[#6b1426] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-xs transition inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Festive Image */}
          <div className="absolute right-0 bottom-0 top-0 w-40 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1610030469668-98616c141703?auto=format&fit=crop&w=600&q=80"
              alt="Festive Indian Fashion"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PromoCardsRow;
