import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';

const ProductCard = ({ product, onViewDetails, storeSettings, isWishlisted, onToggleWishlist }) => {
  const whatsappNum = storeSettings?.whatsappNumber || '+91 98765 43210';
  const cleanWhatsapp = whatsappNum.replace(/[^0-9]/g, '');

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in Product ${product.productId} — ${product.name}. Please share availability and details.`
  );
  const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${whatsappMessage}`;

  const isNew = product.isNewArrival;
  const isInStock = product.stockStatus === 'In Stock';

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-md transition duration-300 flex flex-col justify-between overflow-hidden relative p-3">
      {/* Product Image & Top Badge */}
      <div
        className="relative aspect-4/5 w-full bg-stone-100 rounded-xl overflow-hidden cursor-pointer mb-3"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.images && product.images.length > 0 ? product.images[0] : 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80'}
          alt={product.name}
          className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
          loading="lazy"
        />

        {/* Top-Left NEW or OFFER Badge */}
        <div className="absolute top-2 left-2">
          {isNew ? (
            <span className="bg-[#16a34a] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
              NEW
            </span>
          ) : (
            <span className="bg-[#ea580c] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
              OFFER
            </span>
          )}
        </div>

        {/* Top-Right Wishlist Heart Button */}
        {onToggleWishlist && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product._id || product.productId);
            }}
            className={`absolute top-2 right-2 p-1.5 rounded-full shadow-md backdrop-blur-xs transition cursor-pointer z-10 ${
              isWishlisted
                ? 'bg-[#6b1426] text-white'
                : 'bg-white/80 text-stone-600 hover:text-rose-600 hover:bg-white'
            }`}
            title={isWishlisted ? 'Remove from saved wishlist' : 'Save item to wishlist'}
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-white' : ''}`} />
          </button>
        )}
      </div>

      {/* Product Info Body */}
      <div className="space-y-2 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h4
            onClick={() => onViewDetails(product)}
            className="font-serif font-bold text-stone-900 text-sm line-clamp-1 hover:text-[#6b1426] cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h4>

          {/* Product ID & Category */}
          <div className="text-[11px] text-stone-500 font-mono mt-0.5">
            {product.productId}
          </div>
          <div className="text-[10px] text-stone-400 font-medium">
            {product.category} | {product.subcategory}
          </div>

          {/* Pricing Row */}
          <div className="flex items-center gap-1.5 mt-2 flex-wrap">
            <span className="text-xs text-stone-400 line-through">
              ₹{product.originalPrice?.toLocaleString('en-IN')}
            </span>
            <span className="text-sm font-extrabold text-[#6b1426]">
              ₹{product.price?.toLocaleString('en-IN')}
            </span>
            {product.discount > 0 && (
              <span className="text-[10px] font-bold text-[#16a34a]">
                ({product.discount}% OFF)
              </span>
            )}
          </div>
        </div>

        {/* Sizes Pill Buttons */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
            {product.sizes.map((sz, idx) => (
              <span
                key={idx}
                className="bg-stone-100 text-stone-700 font-semibold text-[9px] px-1.5 py-0.5 rounded border border-stone-200 shrink-0"
              >
                {sz}
              </span>
            ))}
          </div>
        )}

        {/* Colors Preview */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 text-[10px] text-stone-600">
            <span className="text-stone-400 font-medium">Color:</span>
            <div className="flex items-center gap-1">
              {product.colors.slice(0, 4).map((c, i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full border border-stone-300 inline-block"
                  style={{
                    backgroundColor:
                      c.toLowerCase().includes('red') ? '#dc2626' :
                      c.toLowerCase().includes('pink') ? '#ec4899' :
                      c.toLowerCase().includes('blue') ? '#2563eb' :
                      c.toLowerCase().includes('green') ? '#16a34a' :
                      c.toLowerCase().includes('yellow') ? '#eab308' :
                      c.toLowerCase().includes('purple') ? '#9333ea' :
                      c.toLowerCase().includes('gold') ? '#d97706' :
                      c.toLowerCase().includes('black') ? '#000000' :
                      c.toLowerCase().includes('white') ? '#ffffff' : '#a8a29e'
                  }}
                  title={c}
                />
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Stock Status Indicator */}
        <div className={`text-[10px] font-bold flex items-center gap-1 ${isInStock ? 'text-[#16a34a]' : 'text-rose-600'}`}>
          <span className={`w-1.5 h-1.5 rounded-full inline-block ${isInStock ? 'bg-[#16a34a]' : 'bg-rose-600'}`}></span>
          <span>{product.stockStatus || (isInStock ? 'In Stock' : 'Out of Stock')}</span>
        </div>

        {/* Bottom Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100">
          <button
            onClick={() => onViewDetails(product)}
            className="w-full bg-white hover:bg-stone-50 text-[#6b1426] font-bold text-[11px] py-1.5 rounded-lg border border-rose-300 transition text-center cursor-pointer"
          >
            View Details
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold text-[11px] py-1.5 rounded-lg transition shadow-2xs flex items-center justify-center gap-1"
          >
            <MessageCircle className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
