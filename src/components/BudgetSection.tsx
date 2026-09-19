'use client';

import React from 'react';
import Link from 'next/link';
import { IndianRupee, Sparkles } from 'lucide-react';

export const BudgetSection: React.FC = () => {
  const budgetRanges = [
    { label: 'Under ₹500', value: '0-500' },
    { label: '₹500 - ₹1,000', value: '500-1000' },
    { label: '₹1,000 - ₹1,500', value: '1000-1500' },
    { label: '₹1,500 - ₹2,500', value: '1500-2500' },
    { label: 'Above ₹2,500', value: '2500-above' },
  ];

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-[#FAF7F2] via-[#FBE3D5]/60 to-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#EADED2] text-center shadow-xs">
        <div className="mb-6 space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7D6D0] text-[#5A1827] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smart Shopping</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5A1827]">
            Find Something Within Your Budget
          </h2>
          <p className="text-xs sm:text-sm text-[#665B58]">
            Quality fashion carefully priced to suit your personal style and budget choices.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
          {budgetRanges.map((range) => (
            <Link
              key={range.value}
              href={`/products?price=${range.value}`}
              className="group flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-[#D9C4B5] text-sm font-semibold text-[#5A1827] shadow-xs hover:bg-[#5A1827] hover:text-white transition-all transform hover:-translate-y-0.5"
            >
              <IndianRupee className="w-4 h-4 text-[#5A1827] group-hover:text-white transition-colors" />
              <span>{range.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
