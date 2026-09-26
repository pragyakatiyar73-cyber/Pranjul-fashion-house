import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DemoNoticeBanner from './components/DemoNoticeBanner';
import ProductDetailModal from './components/ProductDetailModal';
import OwnerLoginModal from './components/OwnerLoginModal';
import WishlistModal from './components/WishlistModal';
import SizeGuideModal from './components/SizeGuideModal';
import CategoryMegaMenu from './components/CategoryMegaMenu';

import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import OffersPage from './pages/OffersPage';
import FestivalPage from './pages/FestivalPage';
import AboutContactPage from './pages/AboutContactPage';
import OwnerDashboard from './pages/OwnerDashboard';

const API_BASE = '/api';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);
  const [festivals, setFestivals] = useState([]);
  const [storeSettings, setStoreSettings] = useState(null);
  const [categoriesSummary, setCategoriesSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  // Language & Wishlist Persistent State
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('pranjul_lang') || 'en';
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('pranjul_lang', lang);
  };

  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('pranjul_wishlist')) || [];
    } catch {
      return [];
    }
  });

  const handleToggleWishlist = (id) => {
    setWishlist((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('pranjul_wishlist', JSON.stringify(updated));
      return updated;
    });
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist((prev) => {
      const updated = prev.filter((item) => item !== id);
      localStorage.setItem('pranjul_wishlist', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearWishlist = () => {
    setWishlist([]);
    localStorage.removeItem('pranjul_wishlist');
  };

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [subcategory, setSubcategory] = useState('All');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedSize, setSelectedSize] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [stockOnly, setStockOnly] = useState(false);
  const [minDiscount, setMinDiscount] = useState(0);
  const [sortBy, setSortBy] = useState('newest');

  // Modals & Authentication State
  const [selectedProductModal, setSelectedProductModal] = useState(null);
  const [isOwnerLoginOpen, setIsOwnerLoginOpen] = useState(false);
  const [isOwnerAuthenticated, setIsOwnerAuthenticated] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  // Fetch initial data from backend API
  const fetchData = async () => {
    try {
      setLoading(true);
      const [resProd, resOff, resFest, resSet, resCat] = await Promise.all([
        fetch(`${API_BASE}/products?limit=200`).then((r) => r.json()).catch(() => ({ success: false })),
        fetch(`${API_BASE}/offers`).then((r) => r.json()).catch(() => ({ success: false })),
        fetch(`${API_BASE}/festivals`).then((r) => r.json()).catch(() => ({ success: false })),
        fetch(`${API_BASE}/settings`).then((r) => r.json()).catch(() => ({ success: false })),
        fetch(`${API_BASE}/products/categories/summary`).then((r) => r.json()).catch(() => ({ success: false })),
      ]);

      if (resProd.success) setProducts(resProd.products || []);
      if (resOff.success) setOffers(resOff.offers || []);
      if (resFest.success) setFestivals(resFest.festivals || []);
      if (resSet.success) setStoreSettings(resSet.settings || null);
      if (resCat.success) setCategoriesSummary(resCat.summary || null);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Reset Filters Handler
  const handleResetFilters = () => {
    setSearchQuery('');
    setCategory('All');
    setSubcategory('All');
    setPriceRange('all');
    setSelectedSize('All');
    setSelectedColor('All');
    setStockOnly(false);
    setMinDiscount(0);
    setSortBy('newest');
  };

  // Owner Product Handlers
  const handleProductCreated = async (productData) => {
    try {
      const res = await fetch(`${API_BASE}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      const data = await res.json();
      if (data.success) {
        fetchData();
      }
    } catch (err) {
      console.error('Error creating product:', err);
    }
  };

  const handleProductUpdated = async (id, productData) => {
    try {
      const res = await fetch(`${API_BASE}/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      const data = await res.json();
      if (data.success) {
        fetchData();
      }
    } catch (err) {
      console.error('Error updating product:', err);
    }
  };

  const handleToggleStock = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/products/${id}/stock`, {
        method: 'PATCH',
      });
      const data = await res.json();
      if (data.success) {
        setProducts((prev) =>
          prev.map((p) => (p._id === id ? { ...p, stockStatus: data.product.stockStatus } : p))
        );
      }
    } catch (err) {
      console.error('Error toggling stock:', err);
    }
  };

  const handleProductDeleted = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/products/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
      }
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  // Owner Offer Handlers
  const handleOfferCreated = async (offerData) => {
    try {
      const res = await fetch(`${API_BASE}/offers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(offerData),
      });
      const data = await res.json();
      if (data.success) fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleOfferToggleActive = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/offers/${id}/active`, { method: 'PATCH' });
      const data = await res.json();
      if (data.success) fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleOfferDeleted = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/offers/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  // Owner Festival Handlers
  const handleFestivalCreated = async (festData) => {
    try {
      const res = await fetch(`${API_BASE}/festivals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(festData),
      });
      const data = await res.json();
      if (data.success) fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleFestivalToggleActive = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/festivals/${id}/active`, { method: 'PATCH' });
      const data = await res.json();
      if (data.success) fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleFestivalDeleted = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/festivals/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  // Owner Settings & Reseed Handlers
  const handleSettingsUpdated = async (settingsData) => {
    try {
      const res = await fetch(`${API_BASE}/settings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settingsData),
      });
      const data = await res.json();
      if (data.success) {
        setStoreSettings(data.settings);
        alert('Store Information updated successfully!');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleReseedDemoData = async () => {
    if (window.confirm('Are you sure you want to re-seed demo products? This will reset custom changes to 125 unique demo items.')) {
      try {
        const res = await fetch(`${API_BASE}/settings/reseed`, { method: 'POST' });
        const data = await res.json();
        if (data.success) {
          fetchData();
          alert('Successfully re-seeded 125 unique demo products!');
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-stone-800 py-0 sm:py-2">
      {/* Centered Canvas Container matching exact reference image canvas */}
      <div className="max-w-[1360px] mx-auto bg-[#fdfbf7] min-h-screen flex flex-col shadow-2xl overflow-hidden border-x border-stone-300/40">
        
        {/* Main Responsive Navigation Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenOwnerLogin={() => {
            if (isOwnerAuthenticated) {
              setActiveTab('owner-dashboard');
            } else {
              setIsOwnerLoginOpen(true);
            }
          }}
          storeSettings={storeSettings}
          language={language}
          setLanguage={setLanguage}
          wishlistCount={wishlist.length}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          onOpenMegaMenu={() => setIsMegaMenuOpen(true)}
        />

        {/* Main View Router Content */}
        <main className="flex-1">
          {loading && products.length === 0 ? (
            <div className="py-24 text-center space-y-4">
              <div className="w-12 h-12 border-4 border-[#6b1426] border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-sm font-serif font-bold text-stone-700">
                Loading Pranjul Fashion House Digital Showroom...
              </p>
            </div>
          ) : (
            <>
              {activeTab === 'home' && (
                <HomePage
                  products={products}
                  offers={offers}
                  festivals={festivals}
                  setActiveTab={setActiveTab}
                  setCategory={setCategory}
                  setSubcategory={setSubcategory}
                  onViewProduct={(prod) => setSelectedProductModal(prod)}
                  storeSettings={storeSettings}
                  language={language}
                  wishlistIds={wishlist}
                  onToggleWishlist={handleToggleWishlist}
                  onOpenMegaMenu={() => setIsMegaMenuOpen(true)}
                />
              )}

              {activeTab === 'catalog' && (
                <CatalogPage
                  products={products}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
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
                  onResetFilters={handleResetFilters}
                  onViewProduct={(prod) => setSelectedProductModal(prod)}
                  storeSettings={storeSettings}
                  categoriesSummary={categoriesSummary}
                  wishlistIds={wishlist}
                  onToggleWishlist={handleToggleWishlist}
                />
              )}

              {activeTab === 'new-arrivals' && (
                <NewArrivalsPage
                  products={products}
                  onViewProduct={(prod) => setSelectedProductModal(prod)}
                  storeSettings={storeSettings}
                />
              )}

              {activeTab === 'offers' && (
                <OffersPage
                  offers={offers}
                  products={products}
                  setActiveTab={setActiveTab}
                  setCategory={setCategory}
                  onViewProduct={(prod) => setSelectedProductModal(prod)}
                  storeSettings={storeSettings}
                />
              )}

              {activeTab === 'festivals' && (
                <FestivalPage
                  festivals={festivals}
                  products={products}
                  onViewProduct={(prod) => setSelectedProductModal(prod)}
                  storeSettings={storeSettings}
                  wishlistIds={wishlist}
                  onToggleWishlist={handleToggleWishlist}
                  language={language}
                />
              )}

              {activeTab === 'about' && (
                <AboutContactPage storeSettings={storeSettings} />
              )}

              {activeTab === 'contact' && (
                <AboutContactPage storeSettings={storeSettings} />
              )}

              {activeTab === 'owner-dashboard' && (
                <OwnerDashboard
                  products={products}
                  offers={offers}
                  festivals={festivals}
                  storeSettings={storeSettings}
                  onLogout={() => {
                    setIsOwnerAuthenticated(false);
                    setActiveTab('home');
                  }}
                  onProductCreated={handleProductCreated}
                  onProductUpdated={handleProductUpdated}
                  onProductDeleted={handleProductDeleted}
                  onToggleStock={handleToggleStock}
                  onOfferCreated={handleOfferCreated}
                  onOfferToggleActive={handleOfferToggleActive}
                  onOfferDeleted={handleOfferDeleted}
                  onFestivalCreated={handleFestivalCreated}
                  onFestivalToggleActive={handleFestivalToggleActive}
                  onFestivalDeleted={handleFestivalDeleted}
                  onSettingsUpdated={handleSettingsUpdated}
                  onReseedDemoData={handleReseedDemoData}
                />
              )}
            </>
          )}
        </main>

        {/* Product Detail Modal */}
        {selectedProductModal && (
          <ProductDetailModal
            product={selectedProductModal}
            onClose={() => setSelectedProductModal(null)}
            onViewProduct={(prod) => setSelectedProductModal(prod)}
            storeSettings={storeSettings}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
            isWishlisted={wishlist.includes(selectedProductModal._id || selectedProductModal.productId)}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {/* Wishlist Modal */}
        <WishlistModal
          isOpen={isWishlistOpen}
          onClose={() => setIsWishlistOpen(false)}
          wishlistIds={wishlist}
          products={products}
          onRemoveFromWishlist={handleRemoveFromWishlist}
          onClearWishlist={handleClearWishlist}
          onViewProduct={(prod) => setSelectedProductModal(prod)}
          storeSettings={storeSettings}
          language={language}
        />

        {/* Size Guide Modal */}
        <SizeGuideModal
          isOpen={isSizeGuideOpen}
          onClose={() => setIsSizeGuideOpen(false)}
          language={language}
        />

        {/* Category Mega Menu */}
        <CategoryMegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
          onSelectCategory={(cat) => {
            setCategory(cat);
            setSubcategory('All');
            setActiveTab('catalog');
          }}
          onSelectSubcategory={(cat, sub) => {
            setCategory(cat);
            setSubcategory(sub);
            setActiveTab('catalog');
          }}
          language={language}
        />

        {/* Owner Login Modal */}
        <OwnerLoginModal
          isOpen={isOwnerLoginOpen}
          onClose={() => setIsOwnerLoginOpen(false)}
          onLoginSuccess={() => {
            setIsOwnerAuthenticated(true);
            setActiveTab('owner-dashboard');
          }}
        />

        {/* Footer */}
        <Footer setActiveTab={setActiveTab} storeSettings={storeSettings} />
      </div>
    </div>
  );
}
