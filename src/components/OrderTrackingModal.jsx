import React, { useState } from 'react';
import { X, Search, PackageCheck, Truck, CheckCircle2, Clock, MapPin } from 'lucide-react';

export default function OrderTrackingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [searchQuery, setSearchQuery] = useState('');
  const [trackedOrder, setTrackedOrder] = useState(null);
  const [searched, setSearched] = useState(false);

  const mockOrders = {
    'PFH-1008': {
      id: 'PFH-1008',
      customer: 'Vikram Singh',
      items: ['Pranjul Pure Banarasi Silk Zari Saree (Free Size)'],
      status: 'Delivered',
      date: 'Sep 21, 2026',
      total: 1499,
      steps: [
        { label: 'Order Confirmed', date: 'Sep 21, 10:00 AM', done: true },
        { label: 'Packed at Store', date: 'Sep 21, 11:30 AM', done: true },
        { label: 'Out for Delivery / Pickup', date: 'Sep 21, 02:00 PM', done: true },
        { label: 'Delivered / Collected', date: 'Sep 21, 04:30 PM', done: true }
      ]
    },
    'PFH-1009': {
      id: 'PFH-1009',
      customer: 'Pooja Tiwari',
      items: ['Designer Heavy Embroidered Party Lehenga Choli (M)'],
      status: 'Out for Delivery',
      date: 'Sep 22, 2026',
      total: 3299,
      steps: [
        { label: 'Order Confirmed', date: 'Sep 22, 09:00 AM', done: true },
        { label: 'Packed at Store', date: 'Sep 22, 10:45 AM', done: true },
        { label: 'Out for Delivery in Chaubepur', date: 'Sep 22, 01:15 PM', done: true },
        { label: 'Delivered / Collected', date: 'Expected Today', done: false }
      ]
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    const query = searchQuery.trim().toUpperCase();
    if (mockOrders[query]) {
      setTrackedOrder(mockOrders[query]);
    } else {
      // Fallback demo order
      setTrackedOrder({
        id: query || 'PFH-LIVE',
        customer: 'Valued Customer',
        items: ['Selected Fashion Items'],
        status: 'Processing at Store',
        date: 'Today',
        total: 1299,
        steps: [
          { label: 'Order Confirmed', date: 'Just now', done: true },
          { label: 'Quality Checked & Packed', date: 'In Progress', done: true },
          { label: 'Out for Delivery', date: 'Pending', done: false },
          { label: 'Delivered', date: 'Pending', done: false }
        ]
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl relative border border-amber-500/30 animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-[#70142C] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-amber-300" />
            <h2 className="font-extrabold text-base font-serif">
              Track Your Order Status
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#580E21] rounded-full text-gray-200 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Order ID (e.g. PFH-1008)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-gray-100 border border-gray-300 text-xs font-bold px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#70142C]"
            />
            <button
              type="submit"
              className="bg-[#70142C] hover:bg-[#580E21] text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer flex items-center gap-1"
            >
              <Search className="w-4 h-4" /> Track
            </button>
          </form>

          {/* Quick Demo Buttons */}
          <div className="flex items-center gap-2 text-[10px] text-gray-500 font-semibold">
            <span>Try demo IDs:</span>
            <button
              onClick={() => { setSearchQuery('PFH-1008'); setTrackedOrder(mockOrders['PFH-1008']); setSearched(true); }}
              className="text-[#70142C] hover:underline"
            >
              PFH-1008
            </button>
            <span>|</span>
            <button
              onClick={() => { setSearchQuery('PFH-1009'); setTrackedOrder(mockOrders['PFH-1009']); setSearched(true); }}
              className="text-[#70142C] hover:underline"
            >
              PFH-1009
            </button>
          </div>

          {/* Result Timeline */}
          {searched && trackedOrder && (
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
              
              <div className="bg-[#FAF0F2] p-3 rounded-xl border border-[#F3DBE0] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 font-bold block">Order #{trackedOrder.id}</span>
                  <h4 className="font-extrabold text-xs text-gray-900">{trackedOrder.customer}</h4>
                  <span className="text-[10px] text-gray-600 line-clamp-1">{trackedOrder.items.join(', ')}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-[#70142C] block">₹{trackedOrder.total}</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full inline-block mt-0.5">
                    {trackedOrder.status}
                  </span>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="space-y-3 pl-2 border-l-2 border-[#70142C]/20 ml-2 py-1">
                {trackedOrder.steps.map((step, idx) => (
                  <div key={idx} className="relative pl-5">
                    <span className={`absolute -left-[17px] top-0.5 w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] ${
                      step.done ? 'bg-[#70142C]' : 'bg-gray-300'
                    }`}>
                      {step.done ? '✓' : '•'}
                    </span>
                    <h5 className={`text-xs font-bold ${step.done ? 'text-gray-900' : 'text-gray-400'}`}>
                      {step.label}
                    </h5>
                    <span className="text-[10px] text-gray-500">{step.date}</span>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
