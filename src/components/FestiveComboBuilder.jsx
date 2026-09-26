import React, { useState } from 'react';
import { Gift, Plus, Check, MessageCircle, Sparkles, ShieldCheck, ArrowRight, RefreshCw } from 'lucide-react';
import { initialProducts } from '../data/mockData';

export default function FestiveComboBuilder({ onOpenWhatsAppModal }) {
  const womenItems = initialProducts.filter(p => p.gender === 'Women');
  const menItems = initialProducts.filter(p => p.gender === 'Men');
  const kidsItems = initialProducts.filter(p => p.gender === 'Boys' || p.gender === 'Girls' || p.gender === 'Kids');

  const [selectedWomen, setSelectedWomen] = useState(womenItems[0]);
  const [selectedMen, setSelectedMen] = useState(menItems[0]);
  const [selectedKids, setSelectedKids] = useState(kidsItems[0]);

  const rawTotal = selectedWomen.price + selectedMen.price + selectedKids.price;
  const comboDiscount = 500; // Extra ₹500 discount for buying family combo
  const finalComboPrice = rawTotal - comboDiscount;
  const totalMRP = selectedWomen.original_mrp + selectedMen.original_mrp + selectedKids.original_mrp;
  const totalCustomerSavings = totalMRP - finalComboPrice;

  const handleOrderComboWhatsApp = () => {
    const text = `🎉 *FAMILY FESTIVE COMBO ORDER (PRANJUL FASHION HOUSE)* 🎉\n` +
      `-------------------------------------------\n` +
      `1. *Women:* ${selectedWomen.title} (₹${selectedWomen.price})\n` +
      `2. *Men:* ${selectedMen.title} (₹${selectedMen.price})\n` +
      `3. *Kids:* ${selectedKids.title} (₹${selectedKids.price})\n` +
      `-------------------------------------------\n` +
      `💰 Total Original MRP: ₹${totalMRP}\n` +
      `🎁 Special Family Combo Price: *₹${finalComboPrice}* (Saved ₹${totalCustomerSavings}!)\n` +
      `-------------------------------------------\n` +
      `Please confirm stock for Chaubepur store pickup / home delivery!`;

    const url = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-amber-950 text-white rounded-2xl p-5 sm:p-7 shadow-xl border-2 border-amber-400/40 relative overflow-hidden">
        
        {/* Glow Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-black text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                👑 Owner Profit Feature
              </span>
              <span className="text-xs text-amber-200 font-medium">Increases Store Sales & Customer Savings</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1 font-serif flex items-center gap-2">
              <Gift className="w-6 h-6 text-amber-400 shrink-0" />
              Build Family Festival Combo (Save Extra ₹500!)
            </h3>
            <p className="text-xs text-gray-300 mt-0.5">
              Pick 1 Women + 1 Men + 1 Kids Outfit to unlock Chaubepur Wholesale Package Discount!
            </p>
          </div>

          <div className="bg-amber-400/10 border border-amber-400/40 rounded-xl px-4 py-2 text-right">
            <span className="text-[10px] text-amber-300 font-extrabold uppercase tracking-wider block">Combo Package Price</span>
            <div className="text-2xl font-black text-amber-300">₹{finalComboPrice}</div>
            <span className="text-[10px] text-green-400 font-bold block">Total Savings: ₹{totalCustomerSavings}</span>
          </div>
        </div>

        {/* 3 Step Picker Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          
          {/* Step 1: Women Selection */}
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-black text-pink-300 uppercase tracking-wider">Step 1: Women Outfit</span>
                <span className="text-xs font-bold text-amber-300">₹{selectedWomen.price}</span>
              </div>
              <img src={selectedWomen.images[0]} alt="" className="w-full h-40 object-cover object-top rounded-lg mb-3 border border-white/20" />
              <select
                value={selectedWomen.id}
                onChange={(e) => setSelectedWomen(womenItems.find(p => p.id === e.target.value))}
                className="w-full bg-slate-900 text-white text-xs font-bold p-2 rounded-lg border border-amber-400/40 focus:outline-none"
              >
                {womenItems.map(item => (
                  <option key={item.id} value={item.id}>{item.title} - ₹{item.price}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 2: Men Selection */}
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-black text-blue-300 uppercase tracking-wider">Step 2: Men Outfit</span>
                <span className="text-xs font-bold text-amber-300">₹{selectedMen.price}</span>
              </div>
              <img src={selectedMen.images[0]} alt="" className="w-full h-40 object-cover object-top rounded-lg mb-3 border border-white/20" />
              <select
                value={selectedMen.id}
                onChange={(e) => setSelectedMen(menItems.find(p => p.id === e.target.value))}
                className="w-full bg-slate-900 text-white text-xs font-bold p-2 rounded-lg border border-amber-400/40 focus:outline-none"
              >
                {menItems.map(item => (
                  <option key={item.id} value={item.id}>{item.title} - ₹{item.price}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 3: Kids Selection */}
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-black text-green-300 uppercase tracking-wider">Step 3: Kids Outfit</span>
                <span className="text-xs font-bold text-amber-300">₹{selectedKids.price}</span>
              </div>
              <img src={selectedKids.images[0]} alt="" className="w-full h-40 object-cover object-top rounded-lg mb-3 border border-white/20" />
              <select
                value={selectedKids.id}
                onChange={(e) => setSelectedKids(kidsItems.find(p => p.id === e.target.value))}
                className="w-full bg-slate-900 text-white text-xs font-bold p-2 rounded-lg border border-amber-400/40 focus:outline-none"
              >
                {kidsItems.map(item => (
                  <option key={item.id} value={item.id}>{item.title} - ₹{item.price}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Combo Order Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-black/40 p-4 rounded-xl border border-amber-400/30">
          <div className="text-xs text-gray-300 space-y-0.5">
            <p className="flex items-center gap-1.5 font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
              Instant Family Combo Package discount applied!
            </p>
            <p>Original Individual Prices: ₹{rawTotal} → <strong>Combo Offer: ₹{finalComboPrice}</strong></p>
          </div>

          <button
            onClick={handleOrderComboWhatsApp}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-black px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 text-sm cursor-pointer transform hover:-translate-y-0.5 shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            Order Family Combo on WhatsApp <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
