import React from 'react';
import { X, Heart, Trash2, MessageCircle, Phone, ArrowRight, ShoppingBag, CheckCircle2 } from 'lucide-react';

const WishlistModal = ({
  isOpen,
  onClose,
  wishlistIds = [],
  products = [],
  onRemoveFromWishlist,
  onClearWishlist,
  onViewProduct,
  storeSettings,
  language = 'en'
}) => {
  if (!isOpen) return null;

  const isHi = language === 'hi';
  const wishlistProducts = products.filter((p) => wishlistIds.includes(p._id || p.productId));

  const whatsappNum = storeSettings?.whatsappNumber || '+91 98765 43210';
  const cleanWhatsapp = whatsappNum.replace(/[^0-9]/g, '');

  // Pre-fill message with ALL saved wishlist items
  const wishlistSummaryText = wishlistProducts
    .map((p, idx) => `${idx + 1}. [${p.productId}] ${p.name} - ₹${p.price}`)
    .join('\n');

  const bulkWhatsappMsg = encodeURIComponent(
    isHi
      ? `नमस्ते प्रांजुल फैशन हाउस, मैंने आपकी वेबसाइट पर निम्नलिखित ${wishlistProducts.length} कपड़े पसंद किए हैं और दुकान विजिट के समय देखना चाहता/चाहती हूँ:\n\n${wishlistSummaryText}\n\nकृपया इनकी उपलब्धता और बेस्ट ऑफर बताएं।`
      : `Hello Pranjul Fashion House, I have saved ${wishlistProducts.length} items on your website for my upcoming store visit:\n\n${wishlistSummaryText}\n\nPlease verify availability and confirm offer pricing.`
  );

  const bulkWhatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${bulkWhatsappMsg}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-rose-100 flex flex-col my-auto max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#6b1426] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-rose-950/80 flex items-center justify-center border border-rose-800">
              <Heart className="w-5 h-5 fill-rose-300 text-rose-300" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">
                {isHi ? 'सेव किए गए कपड़े (Wishlist)' : 'Saved Wishlist Items'}
              </h3>
              <p className="text-[11px] text-rose-200 font-medium">
                {isHi
                  ? `दुकान पर दिखाने के लिए कुल ${wishlistProducts.length} कपड़े सेव हैं`
                  : `${wishlistProducts.length} items saved for your store visit`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-rose-200 hover:text-white p-1 rounded-full hover:bg-rose-900/60 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1 space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-rose-50 text-[#6b1426] flex items-center justify-center mx-auto border border-rose-200">
                <Heart className="w-8 h-8 opacity-40" />
              </div>
              <h4 className="font-serif font-bold text-stone-800 text-lg">
                {isHi ? 'आपकी विशलिस्ट खाली है' : 'Your Wishlist is Empty'}
              </h4>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                {isHi
                  ? 'कलेक्शन देखते समय ❤️ बटन पर क्लिक करके अपने पसंदीदा कपड़े यहाँ सेव करें।'
                  : 'Click the ❤️ heart icon on any product while browsing to save it here for quick store inquiries.'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {wishlistProducts.map((prod) => {
                const prodId = prod._id || prod.productId;
                const prodWhatsappMsg = encodeURIComponent(
                  `Hello Pranjul Fashion House, I want to inquire about saved product ${prod.productId} — ${prod.name} (Price: ₹${prod.price}).`
                );
                const itemWhatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${prodWhatsappMsg}`;

                return (
                  <div
                    key={prodId}
                    className="flex items-center gap-3 sm:gap-4 p-3 rounded-2xl bg-stone-50 border border-stone-200 hover:border-rose-200 transition group"
                  >
                    {/* Thumbnail */}
                    <img
                      src={prod.images?.[0] || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=300&q=80'}
                      alt={prod.name}
                      className="w-16 h-20 object-cover object-top rounded-xl border border-stone-200 shrink-0 cursor-pointer"
                      onClick={() => {
                        onClose();
                        onViewProduct(prod);
                      }}
                    />

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b1426] bg-rose-100/80 px-2 py-0.5 rounded">
                          {prod.category}
                        </span>
                        <span className="text-[10px] font-mono text-stone-500">
                          ID: {prod.productId}
                        </span>
                      </div>
                      <h4
                        onClick={() => {
                          onClose();
                          onViewProduct(prod);
                        }}
                        className="font-semibold text-stone-900 text-sm truncate cursor-pointer hover:text-[#6b1426]"
                      >
                        {prod.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-extrabold text-[#6b1426] text-sm">
                          ₹{prod.price?.toLocaleString('en-IN')}
                        </span>
                        {prod.discount > 0 && (
                          <span className="text-xs text-stone-400 line-through">
                            ₹{prod.originalPrice?.toLocaleString('en-IN')}
                          </span>
                        )}
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                          {prod.stockStatus}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-1.5 shrink-0">
                      <a
                        href={itemWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-2xs transition flex items-center gap-1"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Ask</span>
                      </a>

                      <button
                        onClick={() => onRemoveFromWishlist(prodId)}
                        className="p-2 rounded-xl text-rose-600 hover:bg-rose-100 hover:text-rose-800 transition cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {wishlistProducts.length > 0 && (
          <div className="p-4 bg-rose-50/50 border-t border-rose-100 space-y-2">
            <a
              href={bulkWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>
                {isHi
                  ? `स्टोर मैनेजर को ${wishlistProducts.length} कपड़ों की लिस्ट व्हाट्सएप भेजें`
                  : `Send All ${wishlistProducts.length} Saved Items to Store Manager on WhatsApp`}
              </span>
            </a>

            <div className="flex items-center justify-between text-xs pt-1 px-1">
              <button
                onClick={onClearWishlist}
                className="text-stone-500 hover:text-rose-700 font-medium underline cursor-pointer"
              >
                {isHi ? 'विशलिस्ट पूरी तरह साफ करें' : 'Clear All Saved Items'}
              </button>
              <span className="text-stone-500 font-serif italic">
                {isHi ? 'चौबेपुर शोरूम में डायरेक्ट दिखाएं' : 'Show directly at Chaubepur store'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistModal;
