import React, { useState } from 'react';
import { X, MessageCircle, Phone, MapPin, CheckCircle2, XCircle, Sparkles, Tag, ShieldCheck, ArrowRight, Heart, Ruler } from 'lucide-react';

const ProductDetailModal = ({ product, onClose, onViewProduct, storeSettings, onOpenSizeGuide, isWishlisted, onToggleWishlist }) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');

  const whatsappNum = storeSettings?.whatsappNumber || '+91 98765 43210';
  const cleanWhatsapp = whatsappNum.replace(/[^0-9]/g, '');

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in Product ${product.productId} — ${product.name} (Size: ${selectedSize || 'Standard'}, Color: ${selectedColor || 'Standard'}). Please share availability and details.`
  );
  const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${whatsappMessage}`;
  const phoneUrl = `tel:${storeSettings?.phoneNumber || '+919876543210'}`;

  const isInStock = product.stockStatus === 'In Stock';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-rose-100 flex flex-col my-auto max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-slate-700 p-2 rounded-full shadow-md backdrop-blur-xs transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Container */}
        <div className="overflow-y-auto p-4 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Column: Image Viewer */}
          <div className="md:col-span-6 space-y-3">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
              <img
                src={product.images?.[0] || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                {product.isNewArrival && (
                  <span className="bg-rose-700 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> NEW ARRIVAL
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="bg-amber-500 text-slate-950 text-xs font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {product.discount}% OFF
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>Product Code: <strong className="font-mono text-slate-800">{product.productId}</strong></span>
              <span>Chaubepur Store Showroom</span>
            </div>
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-5">
            <div>
              {/* Category Subcategory Tag */}
              <div className="inline-block bg-rose-50 text-[#701a2b] font-bold text-xs px-2.5 py-1 rounded-md uppercase tracking-wider mb-2">
                {product.category} • {product.subcategory}
              </div>

              {/* Name */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                {product.name}
              </h2>

              {/* Price & Stock */}
              <div className="flex items-center justify-between mt-3 pb-4 border-b border-slate-100">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#701a2b]">
                    ₹{product.price?.toLocaleString('en-IN')}
                  </span>
                  {product.discount > 0 && (
                    <span className="text-base text-slate-400 line-through">
                      ₹{product.originalPrice?.toLocaleString('en-IN')}
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="text-xs bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded">
                      Save ₹{(product.originalPrice - product.price)?.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>

                <span
                  className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                    isInStock
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-rose-100 text-rose-800 border border-rose-300'
                  }`}
                >
                  {isInStock ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                  {product.stockStatus}
                </span>
              </div>

              {/* Sizes Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Available Sizes:
                    </label>
                    {onOpenSizeGuide && (
                      <button
                        onClick={onOpenSizeGuide}
                        className="text-[11px] font-bold text-[#701a2b] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Ruler className="w-3.5 h-3.5" />
                        <span>View Size Chart Guide</span>
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
                          selectedSize === size
                            ? 'bg-[#701a2b] text-white border-[#701a2b] shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-rose-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Colors Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-4">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Available Colors:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1 text-xs font-medium rounded-full border transition ${
                          selectedColor === color
                            ? 'bg-rose-900 text-white border-rose-900 ring-2 ring-rose-300'
                            : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-700">Fabric/Material:</span>
                  <span className="font-medium text-slate-900">{product.material || 'Premium Quality'}</span>
                </div>
                {product.festival && (
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">Special Collection:</span>
                    <span className="font-bold text-purple-700">{product.festival}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mt-4">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Product Description:
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Store Action Buttons */}
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Ask on WhatsApp (Check Stock & Price)</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={phoneUrl}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 px-3 rounded-xl transition flex items-center justify-center gap-1.5 text-xs"
                >
                  <Phone className="w-4 h-4 text-rose-800" />
                  <span>Call Store</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    // Scroll to about section
                    const el = document.getElementById('store-location');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-rose-50 hover:bg-rose-100 text-[#701a2b] font-semibold py-2.5 px-3 rounded-xl transition flex items-center justify-center gap-1.5 text-xs"
                >
                  <MapPin className="w-4 h-4 text-[#701a2b]" />
                  <span>Visit Store in Chaubepur</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
