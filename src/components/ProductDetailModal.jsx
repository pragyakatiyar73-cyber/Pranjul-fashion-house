import React, { useState } from 'react';
import { X, Star, MessageCircle, ShoppingCart, MapPin, Check, Sparkles, ShieldCheck } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onAddToCart, onDirectWhatsAppOrder }) {
  if (!product) return null;

  const imagesList = product.images && product.images.length > 0 
    ? product.images 
    : [product.image || 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80'];

  const sizesList = product.sizes || product.available_sizes || ['Free Size'];

  const [selectedImg, setSelectedImg] = useState(imagesList[0]);
  const [selectedSize, setSelectedSize] = useState(sizesList[0] || 'Free Size');
  const [isAdded, setIsAdded] = useState(false);

  const mrp = product.mrp || product.original_mrp || Math.round(product.price * 1.25);
  const discountPercent = product.discount || (mrp > product.price ? `${Math.round(((mrp - product.price) / mrp) * 100)}% OFF` : '15% OFF');

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWhatsAppInquiry = () => {
    onDirectWhatsAppOrder(product, selectedSize);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-amber-500/30 animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition shadow cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-8">
          
          {/* Left Column: Image Gallery */}
          <div className="flex flex-col gap-3">
            <div className="aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img
                src={selectedImg}
                alt={product.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Thumbnails */}
            {imagesList.length > 1 && (
              <div className="flex gap-2 overflow-x-auto py-1">
                {imagesList.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(img)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition shrink-0 cursor-pointer ${
                      selectedImg === img ? 'border-[#70142C] scale-105' : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-purple-100 text-purple-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                  {product.gender || 'Family'}'s Collection
                </span>
                {(product.is_festival_deal || product.tag === 'OFFER') && (
                  <span className="bg-red-100 text-red-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-red-600" /> Special Deal
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2 leading-tight font-serif">
                {product.title}
              </h2>

              <span className="text-xs text-gray-400 font-medium block mt-1">
                Code: {product.sku || product.id}
              </span>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating || 5) ? 'fill-current text-amber-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-800">{product.rating || 4.9} / 5</span>
                <span className="text-xs text-gray-400">({product.ratingCount || 120} reviews in Chaubepur)</span>
              </div>

              {/* Price Block */}
              <div className="mt-4 p-3 bg-amber-50/80 rounded-xl border border-amber-200">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-black text-[#70142C]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    M.R.P: ₹{mrp.toLocaleString('en-IN')}
                  </span>
                  <span className="bg-red-600 text-white text-xs font-extrabold px-2 py-0.5 rounded">
                    {discountPercent}
                  </span>
                </div>
                <p className="text-xs font-bold text-green-700 mt-1">
                  You Save: ₹{(mrp - product.price).toLocaleString('en-IN')} (Wholesale Price Guarantee)
                </p>
              </div>

              {/* Fabric & Stock Information */}
              <div className="mt-4 text-xs text-gray-600 space-y-1.5">
                <p><strong className="text-gray-900">Fabric Quality:</strong> {product.fabric || 'Rich Soft Breathable Cotton / Silk Blend'}</p>
                <p><strong className="text-gray-900">Chaubepur Store Stock:</strong> <span className="text-green-600 font-bold">In Stock at Store</span></p>
                <p><strong className="text-gray-900">Description:</strong> {product.description || 'Premium quality fashion apparel direct from Chaubepur Pranjul Fashion House.'}</p>
              </div>

              {/* Size Picker */}
              <div className="mt-4">
                <label className="text-xs font-bold text-gray-800 block mb-1.5">
                  SELECT SIZE:
                </label>
                <div className="flex flex-wrap gap-2">
                  {sizesList.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition cursor-pointer ${
                        selectedSize === size
                          ? 'border-[#70142C] bg-[#FAF0F2] text-[#70142C] shadow-xs'
                          : 'border-gray-300 text-gray-700 hover:border-gray-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Store Guarantees */}
              <div className="mt-4 pt-3 border-t border-gray-200 grid grid-cols-2 gap-2 text-[11px] text-gray-600">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" /> 100% Quality Fabric Check
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0" /> Store Pickup Available
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-xs cursor-pointer ${
                  isAdded 
                    ? 'bg-green-600 text-white' 
                    : 'bg-[#70142C] hover:bg-[#580E21] text-white'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5" /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </>
                )}
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Direct Order on WhatsApp
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
