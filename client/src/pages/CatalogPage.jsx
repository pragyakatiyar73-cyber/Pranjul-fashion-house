import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { Search, Filter, X, SlidersHorizontal, ShoppingBag } from 'lucide-react';

const CatalogPage = ({
  products,
  searchQuery,
  setSearchQuery,
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
  onViewProduct,
  storeSettings,
  categoriesSummary,
  wishlistIds = [],
  onToggleWishlist
}) => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter products locally based on state props
  const filteredProducts = products.filter((product) => {
    // Search filter
    if (searchQuery && searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const matchName = product.name?.toLowerCase().includes(q);
      const matchCat = product.category?.toLowerCase().includes(q);
      const matchSub = product.subcategory?.toLowerCase().includes(q);
      const matchId = product.productId?.toLowerCase().includes(q);
      const matchDesc = product.description?.toLowerCase().includes(q);
      const matchColor = product.colors?.some((c) => c.toLowerCase().includes(q));
      if (!matchName && !matchCat && !matchSub && !matchId && !matchDesc && !matchColor) {
        return false;
      }
    }

    // Category filter
    if (category && category !== 'All') {
      const catLower = category.toLowerCase();
      const matchCat = product.category?.toLowerCase() === catLower;
      const matchOcc = product.occasion?.toLowerCase().includes(catLower);
      const matchSeas = product.season?.toLowerCase().includes(catLower);
      const matchGen = product.gender?.toLowerCase() === catLower;
      if (!matchCat && !matchOcc && !matchSeas && !matchGen) {
        return false;
      }
    }

    // Subcategory filter
    if (subcategory && subcategory !== 'All') {
      const subLower = subcategory.toLowerCase();
      const matchSub = product.subcategory?.toLowerCase().includes(subLower);
      const matchOcc = product.occasion?.toLowerCase().includes(subLower);
      const matchSeas = product.season?.toLowerCase().includes(subLower);
      const matchName = product.name?.toLowerCase().includes(subLower);
      if (!matchSub && !matchOcc && !matchSeas && !matchName) {
        return false;
      }
    }

    // Price range filter
    if (priceRange && priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (product.price < min || product.price > max) {
        return false;
      }
    }

    // Stock only filter
    if (stockOnly && product.stockStatus !== 'In Stock') {
      return false;
    }

    // Size filter
    if (selectedSize && selectedSize !== 'All') {
      if (!product.sizes || !product.sizes.includes(selectedSize)) {
        return false;
      }
    }

    // Color filter
    if (selectedColor && selectedColor !== 'All') {
      if (!product.colors || !product.colors.some((c) => c.toLowerCase().includes(selectedColor.toLowerCase()))) {
        return false;
      }
    }

    // Minimum discount filter
    if (minDiscount && Number(minDiscount) > 0) {
      if ((product.discount || 0) < Number(minDiscount)) {
        return false;
      }
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'discount-desc') return (b.discount || 0) - (a.discount || 0);
    if (sortBy === 'popular') return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0);
    return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
  });

  const hasActiveFilters =
    category !== 'All' ||
    subcategory !== 'All' ||
    priceRange !== 'all' ||
    selectedSize !== 'All' ||
    selectedColor !== 'All' ||
    stockOnly ||
    minDiscount > 0 ||
    searchQuery !== '';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-rose-100">
        <div>
          <h1 className="font-serif text-3xl font-bold text-slate-900">
            Showroom Collections
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Showing <strong className="text-rose-900">{sortedProducts.length}</strong> of {products.length} clothing items available at Pranjul Fashion House
          </p>
        </div>

        {/* Search Bar & Mobile Filter Trigger */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search saree, kurti, shirt, frock..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white focus:ring-2 focus:ring-[#701a2b] focus:outline-hidden"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden bg-rose-50 border border-rose-200 text-[#701a2b] p-2.5 rounded-xl font-semibold text-xs flex items-center gap-1.5"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Active Filters Badges */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 py-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Filters:</span>
          {category !== 'All' && (
            <span className="bg-rose-100 text-rose-900 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              Category: {category}
              <X className="w-3 h-3 cursor-pointer" onClick={() => setCategory('All')} />
            </span>
          )}
          {subcategory !== 'All' && (
            <span className="bg-rose-100 text-rose-900 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              Subcategory: {subcategory}
              <X className="w-3 h-3 cursor-pointer" onClick={() => setSubcategory('All')} />
            </span>
          )}
          {priceRange !== 'all' && (
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              Price: {priceRange}
              <X className="w-3 h-3 cursor-pointer" onClick={() => setPriceRange('all')} />
            </span>
          )}
          {selectedSize !== 'All' && (
            <span className="bg-slate-100 text-slate-900 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              Size: {selectedSize}
              <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedSize('All')} />
            </span>
          )}
          {selectedColor !== 'All' && (
            <span className="bg-slate-100 text-slate-900 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              Color: {selectedColor}
              <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedColor('All')} />
            </span>
          )}
          {stockOnly && (
            <span className="bg-emerald-100 text-emerald-900 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              In Stock Only
              <X className="w-3 h-3 cursor-pointer" onClick={() => setStockOnly(false)} />
            </span>
          )}
          {minDiscount > 0 && (
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              {minDiscount}%+ Discount
              <X className="w-3 h-3 cursor-pointer" onClick={() => setMinDiscount(0)} />
            </span>
          )}
          {searchQuery && (
            <span className="bg-slate-200 text-slate-900 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              Search: "{searchQuery}"
              <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchQuery('')} />
            </span>
          )}

          <button
            onClick={onResetFilters}
            className="text-xs text-rose-700 hover:underline font-bold ml-auto"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Grid Layout: Left Sidebar + Right Products */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block lg:col-span-3">
          <FilterSidebar
            category={category}
            setCategory={setCategory}
            subcategory={subcategory}
            setSubcategory={setSubcategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            stockOnly={stockOnly}
            setStockOnly={setStockOnly}
            minDiscount={minDiscount}
            setMinDiscount={setMinDiscount}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onResetFilters={onResetFilters}
            categoriesSummary={categoriesSummary}
          />
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-9">
          {sortedProducts.length === 0 ? (
            /* Empty State */
            <div className="bg-white rounded-3xl border border-rose-100 p-12 text-center space-y-4 my-6 shadow-2xs">
              <div className="w-16 h-16 bg-rose-50 text-[#701a2b] rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8 text-rose-800" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                No matching collection found. Try another search.
              </h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                We couldn't find any products matching your specific combination of filters or search query.
              </p>
              <button
                onClick={onResetFilters}
                className="bg-[#701a2b] hover:bg-rose-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition shadow-sm"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {sortedProducts.map((product) => {
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
          )}
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end lg:hidden">
          <div className="bg-white w-full max-w-xs h-full overflow-y-auto p-4 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-serif font-bold text-slate-900 text-lg">Filter Collections</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="text-slate-500 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar
              category={category}
              setCategory={setCategory}
              subcategory={subcategory}
              setSubcategory={setSubcategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              stockOnly={stockOnly}
              setStockOnly={setStockOnly}
              minDiscount={minDiscount}
              setMinDiscount={setMinDiscount}
              sortBy={sortBy}
              setSortBy={setSortBy}
              onResetFilters={onResetFilters}
              categoriesSummary={categoriesSummary}
            />
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full bg-[#701a2b] text-white font-bold py-3 rounded-xl text-xs uppercase"
            >
              Apply & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
