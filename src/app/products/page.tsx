'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, X, ArrowUpDown, Frown } from 'lucide-react';
import { initialProducts, initialCategories } from '../../data/demoData';
import { ProductCard } from '../../components/ProductCard';
import { Product } from '../../types';

function ProductsContent() {
  const searchParams = useSearchParams();

  const querySearch = searchParams.get('search') || '';
  const queryCategory = searchParams.get('category') || '';
  const queryFilter = searchParams.get('filter') || '';
  const queryPrice = searchParams.get('price') || '';

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState(querySearch);
  const [selectedCategory, setSelectedCategory] = useState(queryCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState(queryPrice);
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  // Sync URL params to local state
  useEffect(() => {
    if (querySearch) setSearchQuery(querySearch);
    if (queryCategory) setSelectedCategory(queryCategory);
    if (queryPrice) setSelectedPriceRange(queryPrice);
  }, [querySearch, queryCategory, queryPrice]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // 1. Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        const matchesSubcategory = p.subcategory?.toLowerCase().includes(q) || false;
        const matchesOccasion = p.occasion.toLowerCase().includes(q);
        const matchesFabric = p.fabric.toLowerCase().includes(q);
        const matchesTags = p.tags?.some((t) => t.toLowerCase().includes(q)) || false;

        if (
          !matchesName &&
          !matchesCategory &&
          !matchesSubcategory &&
          !matchesOccasion &&
          !matchesFabric &&
          !matchesTags
        ) {
          return false;
        }
      }

      // 2. Category filter
      if (selectedCategory && p.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // 3. Special filter (New / Sale / Trending)
      if (queryFilter === 'new' && !p.isNewArrival) return false;
      if (queryFilter === 'sale' && !p.isSale) return false;
      if (queryFilter === 'trending' && !p.isTrending) return false;

      // 4. Price range filter
      if (selectedPriceRange) {
        if (selectedPriceRange === '0-500' && p.price > 500) return false;
        if (selectedPriceRange === '500-1000' && (p.price < 500 || p.price > 1000)) return false;
        if (selectedPriceRange === '1000-1500' && (p.price < 1000 || p.price > 1500)) return false;
        if (selectedPriceRange === '1500-2500' && (p.price < 1500 || p.price > 2500)) return false;
        if (selectedPriceRange === '2500-above' && p.price < 2500) return false;
      }

      // 5. Occasion filter
      if (selectedOccasion && !p.occasion.toLowerCase().includes(selectedOccasion.toLowerCase())) {
        return false;
      }

      // 6. Size filter
      if (selectedSize && !p.sizes.includes(selectedSize)) {
        return false;
      }

      // 7. Stock status
      if (inStockOnly && !p.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'popularity') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return 0; // default newest
    });
  }, [
    products,
    searchQuery,
    selectedCategory,
    queryFilter,
    selectedPriceRange,
    selectedOccasion,
    selectedSize,
    inStockOnly,
    sortBy
  ]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedPriceRange('');
    setSelectedOccasion('');
    setSelectedSize('');
    setInStockOnly(false);
    setSortBy('newest');
  };

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EADED2] pb-6">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#5A1827]">
            {selectedCategory ? selectedCategory : 'Digital Fashion Catalogue'}
          </h1>
          <p className="text-xs text-[#665B58] mt-1">
            Showing {filteredProducts.length} items available at Pranjul Fashion House, Chaubepur
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-80 relative flex items-center">
          <input
            type="text"
            placeholder="Search sarees, suits, kurtis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2.5 pl-9 pr-8 rounded-full bg-white border border-[#D9C4B5] text-xs text-[#231815] focus:outline-hidden focus:ring-2 focus:ring-[#5A1827]"
          />
          <Search className="w-4 h-4 text-[#8C7A77] absolute left-3" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 p-1 text-[#8C7A77] hover:text-[#5A1827]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-6 shrink-0 bg-white p-5 rounded-2xl border border-[#EADED2] h-fit hidden lg:block shadow-xs">
          <div className="flex items-center justify-between border-b border-[#F2E8DF] pb-3">
            <span className="font-serif font-bold text-base text-[#5A1827] flex items-center gap-1.5">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </span>
            <button
              onClick={clearAllFilters}
              className="text-[11px] font-semibold text-[#8C4351] hover:underline"
            >
              Reset All
            </button>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3E3D]">Category</h4>
            <div className="space-y-1">
              <button
                onClick={() => setSelectedCategory('')}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === '' ? 'bg-[#5A1827] text-white font-bold' : 'text-[#524542] hover:bg-[#FAF7F2]'
                }`}
              >
                All Categories ({products.length})
              </button>
              {initialCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.name)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex justify-between ${
                    selectedCategory.toLowerCase() === c.name.toLowerCase()
                      ? 'bg-[#5A1827] text-white font-bold'
                      : 'text-[#524542] hover:bg-[#FAF7F2]'
                  }`}
                >
                  <span>{c.name}</span>
                  <span className="opacity-70">({c.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3E3D]">Price Range</h4>
            <div className="space-y-1 text-xs text-[#524542]">
              {[
                { label: 'All Prices', val: '' },
                { label: 'Under ₹500', val: '0-500' },
                { label: '₹500 - ₹1,000', val: '500-1000' },
                { label: '₹1,000 - ₹1,500', val: '1000-1500' },
                { label: '₹1,500 - ₹2,500', val: '1500-2500' },
                { label: 'Above ₹2,500', val: '2500-above' },
              ].map((r) => (
                <button
                  key={r.val}
                  onClick={() => setSelectedPriceRange(r.val)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedPriceRange === r.val
                      ? 'bg-[#5A1827] text-white font-bold'
                      : 'hover:bg-[#FAF7F2]'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Occasion Filter */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3E3D]">Occasion</h4>
            <select
              value={selectedOccasion}
              onChange={(e) => setSelectedOccasion(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D9C4B5] text-xs text-[#231815] focus:outline-hidden"
            >
              <option value="">All Occasions</option>
              <option value="Casual">Casual / Everyday</option>
              <option value="Workwear">Workwear / Office</option>
              <option value="Festive">Festive / Puja</option>
              <option value="Party">Party Wear</option>
              <option value="Wedding">Wedding / Ceremonial</option>
            </select>
          </div>

          {/* Size Filter */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3E3D]">Available Sizes</h4>
            <div className="flex flex-wrap gap-1.5">
              {['S', 'M', 'L', 'XL', 'XXL', 'Free Size', 'Unstitched'].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(selectedSize === sz ? '' : sz)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold border transition-colors ${
                    selectedSize === sz
                      ? 'bg-[#5A1827] text-white border-[#5A1827]'
                      : 'bg-white text-[#524542] border-[#D9C4B5] hover:bg-[#FAF7F2]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1 space-y-4">
          
          {/* Controls Bar (Mobile Filter Toggle + Sorting) */}
          <div className="flex items-center justify-between gap-4 bg-white p-3 rounded-xl border border-[#EADED2] text-xs">
            <button
              onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#D9C4B5] text-[#5A1827] font-semibold"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>

            <div className="flex items-center gap-2 ml-auto">
              <span className="text-[#7A6B68] hidden sm:inline">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#D9C4B5] text-xs text-[#231815] font-medium focus:outline-hidden"
              >
                <option value="newest">Newest Arrivals</option>
                <option value="popularity">Popularity / Bestseller</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id || p._id} product={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#EADED2] p-8 space-y-3">
              <Frown className="w-12 h-12 text-[#8C7A77] mx-auto" />
              <h3 className="font-serif text-xl font-bold text-[#5A1827]">
                No products found
              </h3>
              <p className="text-xs text-[#665B58] max-w-sm mx-auto">
                We couldn&apos;t find any items matching your selected search or filter criteria. Try clearing filters or searching for terms like &ldquo;saree&rdquo;, &ldquo;suit&rdquo;, or &ldquo;kurti&rdquo;.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-5 py-2 rounded-full bg-[#5A1827] text-white text-xs font-semibold hover:bg-[#42101B]"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm">Loading Catalogue...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
