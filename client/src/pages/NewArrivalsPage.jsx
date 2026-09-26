import React from 'react';
import ProductCard from '../components/ProductCard';
import { Sparkles, Calendar } from 'lucide-react';

const NewArrivalsPage = ({ products, onViewProduct, storeSettings }) => {
  const newArrivals = products.filter((p) => p.isNewArrival);

  // Generate demo date string formatted like "18 September 2026"
  const getDemoDate = (idx) => {
    const daysAgo = (idx % 14) + 1;
    const date = new Date(2026, 8, 20 - daysAgo); // September 2026
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#701a2b] to-rose-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> FRESH IN SHOWROOM
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-2">
            Latest Arrivals Collection
          </h1>
          <p className="text-rose-100 text-sm max-w-xl mt-1">
            Explore newly added ethnic sarees, designer suits, shirts, and kidswear freshly unpacked at Pranjul Fashion House.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 text-center">
          <span className="block text-2xl font-bold text-amber-300">{newArrivals.length}</span>
          <span className="text-xs text-rose-200">New Items Added</span>
        </div>
      </div>

      {/* Grid of New Arrivals */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {newArrivals.map((product, idx) => (
          <div key={product._id || product.productId} className="flex flex-col">
            <ProductCard
              product={product}
              onViewDetails={onViewProduct}
              storeSettings={storeSettings}
            />
            {/* Added Date Tag */}
            <div className="mt-2 text-center text-[11px] text-slate-500 font-medium bg-slate-100 py-1 px-2 rounded-lg border border-slate-200 flex items-center justify-center gap-1">
              <Calendar className="w-3 h-3 text-rose-700" />
              <span>Added on: {getDemoDate(idx)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsPage;
