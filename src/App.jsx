import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import BannerSlider from './components/BannerSlider';
import ShopByCategory from './components/ShopByCategory';
import PromoBanners from './components/PromoBanners';
import NewArrivals from './components/NewArrivals';
import StoreTrustSection from './components/StoreTrustSection';
import ValuePropsBar from './components/ValuePropsBar';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import WhatsAppChannelModal from './components/WhatsAppChannelModal';
import ScratchCouponModal from './components/ScratchCouponModal';
import OrderTrackingModal from './components/OrderTrackingModal';
import OwnerDashboard from './components/OwnerDashboard';
import Footer from './components/Footer';

import { exactProducts } from './data/exactProducts';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  // State
  const [products, setProducts] = useState(exactProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals & Drawers
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isScratchModalOpen, setIsScratchModalOpen] = useState(false);
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);
  const [isOwnerMode, setIsOwnerMode] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Cart State
  const [cart, setCart] = useState([
    { ...exactProducts[0], selectedSize: 'Free Size', quantity: 1 },
    { ...exactProducts[2], selectedSize: 'M', quantity: 1 }
  ]);

  const handleAddToCart = (product, selectedSize) => {
    const sizeToUse = selectedSize || product.selectedSize || 'Free Size';
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (c) => c.id === product.id && c.selectedSize === sizeToUse
      );
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prevCart, { ...product, selectedSize: sizeToUse, quantity: 1 }];
    });
  };

  const handleUpdateCartQuantity = (id, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveCartItem = (id, size) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.selectedSize === size)));
  };

  const handleDirectWhatsAppOrder = (product, selectedSize) => {
    const text = `Hello Pranjul Fashion House! I want to check availability & order:\n\n*Product:* ${product.title}\n*Size:* ${selectedSize || 'Standard'}\n*Price:* ₹${product.price} (MRP: ₹${product.mrp || product.original_mrp})\n*Category:* ${product.category || product.gender}\n\nPlease share store pickup or local delivery details!`;
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleApplyCoupon = (code) => {
    setAppliedCoupon(code);
    setIsCartOpen(true);
  };

  // Precise Filtered Products Logic across all 11 categories
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // 1. Category Filter
      if (selectedCategory !== 'All') {
        const sel = selectedCategory.toLowerCase();
        const itemCat = (item.category || '').toLowerCase();
        const itemTitle = (item.title || '').toLowerCase();
        const itemGender = (item.gender || '').toLowerCase();

        if (sel.includes('home') && !itemCat.includes('home')) return false;
        if (sel.includes('party') && !itemCat.includes('party')) return false;
        if (sel.includes('western') && !itemCat.includes('western')) return false;
        if (sel.includes('formal') && !itemCat.includes('formal')) return false;
        if (sel.includes('school') && !itemCat.includes('school')) return false;
        if (sel.includes('saree') && !itemCat.includes('saree')) return false;
        if (sel.includes('tourist') && !itemCat.includes('tourist')) return false;
        if (sel.includes('trending') && !itemCat.includes('trending') && item.tag !== 'TRENDING') return false;
        
        if (sel.includes("men's") && !itemGender.includes('men') && !itemCat.includes('men')) return false;
        if (sel.includes("women's") && !itemGender.includes('women') && !itemCat.includes('women')) return false;
        if (sel.includes("kids") && !itemGender.includes('kids') && !itemCat.includes('kids')) return false;
      }

      // 2. Feature Filter
      if (activeFilter === 'festival' && item.tag !== 'OFFER' && !item.is_festival_deal) return false;
      if (activeFilter === 'new' && item.tag !== 'NEW' && !item.is_new_arrival) return false;

      // 3. Search Query Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = (item.title || '').toLowerCase().includes(query);
        const matchesCategory = (item.category || '').toLowerCase().includes(query);
        const matchesDesc = (item.description || '').toLowerCase().includes(query);
        const matchesFabric = (item.fabric || '').toLowerCase().includes(query);
        if (!matchesTitle && !matchesCategory && !matchesDesc && !matchesFabric) {
          return false;
        }
      }

      return true;
    });
  }, [products, selectedCategory, activeFilter, searchQuery]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] font-sans antialiased">
      
      {/* 1. Header (Top Nav + Search Bar + Category Dropdown) */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
        isOwnerMode={isOwnerMode}
        setIsOwnerMode={setIsOwnerMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {isOwnerMode ? (
          <OwnerDashboard
            products={products}
            setProducts={setProducts}
            onAddNewProduct={() => {}}
          />
        ) : (
          <>
            {/* 2. Hero Banner Slider */}
            <BannerSlider
              onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)}
              onFilterFestival={() => {
                setActiveFilter('festival');
                setSelectedCategory('All');
              }}
            />

            {/* 3. Shop by Category Row (All 11 Requested Categories) */}
            <ShopByCategory
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            {/* 4. 3 Middle Feature Promo Banners */}
            <PromoBanners
              onFilterFestival={() => {
                setActiveFilter('festival');
                setSelectedCategory('All');
              }}
              onFilterNew={() => {
                setActiveFilter('new');
                setSelectedCategory('All');
              }}
            />

            {/* Filter Reset Indicator if active */}
            {(selectedCategory !== 'All' || activeFilter !== 'all' || searchQuery) && (
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-2">
                <div className="flex items-center justify-between bg-amber-50 border border-amber-200 p-3 rounded-xl">
                  <span className="text-xs font-bold text-amber-900">
                    Filtered by: {selectedCategory !== 'All' ? `Category (${selectedCategory}) ` : ''} 
                    {activeFilter !== 'all' ? `Type (${activeFilter}) ` : ''}
                    {searchQuery ? `Search ("${searchQuery}")` : ''}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setActiveFilter('all');
                      setSearchQuery('');
                    }}
                    className="text-xs bg-[#70142C] text-white font-bold px-3 py-1 rounded-lg cursor-pointer"
                  >
                    Clear Filters ✕
                  </button>
                </div>
              </div>
            )}

            {/* 5. Products Showcase Section */}
            <NewArrivals
              products={filteredProducts}
              onAddToCart={handleAddToCart}
              onQuickView={setQuickViewProduct}
              onDirectWhatsAppOrder={handleDirectWhatsAppOrder}
              onViewAll={() => {
                setSelectedCategory('All');
                setActiveFilter('all');
                setSearchQuery('');
              }}
            />

            {/* 6. Humanized Store Trust & Reviews Section */}
            <StoreTrustSection
              onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)}
            />

            {/* 7. Value Props Strip (5 Features) */}
            <ValuePropsBar />

          </>
        )}

      </main>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="w-11 h-11 bg-gray-900/90 hover:bg-black text-white rounded-full shadow-lg flex items-center justify-center transition cursor-pointer backdrop-blur-xs"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* Floating WhatsApp Action Button */}
        <button
          onClick={() => setIsWhatsAppModalOpen(true)}
          className="bg-[#22C55E] hover:bg-[#16a34a] text-white p-3.5 rounded-full shadow-2xl transition transform hover:scale-110 flex items-center justify-center cursor-pointer border-2 border-white"
          title="Join Pranjul WhatsApp Channel"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </button>
      </div>

      {/* Footer */}
      <Footer
        onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Modals */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onDirectWhatsAppOrder={handleDirectWhatsAppOrder}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCart([])}
        appliedCoupon={appliedCoupon}
      />

      <WhatsAppChannelModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />

      <ScratchCouponModal
        isOpen={isScratchModalOpen}
        onClose={() => setIsScratchModalOpen(false)}
        onApplyCoupon={handleApplyCoupon}
      />

      <OrderTrackingModal
        isOpen={isTrackOrderOpen}
        onClose={() => setIsTrackOrderOpen(false)}
      />

    </div>
  );
}
