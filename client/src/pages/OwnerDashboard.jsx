import CategoryManagerTab from '../components/CategoryManagerTab';
import {
  Package,
  Plus,
  Edit,
  Trash2,
  CheckCircle2,
  XCircle,
  Tag,
  Sparkles,
  RefreshCw,
  Search,
  Lock,
  LogOut,
  Phone,
  MessageCircle,
  MapPin,
  AlertTriangle,
  Info,
  Calendar,
  Save,
  FolderPlus
} from 'lucide-react';

const OwnerDashboard = ({
  products,
  offers,
  festivals,
  storeSettings,
  onLogout,
  onProductCreated,
  onProductUpdated,
  onProductDeleted,
  onToggleStock,
  onOfferCreated,
  onOfferUpdated,
  onOfferToggleActive,
  onOfferDeleted,
  onFestivalCreated,
  onFestivalToggleActive,
  onFestivalDeleted,
  onSettingsUpdated,
  onReseedDemoData,
}) => {
  const [activeTab, setActiveTab] = useState('products'); // 'overview', 'products', 'offers', 'festivals', 'settings'
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');

  // Product Modal Form State
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    productId: '',
    name: '',
    category: 'Women',
    subcategory: 'Sarees',
    description: '',
    originalPrice: 1500,
    discount: 10,
    images: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    colors: 'Red, Gold',
    sizes: 'S, M, L, XL',
    material: 'Silk Blend',
    stockStatus: 'In Stock',
    isNewArrival: true,
    isTrending: false,
    isFeatured: false,
    festival: '',
  });

  // Delete Confirmation Modal State
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // Offer Modal Form State
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [offerForm, setOfferForm] = useState({
    title: '',
    description: '',
    discount: '20% OFF',
    category: 'All Categories',
    startDate: '01 Oct 2026',
    endDate: '15 Nov 2026',
    active: true,
  });

  // Festival Form State
  const [isFestivalModalOpen, setIsFestivalModalOpen] = useState(false);
  const [festivalForm, setFestivalForm] = useState({
    name: '',
    tagline: 'Festive styles for your celebrations.',
    description: '',
    banner: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    active: true,
    startDate: '01 Oct 2026',
    endDate: '15 Nov 2026',
  });

  // Store Settings Form State
  const [settingsForm, setSettingsForm] = useState({
    storeName: storeSettings?.storeName || 'Pranjul Fashion House',
    tagline: storeSettings?.tagline || 'Style for Every Generation',
    subtagline: storeSettings?.subtagline || 'New Collection • Great Prices • Special Offers',
    location: storeSettings?.location || 'Chaubepur, Kanpur Nagar, Uttar Pradesh - 209203',
    whatsappNumber: storeSettings?.whatsappNumber || '+91 98765 43210',
    phoneNumber: storeSettings?.phoneNumber || '+91 98765 43210',
    openingHours: storeSettings?.openingHours || 'Monday to Sunday: 10:00 AM - 9:00 PM',
  });

  // Compute Overview Metrics
  const totalProductsCount = products.length;
  const inStockCount = products.filter((p) => p.stockStatus === 'In Stock').length;
  const outOfStockCount = products.filter((p) => p.stockStatus === 'Out of Stock').length;
  const newArrivalsCount = products.filter((p) => p.isNewArrival).length;
  const activeOffersCount = offers.filter((o) => o.active).length;
  const activeFestivalsCount = festivals.filter((f) => f.active).length;

  // Filtered product table list
  const filteredProductsTable = products.filter((p) => {
    if (selectedCategoryFilter !== 'All' && p.category !== selectedCategoryFilter) return false;
    if (searchFilter && searchQueryMatches(p, searchFilter)) return false;
    return true;
  });

  function searchQueryMatches(product, query) {
    const q = query.toLowerCase();
    const nameMatch = product.name?.toLowerCase().includes(q);
    const idMatch = product.productId?.toLowerCase().includes(q);
    const subMatch = product.subcategory?.toLowerCase().includes(q);
    return !nameMatch && !idMatch && !subMatch;
  }

  // Open Add/Edit Product Modal
  const openProductModal = (prod = null) => {
    if (prod) {
      setEditingProduct(prod);
      setProductForm({
        productId: prod.productId,
        name: prod.name,
        category: prod.category,
        subcategory: prod.subcategory,
        description: prod.description || '',
        originalPrice: prod.originalPrice,
        discount: prod.discount || 0,
        images: Array.isArray(prod.images) ? prod.images.join(', ') : prod.images || '',
        colors: Array.isArray(prod.colors) ? prod.colors.join(', ') : prod.colors || '',
        sizes: Array.isArray(prod.sizes) ? prod.sizes.join(', ') : prod.sizes || '',
        material: prod.material || '',
        stockStatus: prod.stockStatus,
        isNewArrival: !!prod.isNewArrival,
        isTrending: !!prod.isTrending,
        isFeatured: !!prod.isFeatured,
        festival: prod.festival || '',
      });
    } else {
      setEditingProduct(null);
      setProductForm({
        productId: `PF-W-SAR-${String(products.length + 1).padStart(3, '0')}`,
        name: '',
        category: 'Women',
        subcategory: 'Sarees',
        description: '',
        originalPrice: 1999,
        discount: 10,
        images: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
        colors: 'Red, Gold',
        sizes: 'S, M, L, XL',
        material: 'Silk Blend',
        stockStatus: 'In Stock',
        isNewArrival: true,
        isTrending: false,
        isFeatured: false,
        festival: '',
      });
    }
    setIsProductModalOpen(true);
  };

  // Submit Product Form
  const handleProductSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      onProductUpdated(editingProduct._id, productForm);
    } else {
      onProductCreated(productForm);
    }
    setIsProductModalOpen(false);
  };

  // Submit Settings Form
  const handleSettingsSubmit = (e) => {
    e.preventDefault();
    onSettingsUpdated(settingsForm);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Header & Logout */}
      <div className="bg-gradient-to-r from-slate-900 via-[#701a2b] to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-400" />
            <h1 className="font-serif text-2xl sm:text-3xl font-bold">
              Owner Management Dashboard
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-rose-200">
            Control center for <strong>Pranjul Fashion House</strong> (Chaubepur, Kanpur Nagar). Update inventory, prices, discounts, offers & store info.
          </p>
        </div>

        <button
          onClick={onLogout}
          className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-4 py-2.5 rounded-xl border border-white/20 transition flex items-center gap-2"
        >
          <LogOut className="w-4 h-4 text-amber-400" />
          <span>Exit Dashboard</span>
        </button>
      </div>

      {/* Demo Notice Banner */}
      <div className="bg-amber-50 border border-amber-300 text-amber-900 rounded-2xl p-4 flex items-start gap-3 shadow-2xs">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm space-y-1">
          <strong className="font-bold text-amber-950">Notice to Shop Owner:</strong>
          <p>
            Demo products are currently being used. Replace them with your actual shop inventory or modify prices, stock status, and photos directly below.
          </p>
        </div>
      </div>

      {/* Dashboard Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-rose-100 pb-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
            activeTab === 'overview'
              ? 'bg-[#701a2b] text-white shadow-xs'
              : 'bg-white text-slate-700 hover:bg-rose-50 border border-slate-200'
          }`}
        >
          Overview & Metrics
        </button>
        <button
          onClick={() => setActiveTab('products')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 flex items-center gap-1.5 ${
            activeTab === 'products'
              ? 'bg-[#701a2b] text-white shadow-xs'
              : 'bg-white text-slate-700 hover:bg-rose-50 border border-slate-200'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Products ({products.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('offers')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 flex items-center gap-1.5 ${
            activeTab === 'offers'
              ? 'bg-[#701a2b] text-white shadow-xs'
              : 'bg-white text-slate-700 hover:bg-rose-50 border border-slate-200'
          }`}
        >
          <Tag className="w-4 h-4" />
          <span>Offers & Discounts ({offers.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('festivals')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 flex items-center gap-1.5 ${
            activeTab === 'festivals'
              ? 'bg-[#701a2b] text-white shadow-xs'
              : 'bg-white text-slate-700 hover:bg-rose-50 border border-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Festival Collections ({festivals.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('categories')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 flex items-center gap-1.5 ${
            activeTab === 'categories'
              ? 'bg-[#701a2b] text-white shadow-xs'
              : 'bg-white text-slate-700 hover:bg-rose-50 border border-slate-200'
          }`}
        >
          <FolderPlus className="w-4 h-4 text-amber-300" />
          <span>Category & Taxonomy Manager</span>
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 flex items-center gap-1.5 ${
            activeTab === 'settings'
              ? 'bg-[#701a2b] text-white shadow-xs'
              : 'bg-white text-slate-700 hover:bg-rose-50 border border-slate-200'
          }`}
        >
          <Phone className="w-4 h-4" />
          <span>Store Settings & Contact</span>
        </button>
      </div>

      {/* CATEGORY & TAXONOMY MANAGER TAB */}
      {activeTab === 'categories' && (
        <CategoryManagerTab products={products} onRefreshData={onReseedDemoData} />
      )}

      {/* OVERVIEW TAB */}
      {(activeTab === 'overview' || activeTab === 'products') && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-2xs text-center space-y-1">
            <span className="text-xs text-slate-500 font-semibold block uppercase">Total Products</span>
            <span className="text-2xl font-bold text-[#701a2b]">{totalProductsCount}</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-2xs text-center space-y-1">
            <span className="text-xs text-emerald-700 font-semibold block uppercase">In Stock</span>
            <span className="text-2xl font-bold text-emerald-700">{inStockCount}</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-rose-200 shadow-2xs text-center space-y-1">
            <span className="text-xs text-rose-700 font-semibold block uppercase">Out of Stock</span>
            <span className="text-2xl font-bold text-rose-700">{outOfStockCount}</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-2xs text-center space-y-1">
            <span className="text-xs text-amber-700 font-semibold block uppercase">New Arrivals</span>
            <span className="text-2xl font-bold text-amber-700">{newArrivalsCount}</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-purple-100 shadow-2xs text-center space-y-1">
            <span className="text-xs text-purple-700 font-semibold block uppercase">Active Offers</span>
            <span className="text-2xl font-bold text-purple-700">{activeOffersCount}</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-2xs text-center space-y-1">
            <span className="text-xs text-blue-700 font-semibold block uppercase">Active Festivals</span>
            <span className="text-2xl font-bold text-blue-700">{activeFestivalsCount}</span>
          </div>
        </div>
      )}

      {/* PRODUCTS TAB */}
      {activeTab === 'products' && (
        <div className="space-y-6">
          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-rose-100 shadow-2xs">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search products by ID, name..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#701a2b]"
                />
              </div>

              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-xs py-2 px-3 rounded-xl font-semibold"
              >
                <option value="All">All Categories</option>
                <option value="Women">Women</option>
                <option value="Men">Men</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            <button
              onClick={() => openProductModal()}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Product</span>
            </button>
          </div>

          {/* Product Table */}
          <div className="bg-white rounded-2xl border border-rose-100 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-rose-50/70 border-b border-rose-100 text-slate-700 font-bold uppercase tracking-wider">
                    <th className="p-3">Product</th>
                    <th className="p-3">ID & Category</th>
                    <th className="p-3">Price & Discount</th>
                    <th className="p-3">Stock Status</th>
                    <th className="p-3 text-center">Tags</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredProductsTable.slice(0, 50).map((prod) => (
                    <tr key={prod._id || prod.productId} className="hover:bg-rose-50/30 transition">
                      {/* Name & Photo */}
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={prod.images?.[0] || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=100&q=80'}
                            alt=""
                            className="w-10 h-12 object-cover rounded-lg border border-slate-200 shrink-0"
                          />
                          <div>
                            <span className="font-bold text-slate-900 block line-clamp-1">{prod.name}</span>
                            <span className="text-[10px] text-slate-500">Fabric: {prod.material || 'N/A'}</span>
                          </div>
                        </div>
                      </td>

                      {/* ID & Category */}
                      <td className="p-3">
                        <span className="font-mono text-[11px] font-semibold text-rose-900 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200 block w-fit">
                          {prod.productId}
                        </span>
                        <span className="text-slate-500 text-[11px] mt-0.5 block">
                          {prod.category} • {prod.subcategory}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="p-3">
                        <div className="font-bold text-slate-900">₹{prod.price?.toLocaleString('en-IN')}</div>
                        {prod.discount > 0 && (
                          <span className="text-[10px] text-slate-400 line-through">
                            ₹{prod.originalPrice?.toLocaleString('en-IN')} ({prod.discount}% off)
                          </span>
                        )}
                      </td>

                      {/* Stock Toggle Button */}
                      <td className="p-3">
                        <button
                          onClick={() => onToggleStock(prod._id)}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-bold text-[11px] transition shadow-2xs ${
                            prod.stockStatus === 'In Stock'
                              ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-300'
                              : 'bg-rose-100 text-rose-800 hover:bg-rose-200 border border-rose-300'
                          }`}
                          title="Click to toggle stock status"
                        >
                          {prod.stockStatus === 'In Stock' ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          )}
                          <span>{prod.stockStatus}</span>
                        </button>
                      </td>

                      {/* Badges */}
                      <td className="p-3 text-center">
                        <div className="flex flex-wrap items-center justify-center gap-1">
                          {prod.isNewArrival && (
                            <span className="bg-rose-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">
                              NEW
                            </span>
                          )}
                          {prod.isTrending && (
                            <span className="bg-amber-500 text-slate-950 text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">
                              TRENDING
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => openProductModal(prod)}
                            className="p-1.5 text-slate-600 hover:text-rose-900 hover:bg-rose-50 rounded-lg transition"
                            title="Edit product"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(prod._id)}
                            className="p-1.5 text-rose-600 hover:text-rose-900 hover:bg-rose-50 rounded-lg transition"
                            title="Delete product"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* OFFERS TAB */}
      {activeTab === 'offers' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-rose-100 shadow-2xs">
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-lg">Manage Store Offers</h3>
              <p className="text-xs text-slate-500">Create promotional discount cards shown on customer Offers page.</p>
            </div>
            <button
              onClick={() => setIsOfferModalOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Offer</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {offers.map((off) => (
              <div key={off._id || off.title} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-rose-50 text-[#701a2b] font-bold text-xs px-2.5 py-0.5 rounded-full uppercase">
                      {off.category}
                    </span>
                    <button
                      onClick={() => onOfferToggleActive(off._id)}
                      className={`text-xs font-bold px-2.5 py-1 rounded-full border transition ${
                        off.active
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : 'bg-slate-100 text-slate-600 border-slate-300'
                      }`}
                    >
                      {off.active ? 'Active' : 'Inactive'}
                    </button>
                  </div>
                  <h4 className="font-serif font-bold text-lg text-slate-900">{off.title}</h4>
                  <p className="text-xs text-slate-600 mt-1">{off.description}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                  <span className="font-bold text-amber-700">{off.discount}</span>
                  <button
                    onClick={() => onOfferDeleted(off._id)}
                    className="text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FESTIVALS TAB */}
      {activeTab === 'festivals' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-rose-100 shadow-2xs">
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-lg">Festival Collections Manager</h3>
              <p className="text-xs text-slate-500">Activate festival themes (Diwali, Navratri, Eid, Wedding Season, etc.).</p>
            </div>
            <button
              onClick={() => setIsFestivalModalOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add Festival Collection</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {festivals.map((fest) => (
              <div key={fest._id || fest.name} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between">
                <div className="h-32 relative bg-slate-900">
                  <img src={fest.banner} alt={fest.name} className="w-full h-full object-cover opacity-70" />
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => onFestivalToggleActive(fest._id)}
                      className={`text-xs font-bold px-2.5 py-1 rounded-full shadow-md ${
                        fest.active ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-200'
                      }`}
                    >
                      {fest.active ? 'Active' : 'Inactive'}
                    </button>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="font-serif font-bold text-slate-900 text-lg">{fest.name}</h4>
                  <p className="text-xs text-slate-600">{fest.tagline}</p>
                </div>
                <div className="p-4 pt-0 flex justify-end">
                  <button
                    onClick={() => onFestivalDeleted(fest._id)}
                    className="text-rose-600 text-xs font-bold hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STORE SETTINGS TAB */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          <form onSubmit={handleSettingsSubmit} className="bg-white rounded-3xl border border-rose-100 p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="font-serif font-bold text-slate-900 text-2xl border-b pb-3">
              Store Information & Communication Settings
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Shop Name
                </label>
                <input
                  type="text"
                  value={settingsForm.storeName}
                  onChange={(e) => setSettingsForm({ ...settingsForm, storeName: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-bold text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tagline
                </label>
                <input
                  type="text"
                  value={settingsForm.tagline}
                  onChange={(e) => setSettingsForm({ ...settingsForm, tagline: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  WhatsApp Number (Customer Enquiry)
                </label>
                <input
                  type="text"
                  value={settingsForm.whatsappNumber}
                  onChange={(e) => setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-emerald-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Store Call Phone Number
                </label>
                <input
                  type="text"
                  value={settingsForm.phoneNumber}
                  onChange={(e) => setSettingsForm({ ...settingsForm, phoneNumber: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-rose-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Store Location Address
              </label>
              <input
                type="text"
                value={settingsForm.location}
                onChange={(e) => setSettingsForm({ ...settingsForm, location: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Store Opening Hours
              </label>
              <input
                type="text"
                value={settingsForm.openingHours}
                onChange={(e) => setSettingsForm({ ...settingsForm, openingHours: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm"
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#701a2b] hover:bg-rose-900 text-white font-bold py-3 px-6 rounded-xl text-sm transition shadow-md flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Store Information</span>
              </button>

              <button
                type="button"
                onClick={onReseedDemoData}
                className="w-full sm:w-auto bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold py-3 px-6 rounded-xl text-xs transition border border-amber-300 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Re-Seed 125 Demo Products</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ADD / EDIT PRODUCT MODAL */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-rose-100 max-h-[90vh] overflow-y-auto space-y-4">
            <h3 className="font-serif font-bold text-slate-900 text-2xl border-b pb-3">
              {editingProduct ? 'Edit Product Details' : 'Add New Showroom Product'}
            </h3>

            <form onSubmit={handleProductSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Product ID</label>
                  <input
                    type="text"
                    required
                    value={productForm.productId}
                    onChange={(e) => setProductForm({ ...productForm, productId: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Product Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Floral Kurti"
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 font-semibold"
                  >
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                    <option value="Kids">Kids</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Subcategory</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarees, Kurtis, Shirts"
                    value={productForm.subcategory}
                    onChange={(e) => setProductForm({ ...productForm, subcategory: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Original Price (₹)</label>
                  <input
                    type="number"
                    required
                    value={productForm.originalPrice}
                    onChange={(e) => setProductForm({ ...productForm, originalPrice: Number(e.target.value) })}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Discount (%)</label>
                  <input
                    type="number"
                    value={productForm.discount}
                    onChange={(e) => setProductForm({ ...productForm, discount: Number(e.target.value) })}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Final Price (₹)</label>
                  <input
                    type="number"
                    disabled
                    value={Math.round(productForm.originalPrice * (1 - (productForm.discount || 0) / 100))}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-100 font-bold text-rose-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Product Image URL</label>
                <input
                  type="text"
                  required
                  value={productForm.images}
                  onChange={(e) => setProductForm({ ...productForm, images: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Available Sizes (comma separated)</label>
                  <input
                    type="text"
                    value={productForm.sizes}
                    onChange={(e) => setProductForm({ ...productForm, sizes: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Available Colors</label>
                  <input
                    type="text"
                    value={productForm.colors}
                    onChange={(e) => setProductForm({ ...productForm, colors: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Fabric / Material</label>
                  <input
                    type="text"
                    value={productForm.material}
                    onChange={(e) => setProductForm({ ...productForm, material: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Stock Availability Status</label>
                  <select
                    value={productForm.stockStatus}
                    onChange={(e) => setProductForm({ ...productForm, stockStatus: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 font-bold"
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <label className="flex items-center gap-1.5 font-bold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={productForm.isNewArrival}
                    onChange={(e) => setProductForm({ ...productForm, isNewArrival: e.target.checked })}
                    className="accent-rose-700"
                  />
                  <span>Mark as New Arrival</span>
                </label>

                <label className="flex items-center gap-1.5 font-bold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={productForm.isTrending}
                    onChange={(e) => setProductForm({ ...productForm, isTrending: e.target.checked })}
                    className="accent-amber-600"
                  />
                  <span>Mark as Trending</span>
                </label>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Description</label>
                <textarea
                  rows="2"
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 font-bold hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#701a2b] text-white font-bold hover:bg-rose-900 shadow-md"
                >
                  {editingProduct ? 'Save Changes' : 'Create Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-4 text-center">
            <AlertTriangle className="w-10 h-10 text-rose-600 mx-auto" />
            <h3 className="font-serif font-bold text-lg text-slate-900">Delete Product?</h3>
            <p className="text-xs text-slate-500">
              Are you sure you want to remove this product from the catalog?
            </p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 rounded-xl border"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onProductDeleted(deleteConfirmId);
                  setDeleteConfirmId(null);
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-rose-700 rounded-xl shadow-md"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnerDashboard;
