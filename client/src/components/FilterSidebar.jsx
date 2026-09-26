import React from 'react';
import { Filter, RotateCcw, Check, ChevronDown, Tag } from 'lucide-react';

const FilterSidebar = ({
  category,
  setCategory,
  subcategory,
  setSubcategory,
  priceRange,
  setPriceRange,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  stockOnly,
  setStockOnly,
  minDiscount,
  setMinDiscount,
  sortBy,
  setSortBy,
  onResetFilters,
  categoriesSummary
}) => {
  const priceOptions = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under ₹500', value: '0-500' },
    { label: '₹500 – ₹1,000', value: '500-1000' },
    { label: '₹1,000 – ₹2,000', value: '1000-2000' },
    { label: '₹2,000 – ₹5,000', value: '2000-5000' },
    { label: '₹5,000+', value: '5000-100000' },
  ];

  const sizesList = ['All', 'S', 'M', 'L', 'XL', 'XXL', '38', '40', '42', '2-3 Yrs', '4-5 Yrs', 'Free Size'];
  const colorsList = ['All', 'Red', 'Blue', 'Pink', 'Gold', 'Black', 'White', 'Green', 'Maroon', 'Navy Blue', 'Yellow'];
  const discountsList = [
    { label: 'Any Discount', value: 0 },
    { label: '10% or more', value: 10 },
    { label: '20% or more', value: 20 },
    { label: '30% or more', value: 30 },
    { label: '40% or more', value: 40 },
  ];

  // Determine subcategories available for current category
  const availableSubcategories = category && category !== 'All' && categoriesSummary?.[category]?.subcategories
    ? ['All', ...categoriesSummary[category].subcategories]
    : ['All', 'Sarees', 'Suits', 'Kurtis', 'Western Dresses', 'Shirts', 'T-Shirts', 'Jeans', 'Kurta', 'Frocks', 'Girls Wear', 'Boys Wear', 'Party Wear'];

  return (
    <aside className="bg-white rounded-2xl border border-rose-100 p-5 shadow-xs space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between border-b border-rose-100 pb-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#701a2b]" />
          <h3 className="font-serif font-bold text-slate-900 text-lg">Filter Products</h3>
        </div>
        <button
          onClick={onResetFilters}
          className="text-xs text-rose-700 hover:text-rose-900 font-semibold flex items-center gap-1 transition"
          title="Reset all filters"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Sort Selector */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Sort By
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-[#701a2b] focus:outline-hidden"
        >
          <option value="newest">Newest Arrivals</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="discount-desc">Highest Discount</option>
          <option value="popular">Popularity / Trending</option>
        </select>
      </div>

      {/* Category */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Main Category
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {['All', 'Women', 'Men', 'Kids', 'Baby', 'Occasions', 'Seasonal', 'Trending Now'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setSubcategory('All');
              }}
              className={`py-1.5 px-2 text-[11px] font-semibold rounded-xl border text-center transition truncate ${
                category === cat
                  ? 'bg-[#701a2b] text-white border-[#701a2b] shadow-2xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-rose-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Subcategory
        </label>
        <select
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-[#701a2b] focus:outline-hidden"
        >
          {availableSubcategories.map((sub) => (
            <option key={sub} value={sub}>
              {sub === 'All' ? 'All Subcategories' : sub}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Price Range
        </label>
        <div className="space-y-1 text-xs">
          {priceOptions.map((opt) => (
            <label
              key={opt.value}
              className={`flex items-center gap-2 p-1.5 rounded-lg cursor-pointer transition ${
                priceRange === opt.value ? 'bg-rose-50 text-[#701a2b] font-bold' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <input
                type="radio"
                name="priceRange"
                checked={priceRange === opt.value}
                onChange={() => setPriceRange(opt.value)}
                className="accent-[#701a2b]"
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Stock Availability Toggle */}
      <div className="pt-2 border-t border-slate-100">
        <label className="flex items-center justify-between text-xs font-semibold text-slate-800 cursor-pointer">
          <span>In Stock Only</span>
          <input
            type="checkbox"
            checked={stockOnly}
            onChange={(e) => setStockOnly(e.target.checked)}
            className="w-4 h-4 accent-[#701a2b] rounded cursor-pointer"
          />
        </label>
      </div>

      {/* Sizes */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Available Size
        </label>
        <div className="flex flex-wrap gap-1.5">
          {sizesList.map((sz) => (
            <button
              key={sz}
              onClick={() => setSelectedSize(sz)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition ${
                selectedSize === sz
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-amber-400'
              }`}
            >
              {sz}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Color Filter
        </label>
        <div className="flex flex-wrap gap-1.5">
          {colorsList.map((col) => (
            <button
              key={col}
              onClick={() => setSelectedColor(col)}
              className={`px-2.5 py-1 text-xs font-medium rounded-full border transition ${
                selectedColor === col
                  ? 'bg-rose-900 text-white border-rose-900 font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {col}
            </button>
          ))}
        </div>
      </div>

      {/* Minimum Discount Filter */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1">
          <Tag className="w-3.5 h-3.5 text-amber-600" /> Minimum Discount
        </label>
        <div className="space-y-1 text-xs">
          {discountsList.map((d) => (
            <label
              key={d.value}
              className={`flex items-center gap-2 p-1.5 rounded-lg cursor-pointer transition ${
                minDiscount === d.value ? 'bg-amber-50 text-amber-900 font-bold' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <input
                type="radio"
                name="minDiscount"
                checked={minDiscount === d.value}
                onChange={() => setMinDiscount(d.value)}
                className="accent-amber-600"
              />
              <span>{d.label}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
