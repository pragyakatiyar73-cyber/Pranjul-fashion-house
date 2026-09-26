import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, CheckCircle2, XCircle, Tag, Sparkles, Flame, Calendar, RefreshCw, FolderPlus, ArrowRight } from 'lucide-react';

const CategoryManagerTab = ({ products, onRefreshData }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Add Category Form State
  const [newCatForm, setNewCatForm] = useState({
    name: '',
    type: 'main',
    gender: 'Women',
    subcategories: '',
    description: '',
    icon: 'Sparkles',
    isFeatured: true,
    isTrending: false,
  });

  // Move Product Form State
  const [moveProductState, setMoveProductState] = useState({
    productId: '',
    targetCategory: 'Women',
    targetSubcategory: 'Ethnic Wear',
  });

  // New subcategory input map by category id
  const [subcatInputMap, setSubcatInputMap] = useState({});

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/categories');
      const data = await res.json();
      if (data.success) {
        setCategories(data.categories || []);
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    if (!newCatForm.name) return alert('Category Name is required!');

    try {
      const subArr = newCatForm.subcategories
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);

      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newCatForm,
          subcategories: subArr,
        }),
      });

      const data = await res.json();
      if (data.success) {
        alert(`Category "${data.category.name}" created successfully!`);
        setNewCatForm({
          name: '',
          type: 'main',
          gender: 'Women',
          subcategories: '',
          description: '',
          icon: 'Sparkles',
          isFeatured: true,
          isTrending: false,
        });
        fetchCategories();
      } else {
        alert(data.message || 'Failed to create category');
      }
    } catch (err) {
      console.error(err);
      alert('Error creating category');
    }
  };

  const handleToggleCategoryField = async (id, field) => {
    try {
      const res = await fetch(`/api/categories/${id}/toggle`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ field }),
      });
      const data = await res.json();
      if (data.success) {
        fetchCategories();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCategory = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete category "${name}"?`)) return;
    try {
      const res = await fetch(`/api/categories/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        alert(`Category "${name}" deleted!`);
        fetchCategories();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddSubcategory = async (catId) => {
    const subName = subcatInputMap[catId];
    if (!subName) return;

    try {
      const res = await fetch(`/api/categories/${catId}/subcategories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subcategory: subName }),
      });
      const data = await res.json();
      if (data.success) {
        setSubcatInputMap((prev) => ({ ...prev, [catId]: '' }));
        fetchCategories();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleMoveProduct = async (e) => {
    e.preventDefault();
    if (!moveProductState.productId) return alert('Select a product to move!');

    try {
      const res = await fetch('/api/categories/move-products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productIds: [moveProductState.productId],
          targetCategory: moveProductState.targetCategory,
          targetSubcategory: moveProductState.targetSubcategory,
        }),
      });

      const data = await res.json();
      if (data.success) {
        alert('Product reassigned to new category successfully!');
        if (onRefreshData) onRefreshData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Title & Header */}
      <div className="bg-[#6b1426] text-white p-6 rounded-3xl shadow-md flex items-center justify-between">
        <div>
          <h2 className="font-serif font-bold text-2xl">
            Database Category & Taxonomy Manager
          </h2>
          <p className="text-xs text-rose-200 mt-1">
            Add new categories, subcategories, occasion tags, trending features & reassign inventory in real-time.
          </p>
        </div>
        <button
          onClick={fetchCategories}
          className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-white/20 transition flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh Taxonomy</span>
        </button>
      </div>

      {/* Grid: Left Create Form, Right Move Product Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Create New Category Card */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
          <h3 className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
            <FolderPlus className="w-5 h-5 text-[#6b1426]" />
            <span>Create New Category / Occasion / Trend</span>
          </h3>

          <form onSubmit={handleCreateCategory} className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Category Name *</label>
                <input
                  type="text"
                  placeholder="e.g. BABY, OCCASIONS, WINTER WEAR"
                  value={newCatForm.name}
                  onChange={(e) => setNewCatForm({ ...newCatForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 font-semibold text-stone-800"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Category Type</label>
                <select
                  value={newCatForm.type}
                  onChange={(e) => setNewCatForm({ ...newCatForm, type: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 font-semibold text-stone-800 bg-white"
                >
                  <option value="main">Main Category (WOMEN, MEN, KIDS, BABY)</option>
                  <option value="occasion">Occasion Category (Wedding, Festival, School)</option>
                  <option value="seasonal">Seasonal Category (Summer, Winter)</option>
                  <option value="trending">Trending Now Tag</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Gender / Audience</label>
                <select
                  value={newCatForm.gender}
                  onChange={(e) => setNewCatForm({ ...newCatForm, gender: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 font-semibold text-stone-800 bg-white"
                >
                  <option value="Women">Women</option>
                  <option value="Men">Men</option>
                  <option value="Kids">Kids</option>
                  <option value="Baby">Baby</option>
                  <option value="All">All Audiences</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Subcategories (Comma Separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Daily Wear, Party Wear, Ethnic Wear"
                  value={newCatForm.subcategories}
                  onChange={(e) => setNewCatForm({ ...newCatForm, subcategories: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-stone-800"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Short Description</label>
              <input
                type="text"
                placeholder="Brief description for customer guidance"
                value={newCatForm.description}
                onChange={(e) => setNewCatForm({ ...newCatForm, description: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-stone-800"
              />
            </div>

            <div className="flex items-center gap-6 pt-1">
              <label className="flex items-center gap-2 cursor-pointer font-bold text-stone-700">
                <input
                  type="checkbox"
                  checked={newCatForm.isFeatured}
                  onChange={(e) => setNewCatForm({ ...newCatForm, isFeatured: e.target.checked })}
                  className="rounded text-[#6b1426]"
                />
                <span>Mark Featured</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer font-bold text-stone-700">
                <input
                  type="checkbox"
                  checked={newCatForm.isTrending}
                  onChange={(e) => setNewCatForm({ ...newCatForm, isTrending: e.target.checked })}
                  className="rounded text-[#6b1426]"
                />
                <span>Mark Trending Now</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#6b1426] hover:bg-[#520f1d] text-white font-bold py-2.5 rounded-xl shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Save New Category to Database</span>
            </button>
          </form>
        </div>

        {/* Move Product Between Categories Form */}
        <div className="lg:col-span-5 bg-stone-50 p-6 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
          <h3 className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-amber-700" />
            <span>Reassign Product Category</span>
          </h3>

          <form onSubmit={handleMoveProduct} className="space-y-3 text-xs">
            <div>
              <label className="block font-bold text-stone-700 mb-1">Select Product *</label>
              <select
                value={moveProductState.productId}
                onChange={(e) => setMoveProductState({ ...moveProductState, productId: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 font-semibold text-stone-800 bg-white"
                required
              >
                <option value="">-- Choose Product to Move --</option>
                {products.map((p) => (
                  <option key={p._id} value={p._id}>
                    [{p.productId}] {p.name} ({p.category})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Target Category *</label>
              <select
                value={moveProductState.targetCategory}
                onChange={(e) => setMoveProductState({ ...moveProductState, targetCategory: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 font-semibold text-stone-800 bg-white"
              >
                <option value="Women">Women</option>
                <option value="Men">Men</option>
                <option value="Kids">Kids</option>
                <option value="Baby">Baby</option>
                <option value="Occasions">Occasions</option>
                <option value="Seasonal">Seasonal</option>
                <option value="Trending Now">Trending Now</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Target Subcategory *</label>
              <input
                type="text"
                placeholder="e.g. Ethnic Wear, Western Wear"
                value={moveProductState.targetSubcategory}
                onChange={(e) => setMoveProductState({ ...moveProductState, targetSubcategory: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-stone-800"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 rounded-xl shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Move Product to New Category</span>
            </button>
          </form>
        </div>

      </div>

      {/* Database Categories Table */}
      <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-2xs">
        <div className="p-4 bg-stone-100 border-b border-stone-200 flex items-center justify-between">
          <h3 className="font-serif font-bold text-stone-900 text-base">
            Active Database Categories ({categories.length})
          </h3>
          <span className="text-xs text-stone-500 font-medium">
            Managed directly in MongoDB database
          </span>
        </div>

        {loading ? (
          <div className="py-12 text-center text-xs text-stone-500">Loading categories...</div>
        ) : (
          <div className="divide-y divide-stone-200 overflow-x-auto">
            {categories.map((cat) => (
              <div key={cat._id} className="p-4 hover:bg-stone-50 transition space-y-2">
                
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-stone-900 text-base">
                      {cat.name}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-200 text-stone-700 uppercase">
                      Type: {cat.type}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-[#6b1426]">
                      Audience: {cat.gender}
                    </span>
                  </div>

                  {/* Toggles & Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleCategoryField(cat._id, 'isTrending')}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border transition ${
                        cat.isTrending ? 'bg-rose-700 text-white border-rose-700' : 'bg-stone-100 text-stone-600 border-stone-300'
                      }`}
                    >
                      {cat.isTrending ? '🔥 Trending' : '+ Mark Trending'}
                    </button>

                    <button
                      onClick={() => handleToggleCategoryField(cat._id, 'isFeatured')}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border transition ${
                        cat.isFeatured ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-stone-100 text-stone-600 border-stone-300'
                      }`}
                    >
                      {cat.isFeatured ? '⭐ Featured' : '+ Mark Featured'}
                    </button>

                    <button
                      onClick={() => handleToggleCategoryField(cat._id, 'isActive')}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border transition ${
                        cat.isActive ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-stone-200 text-stone-500 border-stone-300'
                      }`}
                    >
                      {cat.isActive ? 'Active' : 'Disabled'}
                    </button>

                    <button
                      onClick={() => handleDeleteCategory(cat._id, cat.name)}
                      className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-100 transition"
                      title="Delete Category"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Subcategories Pills & Quick Add */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-stone-500 font-semibold text-[11px]">Subcategories:</span>
                  {cat.subcategories?.map((sub, idx) => (
                    <span key={idx} className="bg-stone-100 text-stone-800 font-medium px-2 py-0.5 rounded border border-stone-200 text-[11px]">
                      {sub}
                    </span>
                  ))}

                  {/* Add Subcategory Inline Input */}
                  <div className="flex items-center gap-1 ml-2">
                    <input
                      type="text"
                      placeholder="+ New Subcategory"
                      value={subcatInputMap[cat._id] || ''}
                      onChange={(e) => setSubcatInputMap({ ...subcatInputMap, [cat._id]: e.target.value })}
                      className="px-2 py-0.5 text-[11px] rounded border border-stone-300 bg-white"
                    />
                    <button
                      onClick={() => handleAddSubcategory(cat._id)}
                      className="bg-[#6b1426] text-white px-2 py-0.5 rounded text-[10px] font-bold hover:bg-[#520f1d]"
                    >
                      Add
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default CategoryManagerTab;
