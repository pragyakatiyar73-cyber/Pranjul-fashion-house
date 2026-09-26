import React, { useState } from 'react';
import { X, Gift, Sparkles, Check, MessageCircle, ArrowRight, ShieldCheck, Ticket } from 'lucide-react';
import { storeInfo } from '../data/mockData';

export default function ScratchCouponModal({ isOpen, onClose, onApplyCoupon }) {
  if (!isOpen) return null;

  const [phone, setPhone] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);
  const [unlockedCode, setUnlockedCode] = useState('CHAUBEPUR100');

  const handleReveal = (e) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert('Please enter valid 10-digit WhatsApp mobile number!');
      return;
    }
    setIsRevealed(true);
  };

  const handleUseVoucher = () => {
    onApplyCoupon(unlockedCode);
    const text = `Hello Pranjul Fashion House (Chaubepur)! I unlocked the website lucky voucher code *${unlockedCode}* with mobile number ${phone}.\nPlease apply this to my order!`;
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative border border-amber-500/40 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-red-950 via-purple-900 to-amber-950 text-white p-6 relative text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 bg-amber-400 text-black rounded-2xl p-2 flex items-center justify-center shadow-lg mx-auto mb-2">
            <Gift className="w-8 h-8" />
          </div>

          <span className="bg-amber-400/20 text-amber-300 text-[11px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider">
            Chaubepur Lucky Voucher
          </span>
          <h3 className="text-xl font-black text-white mt-1 font-serif">
            Festival Scratch & Win Reward!
          </h3>
          <p className="text-xs text-amber-100 mt-1">
            Unlock exclusive ₹100 Instant Discount voucher for Pranjul Fashion House!
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {!isRevealed ? (
            <form onSubmit={handleReveal} className="space-y-4">
              <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 text-center">
                <Ticket className="w-8 h-8 text-amber-600 mx-auto mb-1 animate-bounce" />
                <p className="text-xs font-extrabold text-amber-950">
                  Enter your WhatsApp mobile number to reveal your secret festive discount code:
                </p>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  WhatsApp Mobile Number:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:outline-none font-bold tracking-wider"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-black font-black py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-purple-900" /> REVEAL MY FESTIVE COUPON
              </button>

              <p className="text-[10px] text-gray-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-green-500" /> Pranjul Fashion House Chaubepur Lead Lock
              </p>
            </form>
          ) : (
            <div className="text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-black p-4 rounded-2xl shadow-inner border-2 border-dashed border-black/30">
                <span className="text-xs font-black uppercase tracking-widest block text-black/70">Your Unlocked Voucher</span>
                <div className="text-2xl font-black tracking-widest my-1">{unlockedCode}</div>
                <span className="text-xs font-extrabold bg-black text-amber-300 px-3 py-0.5 rounded-full inline-block">
                  FLAT ₹100 EXTRA DISCOUNT
                </span>
              </div>

              <p className="text-xs font-bold text-gray-700">
                🎉 Congratulations! Code applied to your cart & saved for WhatsApp checkout.
              </p>

              <button
                onClick={handleUseVoucher}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                CLAIM DISCOUNT ON WHATSAPP <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
