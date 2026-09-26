import React from 'react';
import { ArrowRight, Grid } from 'lucide-react';

const categoriesList = [
  { id: 'Women', label: 'Women', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80' },
  { id: 'Men', label: 'Men', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80' },
  { id: 'Kids', label: 'Kids', img: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=400&q=80' },
  { id: 'Sarees', label: 'Sarees', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80' },
  { id: 'Suits', label: 'Suits', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=400&q=80' },
  { id: 'Kurtis', label: 'Kurtis', img: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=400&q=80' },
  { id: 'Shirts', label: 'Shirts', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80' },
  { id: 'Jeans', label: 'Jeans', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80' },
  { id: 'Tops', label: 'Tops', img: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=400&q=80' },
];

const CategoryRow = ({ setCategory, setSubcategory, setActiveTab, onOpenMegaMenu }) => {
  const handleCategoryClick = (catItem) => {
    if (['Women', 'Men', 'Kids', 'Baby'].includes(catItem.id)) {
      setCategory(catItem.id);
      setSubcategory('All');
    } else {
      setSubcategory(catItem.id);
    }
    setActiveTab('catalog');
  };

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* 10 Columns Grid matching reference screenshot */}
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 sm:gap-3 w-full">
        
        {/* Leftmost Card 1: Shop by Category */}
        <div
          onClick={() => {
            if (onOpenMegaMenu) onOpenMegaMenu();
            else {
              setCategory('All');
              setActiveTab('catalog');
            }
          }}
          className="bg-[#fceee9] border border-rose-200 rounded-2xl p-3 h-32 flex flex-col justify-between shadow-2xs hover:shadow-md transition duration-300 cursor-pointer group"
        >
          <div className="space-y-1">
            <h3 className="font-serif font-extrabold text-sm sm:text-base text-[#6b1426] leading-tight">
              Shop by Category
            </h3>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#6b1426] text-white flex items-center justify-center group-hover:translate-x-1 transition">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* 8 Category Items */}
        {categoriesList.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCategoryClick(item)}
            className="bg-[#faf6f0] border border-stone-200/80 hover:border-rose-300 rounded-2xl p-2 h-32 flex flex-col items-center justify-between shadow-2xs hover:shadow-md transition duration-300 cursor-pointer group"
          >
            <div className="w-full h-20 rounded-xl overflow-hidden bg-stone-100 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
              />
            </div>
            <span className="text-xs font-bold text-stone-800 group-hover:text-[#6b1426] mb-0.5 truncate w-full text-center">
              {item.label}
            </span>
          </div>
        ))}

        {/* Rightmost Card 10: More Categories */}
        <div
          onClick={() => {
            if (onOpenMegaMenu) onOpenMegaMenu();
            else {
              setCategory('All');
              setActiveTab('catalog');
            }
          }}
          className="bg-[#faf6f0] border border-stone-200/80 hover:border-rose-300 rounded-2xl p-2 h-32 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-md transition duration-300 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-rose-50 text-[#6b1426] flex items-center justify-center mb-1 group-hover:scale-110 transition">
            <Grid className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold text-stone-800 group-hover:text-[#6b1426] leading-tight">
            More Categories
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#6b1426] mt-0.5" />
        </div>

      </div>
    </div>
  );
};

export default CategoryRow;
