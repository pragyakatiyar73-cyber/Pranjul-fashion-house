'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, X, Frown, Sparkles } from 'lucide-react';
import { initialProducts, initialCategories } from '../../data/demoData';
import { ProductCard } from '../../components/ProductCard';
import { Product } from '../../types';

function ProductsContent() {
  const searchParams = useSearchParams();

  const querySearch = searchParams.get('search') || '';
  const queryCategory = searchParams.get('category') || '';
  const queryFilter = searchParams.get('filter') || '';
  const queryPrice = searchParams.get('price') || '';

  const [products] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState(querySearch);
  const [selectedAudience, setSelectedAudience] = useState<'all' | 'women' | 'men' | 'kids' | 'fabrics'>('all');
  const [selectedCategory, setSelectedCategory] = useState(queryCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState(queryPrice);
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync URL params to local state
  useEffect(() => {
    if (querySearch) setSearchQuery(querySearch);
    if (queryCategory) {
      setSelectedCategory(queryCategory);
      if (queryCategory.toLowerCase().includes('men')) setSelectedAudience('men');
      else if (queryCategory.toLowerCase().includes('kid')) setSelectedAudience('kids');
      else if (queryCategory.toLowerCase().includes('fabric')) setSelectedAudience('fabrics');
    }
    if (queryPrice) setSelectedPriceRange(queryPrice);
  }, [querySearch, queryCategory, queryPrice]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      // 1. Audience / Gender Tab filter
      if (selectedAudience !== 'all') {
        const tags = p.tags?.map((t) => t.toLowerCase()) || [];
        if (selectedAudience === 'men') {
          if (p.category !== "Men's Ethnic & Formal" && !tags.includes('men')) return false;
        } else if (selectedAudience === 'kids') {
          if (p.category !== "Kids' & Girls' Wear" && !tags.includes('kids')) return false;
        } else if (selectedAudience === 'fabrics') {
          if (p.category !== "Dress Material & Fabrics" && !tags.includes('fabrics')) return false;
        } else if (selectedAudience === 'women') {
          if (p.category === "Men's Ethnic & Formal" || p.category === "Kids' & Girls' Wear") return false;
        }
      }

      // 2. Search filter
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

      // 3. Category Sidebar filter (Smart multi-attribute matching)
      if (selectedCategory) {
        const catLower = selectedCategory.toLowerCase();
        const pCatLower = p.category.toLowerCase();
        const pTags = p.tags?.map((t) => t.toLowerCase()) || [];
        const pOccasion = p.occasion.toLowerCase();

        let matchesCat = pCatLower.includes(catLower);
        if (catLower.includes('wedding')) {
          matchesCat = pCatLower.includes('wedding') || pOccasion.includes('wedding') || pTags.includes('wedding');
        } else if (catLower.includes('party')) {
          matchesCat = pCatLower.includes('party') || pOccasion.includes('party') || pTags.includes('party');
        }

        if (!matchesCat) return false;
      }

      // 4. Special filter (New / Sale / Trending)
      if (queryFilter === 'new' && !p.isNewArrival) return false;
      if (queryFilter === 'sale' && !p.isSale) return false;
      if (queryFilter === 'trending' && !p.isTrending) return false;

      // 5. Price range filter
      if (selectedPriceRange) {
        if (selectedPriceRange === '0-500' && p.price > 500) return false;
        if (selectedPriceRange === '500-1000' && (p.price < 500 || p.price > 1000)) return false;
        if (selectedPriceRange === '1000-1500' && (p.price < 1000 || p.price > 1500)) return false;
        if (selectedPriceRange === '1500-2500' && (p.price < 1500 || p.price > 2500)) return false;
        if (selectedPriceRange === '2500-above' && p.price < 2500) return false;
      }

      // 6. Occasion filter
      if (selectedOccasion && !p.occasion.toLowerCase().includes(selectedOccasion.toLowerCase())) {
        return false;
      }

      // 7. Size filter
      if (selectedSize && !p.sizes.includes(selectedSize)) {
        return false;
      }

      // 8. Stock status
      if (inStockOnly && !p.inStock) {
        return false;
      }

      return true;
    });

    // Fallback: If strict category filter produced 0 items, show all products in dataset so user NEVER sees blank screen!
    if (result.length === 0 && selectedCategory) {
      result = products;
    }

    return result.sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'popularity') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return 0;
    });
  }, [
    products,
    selectedAudience,
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
    setSelectedAudience('all');
    setSelectedCategory('');
    setSelectedPriceRange('');
    setSelectedOccasion('');
    setSelectedSize('');
    setInStockOnly(false);
    setSortBy('newest');
  };

  return (
    <div className="py-8 px-6 lg:px-12 w-full space-y-6">
      
      {/* Catalogue Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EADED2] pb-6 w-full">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#8C4351] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Catalogue</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#5A1827]">
            {selectedCategory ? selectedCategory : 'Explore Fashion Collections'}
          </h1>
          <p className="text-xs sm:text-sm text-[#665B58] mt-1">
            Showing {filteredProducts.length} clothing items available at Pranjul Fashion House, Chaubepur
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-96 relative flex items-center">
          <input
            type="text"
            placeholder="Search sarees, suits, kurtis, men's wear, kids wear..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 pl-10 pr-9 rounded-full bg-white border border-[#D9C4B5] text-xs font-medium text-[#231815] focus:outline-hidden focus:ring-2 focus:ring-[#5A1827]"
          />
          <Search className="w-4 h-4 text-[#8C7A77] absolute left-3.5" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 p-1 text-[#8C7A77] hover:text-[#5A1827]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Target Audience / Clothing Type Navigation Bar */}
      <div className="flex items-center gap-2.5 border-b border-[#EADED2] pb-3 overflow-x-auto w-full">
        {[
          { id: 'all', label: 'All Collections' },
          { id: 'women', label: "Women's Wear (Sarees & Suits)" },
          { id: 'men', label: "Men's Ethnic & Formal" },
          { id: 'kids', label: "Kids' & Girls' Wear" },
          { id: 'fabrics', label: 'Dress Material & Fabrics' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setSelectedAudience(tab.id as any);
              setSelectedCategory('');
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-2xs ${
              selectedAudience === tab.id
                ? 'bg-[#5A1827] text-white'
                : 'bg-white text-[#4A3E3D] hover:bg-[#FAF7F2] border border-[#EADED2]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Full-Width Content Layout */}
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        
        {/* Left Filter Sidebar */}
        <aside className="w-full lg:w-72 space-y-6 shrink-0 bg-white p-6 rounded-3xl border border-[#EADED2] h-fit hidden lg:block shadow-xs">
          <div className="flex items-center justify-between border-b border-[#F2E8DF] pb-3">
            <span className="font-serif font-bold text-base text-[#5A1827] flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" /> Filter Catalogue
            </span>
            <button
              onClick={clearAllFilters}
              className="text-xs font-bold text-[#8C4351] hover:underline"
            >
              Reset All
            </button>
          </div>

          {/* Category Filter */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3E3D]">Categories</h4>
            <div className="space-y-1">
              <button
                onClick={() => setSelectedCategory('')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                  selectedCategory === '' ? 'bg-[#5A1827] text-white' : 'text-[#524542] hover:bg-[#FAF7F2]'
                }`}
              >
                All Categories ({products.length})
              </button>
              {initialCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.name)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors flex justify-between ${
                    selectedCategory.toLowerCase() === c.name.toLowerCase()
                      ? 'bg-[#5A1827] text-white'
                      : 'text-[#524542] hover:bg-[#FAF7F2]'
                  }`}
                >
                  <span>{c.name}</span>
                  <span className="opacity-70 font-semibold">({c.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3E3D]">Price Range</h4>
            <div className="space-y-1 text-xs">
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
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                    selectedPriceRange === r.val
                      ? 'bg-[#5A1827] text-white'
                      : 'text-[#524542] hover:bg-[#FAF7F2]'
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
              className="w-full px-3 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9C4B5] text-xs font-medium text-[#231815] focus:outline-hidden"
            >
              <option value="">All Occasions</option>
              <option value="Casual">Casual / Everyday</option>
              <option value="Workwear">Workwear / Office</option>
              <option value="Festive">Festive / Puja</option>
              <option value="Party">Party Wear</option>
              <option value="Wedding">Wedding / Ceremonial</option>
            </select>
          </div>

          {/* Sizes Filter */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A3E3D]">Available Sizes</h4>
            <div className="flex flex-wrap gap-1.5">
              {['S', 'M', 'L', 'XL', 'XXL', '38', '40', '42', '44', 'Free Size'].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(selectedSize === sz ? '' : sz)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
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
        <div className="flex-1 space-y-6 w-full">
          
          {/* Controls Bar (Mobile Filter Toggle + Sorting) */}
          <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#EADED2] text-xs w-full shadow-2xs">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#D9C4B5] text-[#5A1827] font-bold"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filter Options</span>
            </button>

            <div className="flex items-center gap-2 ml-auto">
              <span className="text-[#7A6B68] font-semibold hidden sm:inline">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#D9C4B5] text-xs text-[#231815] font-bold focus:outline-hidden"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id || p._id} product={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#EADED2] p-8 space-y-4 max-w-lg mx-auto shadow-xs">
              <Frown className="w-14 h-14 text-[#8C7A77] mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-[#5A1827]">
                No products match your criteria
              </h3>
              <p className="text-xs text-[#665B58]">
                We couldn&apos;t find any items matching your selected category, price range, or search. Try resetting your filters.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-2.5 rounded-full bg-[#5A1827] text-white text-xs font-bold hover:bg-[#42101B]"
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
    <Suspense fallback={<div className="p-12 text-center text-sm">Loading Full Catalogue...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
