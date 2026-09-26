'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Tag, ArrowRight, Star } from 'lucide-react';
import { initialProducts } from '../data/demoData';
import { ProductCard } from './ProductCard';

export const DealsOfTheDay: React.FC = () => {
  // Timer countdown simulation
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Products with highest discounts
  const dealProducts = initialProducts.filter(p => p.isSale || (p.originalPrice && p.originalPrice > p.price)).slice(0, 5);

  return (
    <section className="py-8 px-6 lg:px-12 w-full">
      <div className="bg-white rounded-3xl border border-[#EADED2] p-6 lg:p-8 shadow-xs space-y-6 w-full">
        
        {/* Flipkart-style Deals Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#F2E8DF] pb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="p-2.5 rounded-2xl bg-[#5A1827] text-white flex items-center justify-center shadow-xs">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5A1827]">
                Deals of the Day
              </h2>
              <p className="text-xs text-[#665B58]">Special festive price drops for Chaubepur boutique shoppers</p>
            </div>

            {/* Countdown Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#EADED2] text-xs font-bold text-[#5A1827]">
              <Clock className="w-4 h-4 text-[#5A1827] animate-pulse" />
              <span>Ends in {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>

          <Link
            href="/offers"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#5A1827] text-white text-xs font-bold hover:bg-[#42101B] transition-colors"
          >
            <span>View All Deals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {dealProducts.map(p => (
            <ProductCard key={p.id || p._id} product={p} />
          ))}
        </div>

      </div>
    </section>
  );
};
