'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Package,
  Calendar,
  MessageSquare,
  Settings,
  Star,
  Plus,
  Trash2,
  Edit,
  CheckCircle,
  XCircle,
  LogOut,
  Flower2,
  TrendingUp,
  Tag
} from 'lucide-react';
import { initialProducts, initialReviews, initialStoreSettings } from '../../../data/demoData';
import { Product, Inquiry, ReserveRequest, StoreSettings } from '../../../types';
import { formatPrice } from '../../../lib/utils';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'products' | 'inquiries' | 'reserve' | 'reviews' | 'settings'>('products');

  // Local state management
  const [productsList, setProductsList] = useState<Product[]>(initialProducts);
  const [inquiriesList, setInquiriesList] = useState<Inquiry[]>([
    {
      _id: 'inq1',
      name: 'Radhika Sharma',
      phone: '9876543210',
      productName: 'Pink Cotton Suit Set',
      message: 'Looking for size XL availability for this week.',
      createdAt: new Date().toISOString().split('T')[0],
      status: 'New'
    },
    {
      _id: 'inq2',
      name: 'Meena Srivastava',
      phone: '9876512345',
      productName: 'Designer Sky Blue Silk Saree',
      message: 'Is the unstitched blouse piece pure silk?',
      createdAt: new Date().toISOString().split('T')[0],
      status: 'Contacted'
    }
  ]);

  const [reserveList, setReserveList] = useState<ReserveRequest[]>([
    {
      _id: 'res1',
      name: 'Sunita Verma',
      phone: '9988776655',
      productName: 'Royal Navy Blue Party Wear Lehenga',
      preferredDate: '2026-03-25',
      message: 'Will visit with my daughter around 4:00 PM.',
      createdAt: new Date().toISOString().split('T')[0],
      status: 'Pending'
    }
  ]);

  const [storeSettings, setStoreSettings] = useState<StoreSettings>(initialStoreSettings);

  // Form states
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Suits',
    price: 1499,
    originalPrice: 1999,
    description: '',
    fabric: 'Pure Cotton',
    colour: 'Pink',
    sizes: ['M', 'L', 'XL'],
    occasion: 'Casual',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=800'
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('pranjul_admin_auth');
      if (auth !== 'true') {
        router.push('/admin/login');
      } else {
        setAuthenticated(true);
      }
    }
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('pranjul_admin_auth');
    }
    router.push('/admin/login');
  };

  const toggleStock = (id: string) => {
    setProductsList(prev =>
      prev.map(p => (p.id === id || p._id === id ? { ...p, inStock: !p.inStock } : p))
    );
  };

  const deleteProduct = (id: string) => {
    setProductsList(prev => prev.filter(p => p.id !== id && p._id !== id));
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Product = {
      _id: `p_${Date.now()}`,
      id: `p_${Date.now()}`,
      name: newProduct.name,
      slug: newProduct.name.toLowerCase().replace(/\s+/g, '-'),
      category: newProduct.category,
      price: Number(newProduct.price),
      originalPrice: Number(newProduct.originalPrice),
      description: newProduct.description,
      fabric: newProduct.fabric,
      colour: newProduct.colour,
      sizes: newProduct.sizes,
      occasion: newProduct.occasion,
      images: [newProduct.image],
      inStock: true,
      isNewArrival: true,
      isTrending: true
    };
    setProductsList([created, ...productsList]);
    setShowAddProductModal(false);
    setNewProduct({
      name: '',
      category: 'Suits',
      price: 1499,
      originalPrice: 1999,
      description: '',
      fabric: 'Pure Cotton',
      colour: 'Pink',
      sizes: ['M', 'L', 'XL'],
      occasion: 'Casual',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=800'
    });
  };

  if (!authenticated) {
    return <div className="p-8 text-center text-xs">Authenticating...</div>;
  }

  const inStockCount = productsList.filter(p => p.inStock).length;
  const outOfStockCount = productsList.length - inStockCount;
  const newArrivalsCount = productsList.filter(p => p.isNewArrival).length;

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto space-y-8">
      
      {/* Admin Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#5A1827] text-white p-6 rounded-3xl shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#5A1827] flex items-center justify-center font-bold">
            <Flower2 className="w-7 h-7" />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-xs text-[#F7D6D0]">Pranjul Fashion House • Chaubepur Store Management</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
        >
          <LogOut className="w-4 h-4" /> Log Out
        </button>
      </div>

      {/* Overview Analytics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-[#EADED2] shadow-xs">
          <span className="text-[11px] font-bold text-[#8C7A77] uppercase">Total Products</span>
          <p className="text-2xl font-bold text-[#5A1827] mt-1">{productsList.length}</p>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-[#EADED2] shadow-xs">
          <span className="text-[11px] font-bold text-[#27AE60] uppercase">In Stock</span>
          <p className="text-2xl font-bold text-[#27AE60] mt-1">{inStockCount}</p>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-[#EADED2] shadow-xs">
          <span className="text-[11px] font-bold text-[#C0392B] uppercase">Out of Stock</span>
          <p className="text-2xl font-bold text-[#C0392B] mt-1">{outOfStockCount}</p>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-[#EADED2] shadow-xs">
          <span className="text-[11px] font-bold text-[#5A1827] uppercase">New Arrivals</span>
          <p className="text-2xl font-bold text-[#5A1827] mt-1">{newArrivalsCount}</p>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-[#EADED2] shadow-xs">
          <span className="text-[11px] font-bold text-[#D35400] uppercase">Inquiries</span>
          <p className="text-2xl font-bold text-[#D35400] mt-1">{inquiriesList.length}</p>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-[#EADED2] shadow-xs">
          <span className="text-[11px] font-bold text-[#2980B9] uppercase">Reservations</span>
          <p className="text-2xl font-bold text-[#2980B9] mt-1">{reserveList.length}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#EADED2] overflow-x-auto pb-1">
        {[
          { id: 'products', label: 'Products Management', icon: Package },
          { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
          { id: 'reserve', label: 'Store Reservations', icon: Calendar },
          { id: 'reviews', label: 'Customer Reviews', icon: Star },
          { id: 'settings', label: 'Store Settings', icon: Settings }
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#5A1827] text-white'
                  : 'bg-white text-[#524542] hover:bg-[#FAF7F2] border border-[#EADED2]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Products Tab Content */}
      {activeTab === 'products' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-[#5A1827]">Catalogue Products</h2>
            <button
              onClick={() => setShowAddProductModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#5A1827] text-white text-xs font-semibold hover:bg-[#42101B]"
            >
              <Plus className="w-4 h-4" /> Add New Product
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-[#EADED2] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF7F2] border-b border-[#EADED2] text-[#8C7A77] font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-3">Product</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Availability</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F2E8DF]">
                  {productsList.map(p => (
                    <tr key={p.id || p._id} className="hover:bg-[#FAF7F2]/60">
                      <td className="p-3 flex items-center gap-3">
                        <img src={p.images[0]} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                        <div>
                          <span className="font-bold text-[#231815] block">{p.name}</span>
                          <span className="text-[10px] text-[#8C7A77]">{p.fabric}</span>
                        </div>
                      </td>
                      <td className="p-3 font-semibold text-[#5A1827]">{p.category}</td>
                      <td className="p-3 font-bold text-[#231815]">{formatPrice(p.price)}</td>
                      <td className="p-3">
                        <button
                          onClick={() => toggleStock(p.id || p._id)}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            p.inStock ? 'bg-[#E8F8F0] text-[#27AE60]' : 'bg-[#FDEDEC] text-[#C0392B]'
                          }`}
                        >
                          {p.inStock ? 'In Stock' : 'Out of Stock'}
                        </button>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => deleteProduct(p.id || p._id)}
                          className="p-1.5 rounded-lg text-[#C0392B] hover:bg-[#FDEDEC]"
                          title="Delete product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Inquiries Tab */}
      {activeTab === 'inquiries' && (
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-[#5A1827]">Customer Inquiries</h2>
          <div className="space-y-3">
            {inquiriesList.map(inq => (
              <div key={inq._id} className="p-4 rounded-2xl bg-white border border-[#EADED2] shadow-xs flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#231815]">{inq.name}</span>
                    <span className="text-xs text-[#5A1827] font-mono">({inq.phone})</span>
                  </div>
                  <p className="text-xs text-[#665B58]">Product Interest: <span className="font-semibold text-[#231815]">{inq.productName}</span></p>
                  <p className="text-xs text-[#524542] italic">&ldquo;{inq.message}&rdquo;</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#F7D6D0] text-[#5A1827] font-bold">{inq.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reserve Tab */}
      {activeTab === 'reserve' && (
        <div className="space-y-4">
          <h2 className="font-serif text-xl font-bold text-[#5A1827]">Store Visit Reservations</h2>
          <div className="space-y-3">
            {reserveList.map(res => (
              <div key={res._id} className="p-4 rounded-2xl bg-white border border-[#EADED2] shadow-xs flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#231815]">{res.name}</span>
                    <span className="text-xs text-[#5A1827] font-mono">({res.phone})</span>
                  </div>
                  <p className="text-xs text-[#665B58]">Reserved: <span className="font-semibold text-[#231815]">{res.productName}</span></p>
                  <p className="text-xs text-[#2980B9] font-bold">Preferred Visit Date: {res.preferredDate}</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-[#E8F8F0] text-[#27AE60] font-bold h-fit">{res.status}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Store Settings Tab */}
      {activeTab === 'settings' && (
        <div className="bg-white p-6 rounded-3xl border border-[#EADED2] shadow-xs max-w-xl space-y-4">
          <h2 className="font-serif text-xl font-bold text-[#5A1827]">Boutique Settings</h2>
          <div>
            <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">WhatsApp Number (e.g. 919876543210)</label>
            <input
              type="text"
              value={storeSettings.whatsappNumber}
              onChange={(e) => setStoreSettings({ ...storeSettings, whatsappNumber: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D9C4B5] text-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">Shop Address</label>
            <input
              type="text"
              value={storeSettings.address}
              onChange={(e) => setStoreSettings({ ...storeSettings, address: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D9C4B5] text-xs"
            />
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-[#5A1827] text-white text-xs font-semibold">
            Save Settings
          </button>
        </div>
      )}

      {/* Add Product Modal */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#5A1827]">Add New Product to Catalogue</h3>
            <form onSubmit={handleAddProduct} className="space-y-3">
              <input
                type="text"
                placeholder="Product Name"
                required
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D9C4B5] text-xs"
              />
              <div className="grid grid-cols-2 gap-3">
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  className="px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D9C4B5] text-xs"
                >
                  <option value="Sarees">Sarees</option>
                  <option value="Suits">Suits</option>
                  <option value="Kurtis">Kurtis</option>
                  <option value="Dress Material">Dress Material</option>
                  <option value="Lehengas">Lehengas</option>
                  <option value="Western Dresses">Western Dresses</option>
                  <option value="Formal Dresses">Formal Dresses</option>
                  <option value="Party Wear">Party Wear</option>
                  <option value="Wedding Collection">Wedding Collection</option>
                </select>
                <input
                  type="number"
                  placeholder="Price (₹)"
                  required
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                  className="px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D9C4B5] text-xs"
                />
              </div>
              <textarea
                placeholder="Description"
                required
                rows={2}
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D9C4B5] text-xs"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddProductModal(false)}
                  className="px-4 py-2 rounded-xl border border-[#D9C4B5] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#5A1827] text-white text-xs font-semibold"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
