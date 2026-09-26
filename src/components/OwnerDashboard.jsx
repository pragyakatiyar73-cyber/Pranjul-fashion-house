import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Package, 
  Users, 
  ShoppingBag, 
  Plus, 
  Edit3, 
  MessageCircle, 
  Award, 
  Flame, 
  ShieldCheck,
  Percent
} from 'lucide-react';
import { mockOrdersHistory } from '../data/mockData';

export default function OwnerDashboard({ products, setProducts, onAddNewProduct }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'inventory', 'orders'

  // Calculations
  const totalStockItems = products.reduce((acc, p) => acc + p.stock_count, 0);
  const totalSellingValue = products.reduce((acc, p) => acc + (p.price * p.stock_count), 0);
  const totalWholesaleCost = products.reduce((acc, p) => acc + (p.wholesale_cost * p.stock_count), 0);
  const projectedNetProfit = totalSellingValue - totalWholesaleCost;
  const netMarginPercent = ((projectedNetProfit / totalSellingValue) * 100).toFixed(1);

  const toggleFestivalTag = (id) => {
    setProducts(products.map(p => {
      if (p.id === id) {
        return { ...p, is_festival_deal: !p.is_festival_deal };
      }
      return p;
    }));
  };

  const toggleNewArrival = (id) => {
    setProducts(products.map(p => {
      if (p.id === id) {
        return { ...p, is_new_arrival: !p.is_new_arrival };
      }
      return p;
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6">
      
      {/* Dashboard Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-amber-500/40 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-black text-xs font-black px-2.5 py-0.5 rounded uppercase">
              🔑 Owner Panel
            </span>
            <span className="text-xs text-amber-200">Pranjul Fashion House (Chaubepur Market)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-serif">
            Store Profit & Collection Management Dashboard
          </h2>
          <p className="text-xs text-gray-300 mt-1">
            Real-time catalog analytics, stock profit margins & WhatsApp order lead tracking.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-xl border border-white/10">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'overview' ? 'bg-amber-400 text-black shadow' : 'text-gray-300 hover:text-white'
            }`}
          >
            Profit Overview
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'inventory' ? 'bg-amber-400 text-black shadow' : 'text-gray-300 hover:text-white'
            }`}
          >
            Manage Catalog ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'orders' ? 'bg-amber-400 text-black shadow' : 'text-gray-300 hover:text-white'
            }`}
          >
            WhatsApp Leads ({mockOrdersHistory.length})
          </button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        
        {/* Card 1: Projected Sales Value */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Catalog Sales Value</span>
            <h3 className="text-2xl font-black text-gray-900 mt-1">
              ₹{totalSellingValue.toLocaleString('en-IN')}
            </h3>
            <span className="text-[11px] font-semibold text-green-600 mt-0.5 block">
              {totalStockItems} Items in Stock
            </span>
          </div>
          <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
            <ShoppingBag className="w-6 h-6" />
          </div>
        </div>

        {/* Card 2: Wholesale Owner Cost */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Wholesale Stock Cost</span>
            <h3 className="text-2xl font-black text-gray-900 mt-1">
              ₹{totalWholesaleCost.toLocaleString('en-IN')}
            </h3>
            <span className="text-[11px] font-semibold text-gray-500 mt-0.5 block">
              Direct Manufacturer Cost
            </span>
          </div>
          <div className="bg-amber-50 p-3 rounded-xl text-amber-600">
            <Package className="w-6 h-6" />
          </div>
        </div>

        {/* Card 3: Projected Net Profit */}
        <div className="bg-gradient-to-br from-green-900 to-emerald-950 text-white p-5 rounded-2xl shadow-md border border-green-500/30 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-green-300 uppercase tracking-wide">Projected Net Profit</span>
            <h3 className="text-2xl font-black text-amber-300 mt-1">
              ₹{projectedNetProfit.toLocaleString('en-IN')}
            </h3>
            <span className="text-[11px] font-bold text-green-200 mt-0.5 block flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-yellow-300" /> {netMarginPercent}% Net Profit Margin
            </span>
          </div>
          <div className="bg-green-800/60 p-3 rounded-xl text-green-300">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>

        {/* Card 4: WhatsApp Leads */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">WhatsApp Orders</span>
            <h3 className="text-2xl font-black text-green-700 mt-1">
              {mockOrdersHistory.length} Leads
            </h3>
            <span className="text-[11px] font-semibold text-green-600 mt-0.5 block">
              Direct Customer Inquiries
            </span>
          </div>
          <div className="bg-green-50 p-3 rounded-xl text-green-600">
            <MessageCircle className="w-6 h-6 fill-current" />
          </div>
        </div>

      </div>

      {/* Tab 1: Overview & Insights */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="font-extrabold text-base text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" /> Top Demand Categories in Chaubepur Market
            </h3>

            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold text-purple-900">Women's Banarasi Sarees & Bridal Lehengas</span>
                  <span className="text-xs font-extrabold bg-purple-200 text-purple-900 px-2 py-0.5 rounded">High Profit Margin (54%)</span>
                </div>
                <p className="text-xs text-gray-600">
                  Highest profit per unit. Recommended to feature on homepage banner during Navratri, Diwali & Wedding season.
                </p>
              </div>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold text-amber-900">Men's Royal Kurtas & Festive Suits</span>
                  <span className="text-xs font-extrabold bg-amber-200 text-amber-900 px-2 py-0.5 rounded">Fast Turnover (48% Margin)</span>
                </div>
                <p className="text-xs text-gray-600">
                  High local demand in Chaubepur. Best seller in 'Buy 2 Get 1' festival offer.
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold text-green-900">Boys & Girls Festive Wear</span>
                  <span className="text-xs font-extrabold bg-green-200 text-green-900 px-2 py-0.5 rounded">High Repeat Buyers</span>
                </div>
                <p className="text-xs text-gray-600">
                  Parents in Chaubepur prefer buying kids' combo sets via WhatsApp for fast local pickup.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Business Tips */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 flex flex-col justify-between">
            <div>
              <h3 className="font-extrabold text-base text-amber-950 mb-3 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-600" /> Owner Profit Boost Strategy
              </h3>

              <ul className="space-y-3 text-xs text-gray-800 font-medium">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Run Festival Coupon Offers:</strong> Activate 'PRANJUL50' on high-margin saree stock to clear stock quickly before festival rush.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Grow WhatsApp Channel:</strong> Encourage every customer in Chaubepur store to scan QR & join Channel for zero-cost daily marketing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Delivery Friction:</strong> Offering free local store pickup in Chaubepur increases order conversions by 35%.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 p-3 bg-white rounded-xl border border-amber-300 text-center">
              <span className="text-xs font-bold text-gray-600">Current Store Status:</span>
              <p className="text-sm font-extrabold text-green-700">🟢 Live & Accepting WhatsApp Orders in Chaubepur</p>
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: Catalog Management */}
      {activeTab === 'inventory' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-extrabold text-base text-gray-900">
              Manage Product Discounts & Tag Highlights
            </h3>
            <span className="text-xs text-gray-500">
              Click buttons to toggle 'Festival Deal' or 'New Arrival' status in real-time
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-100 text-gray-700 uppercase font-bold border-b">
                <tr>
                  <th className="p-3">Product Title</th>
                  <th className="p-3">Demographic</th>
                  <th className="p-3">Selling Price</th>
                  <th className="p-3">Wholesale Cost</th>
                  <th className="p-3">Profit / Unit</th>
                  <th className="p-3">Stock</th>
                  <th className="p-3 text-center">Festival Deal Tag</th>
                  <th className="p-3 text-center">New Arrival Tag</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((p) => {
                  const unitProfit = p.price - p.wholesale_cost;
                  return (
                    <tr key={p.id} className="hover:bg-gray-50">
                      <td className="p-3 font-semibold text-gray-900 max-w-xs truncate">
                        {p.title}
                      </td>
                      <td className="p-3 text-purple-700 font-bold">{p.gender}</td>
                      <td className="p-3 font-extrabold text-gray-900">₹{p.price}</td>
                      <td className="p-3 text-gray-500">₹{p.wholesale_cost}</td>
                      <td className="p-3 font-bold text-green-600">+₹{unitProfit}</td>
                      <td className="p-3 font-bold">{p.stock_count} pcs</td>

                      <td className="p-3 text-center">
                        <button
                          onClick={() => toggleFestivalTag(p.id)}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold transition ${
                            p.is_festival_deal
                              ? 'bg-red-600 text-white shadow'
                              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                          }`}
                        >
                          {p.is_festival_deal ? '🔥 Festival Deal' : '+ Add Tag'}
                        </button>
                      </td>

                      <td className="p-3 text-center">
                        <button
                          onClick={() => toggleNewArrival(p.id)}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold transition ${
                            p.is_new_arrival
                              ? 'bg-purple-600 text-white shadow'
                              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                          }`}
                        >
                          {p.is_new_arrival ? '✨ New Arrival' : '+ Add Tag'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: WhatsApp Leads */}
      {activeTab === 'orders' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h3 className="font-extrabold text-base text-gray-900 mb-4">
            Recent Customer Orders & WhatsApp Lead Inquiries
          </h3>

          <div className="space-y-3">
            {mockOrdersHistory.map((ord) => (
              <div key={ord.id} className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-gray-900 text-sm">{ord.customer_name}</span>
                    <span className="text-xs bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded">
                      {ord.customer_phone}
                    </span>
                    <span className="text-xs text-gray-400">({ord.date})</span>
                  </div>

                  <p className="text-xs text-gray-600 mt-1">
                    <strong>Locality:</strong> {ord.locality}
                  </p>

                  <div className="text-xs text-purple-900 font-medium mt-1">
                    <strong>Ordered Items:</strong> {ord.items.join(', ')}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div>
                    <span className="text-xs text-gray-500 block">Total Amount</span>
                    <span className="text-lg font-black text-gray-900">₹{ord.total_amount}</span>
                  </div>

                  <div className="bg-green-50 p-2 rounded-lg border border-green-200">
                    <span className="text-[10px] text-green-700 font-bold block">Owner Profit</span>
                    <span className="text-sm font-black text-green-700">+₹{ord.owner_profit}</span>
                  </div>

                  <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                    {ord.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
