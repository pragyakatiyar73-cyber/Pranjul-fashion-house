import React from 'react';
import ProductCard from '../components/ProductCard';
import { Tag, Calendar, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const OffersPage = ({ offers, products, setActiveTab, setCategory, onViewProduct, storeSettings }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Offers Banner Header */}
      <div className="bg-gradient-to-r from-amber-600 via-rose-900 to-[#701a2b] rounded-3xl p-6 sm:p-10 text-white shadow-xl">
        <div className="max-w-2xl space-y-3">
          <span className="bg-amber-400 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" /> SPECIAL DISCOUNTS & DEALS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Store Offers & Festival Discounts
          </h1>
          <p className="text-rose-100 text-sm leading-relaxed">
            Avail seasonal discount offers on selected sarees, suits, kurtis, menswear, and kidswear at Pranjul Fashion House in Chaubepur.
          </p>
        </div>
      </div>

      {/* Offers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <div
            key={offer._id || offer.title}
            className={`rounded-3xl border p-6 sm:p-8 flex flex-col justify-between transition shadow-md ${
              offer.active
                ? 'bg-white border-amber-200 hover:border-amber-400'
                : 'bg-slate-50 border-slate-200 opacity-60'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-rose-50 text-[#701a2b] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  {offer.category}
                </span>
                <span className="bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase shadow-xs">
                  {offer.discount}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-slate-900">
                {offer.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {offer.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>Valid: {offer.startDate} – {offer.endDate}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{offer.active ? 'Offer Active in Store' : 'Offer Expired'}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4">
              <button
                onClick={() => {
                  if (offer.category !== 'All Categories') {
                    setCategory(offer.category);
                  }
                  setActiveTab('catalog');
                }}
                className="w-full bg-[#701a2b] hover:bg-rose-900 text-white font-bold py-3 px-4 rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Browse {offer.category} Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Discounted Products Section */}
      <div className="space-y-6 pt-4 border-t border-rose-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Discounted Products Available Now
            </h2>
            <p className="text-xs text-slate-500">
              Handpicked products currently carrying active promotional discounts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products
            .filter((p) => (p.discount || 0) >= 15)
            .slice(0, 8)
            .map((product) => (
              <ProductCard
                key={product._id || product.productId}
                product={product}
                onViewDetails={onViewProduct}
                storeSettings={storeSettings}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
