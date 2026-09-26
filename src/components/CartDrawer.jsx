import React, { useState } from 'react';
import { X, Trash2, MessageCircle, ShoppingBag, ShieldCheck, Tag, Store } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart, appliedCoupon }) {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [locality, setLocality] = useState('Chaubepur Main Market');
  const [orderPreference, setOrderPreference] = useState('Store Pickup in Chaubepur');
  const [couponCode, setCouponCode] = useState(appliedCoupon || '');
  const [discountApplied, setDiscountApplied] = useState(!!appliedCoupon);

  // Math Calculations
  const getItemMRP = (item) => item.mrp || item.original_mrp || Math.round(item.price * 1.25);

  const subtotalMRP = cartItems.reduce((acc, item) => acc + (getItemMRP(item) * item.quantity), 0);
  const subtotalSelling = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  let finalTotal = subtotalSelling;
  let extraCouponDiscount = 0;

  if (discountApplied) {
    if (couponCode === 'PRANJUL50') extraCouponDiscount = subtotalSelling * 0.10;
    else if (couponCode === 'ROYAL30') extraCouponDiscount = 150;
    else if (couponCode === 'KIDS25') extraCouponDiscount = 100;
    else extraCouponDiscount = 100;
  }
  finalTotal = Math.max(0, subtotalSelling - extraCouponDiscount);
  const totalSavings = (subtotalMRP - subtotalSelling) + extraCouponDiscount;

  // Build WhatsApp Order Link
  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    const itemsSummary = cartItems.map((item, idx) => 
      `${idx + 1}. *${item.title}*\n   Size: ${item.selectedSize} | Qty: ${item.quantity} | Price: ₹${item.price * item.quantity}`
    ).join('\n\n');

    const message = `🛍️ *NEW ORDER FROM PRANJUL FASHION HOUSE WEBSITE*\n` +
      `-------------------------------------------\n` +
      `👤 *Customer Name:* ${customerName || 'Valued Customer'}\n` +
      `📞 *Phone:* ${customerPhone || 'Not provided'}\n` +
      `📍 *Locality:* ${locality}\n` +
      `🏪 *Preference:* ${orderPreference}\n` +
      `-------------------------------------------\n` +
      `📦 *ORDERED ITEMS:*\n${itemsSummary}\n` +
      `-------------------------------------------\n` +
      `💰 *Total M.R.P:* ₹${subtotalMRP}\n` +
      `🎉 *Customer Savings:* ₹${totalSavings}\n` +
      `✅ *PAYABLE AMOUNT:* ₹${finalTotal.toFixed(0)}\n` +
      `-------------------------------------------\n` +
      `Please confirm stock availability & store pickup details in Chaubepur!`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="bg-[#70142C] text-white p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-300" />
            <h2 className="font-extrabold text-base tracking-wide font-serif">
              Your Cart & Order Summary
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#580E21] rounded-full transition text-gray-200 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {cartItems.length === 0 ? (
            <div className="text-center py-12 flex flex-col items-center justify-center text-gray-500">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-3" />
              <p className="font-bold text-base text-gray-700">Your Shopping Cart is Empty!</p>
              <p className="text-xs text-gray-400 mt-1 max-w-xs">
                Explore Chaubepur's top sarees, menswear & kids wear collections to place your order.
              </p>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                {cartItems.map((item) => {
                  const itemImg = item.image || (item.images && item.images[0]) || 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=300&q=80';
                  const itemMrp = getItemMRP(item);

                  return (
                    <div 
                      key={`${item.id}-${item.selectedSize}`} 
                      className="flex gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200 shadow-2xs"
                    >
                      <img 
                        src={itemImg} 
                        alt={item.title} 
                        className="w-16 h-20 object-cover object-top rounded-lg border border-gray-300 shrink-0" 
                      />

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-gray-900 line-clamp-1">{item.title}</h4>
                          <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-0.5">
                            <span>Size: <strong className="text-[#70142C] font-bold">{item.selectedSize}</strong></span>
                          </div>
                          <div className="text-xs font-extrabold text-[#70142C] mt-1">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}{' '}
                            <span className="text-[10px] text-gray-400 line-through">
                              ₹{(itemMrp * item.quantity).toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-gray-300 rounded-md bg-white">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                              className="px-2 py-0.5 text-xs font-bold hover:bg-gray-100 cursor-pointer"
                            >
                              -
                            </button>
                            <span className="px-2.5 py-0.5 text-xs font-extrabold">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                              className="px-2 py-0.5 text-xs font-bold hover:bg-gray-100 cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.id, item.selectedSize)}
                            className="text-red-500 hover:text-red-700 text-xs flex items-center gap-1 font-semibold cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Coupon Box */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-amber-900 flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-amber-600" /> Apply Coupon Code
                  </span>
                  <span className="text-[10px] text-amber-700 font-bold">PRANJUL50 | ROYAL30</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    className="flex-1 px-3 py-1.5 text-xs rounded border border-gray-300 bg-white font-bold tracking-wider uppercase"
                  />
                  <button
                    onClick={() => setDiscountApplied(true)}
                    className="bg-[#70142C] hover:bg-[#580E21] text-white text-xs font-extrabold px-3 py-1.5 rounded cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {discountApplied && (
                  <p className="text-[11px] font-bold text-green-700 mt-1.5">
                    🎉 Code '{couponCode || 'PRANJUL50'}' Applied! Extra ₹{extraCouponDiscount.toFixed(0)} Discount!
                  </p>
                )}
              </div>

              {/* Customer Contact Details */}
              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 space-y-2.5">
                <h4 className="text-xs font-extrabold text-gray-900 border-b pb-1 font-serif">
                  Customer Order Details (Chaubepur)
                </h4>

                <div>
                  <label className="text-[11px] font-bold text-gray-600 block">Your Name:</label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs border rounded bg-white mt-0.5"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-600 block">WhatsApp Mobile No:</label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs border rounded bg-white mt-0.5"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-600 block">Order Preference:</label>
                  <select
                    value={orderPreference}
                    onChange={(e) => setOrderPreference(e.target.value)}
                    className="w-full px-2 py-1.5 text-xs border rounded bg-white mt-0.5"
                  >
                    <option value="Store Pickup in Chaubepur">🏪 Reserve for Store Pickup in Chaubepur</option>
                    <option value="Direct Store WhatsApp Order">📱 Direct Store WhatsApp Inquiry</option>
                  </select>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Footer & WhatsApp Order CTA */}
        {cartItems.length > 0 && (
          <div className="p-4 bg-gray-900 text-white border-t border-gray-800 space-y-3">
            
            {/* Savings & Total Summary */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-gray-400">
                <span>Total Items MRP:</span>
                <span className="line-through">₹{subtotalMRP.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-bold">
                <span>Total Customer Savings:</span>
                <span>- ₹{totalSavings.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-white pt-1 border-t border-gray-800">
                <span>Payable Amount:</span>
                <span className="text-amber-300 font-black">₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* WhatsApp Checkout Button */}
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Complete Order on WhatsApp
            </button>

            <p className="text-[10px] text-gray-400 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> Direct connect with Pranjul Fashion House Store Owner
            </p>

          </div>
        )}

      </div>
    </div>
  );
}
