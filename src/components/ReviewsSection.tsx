'use client';

import React from 'react';
import Link from 'next/link';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { initialReviews } from '../data/demoData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-12 px-6 lg:px-12 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 w-full">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#8C4351] font-bold">
            Customer Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#5A1827]">
            What Our Customers Say
          </h2>
        </div>
        <Link
          href="/reviews"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#5A1827] hover:underline"
        >
          <span>View All Verified Reviews</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {initialReviews.map((rev) => (
          <div
            key={rev.id}
            className="p-6 rounded-3xl bg-white border border-[#EADED2] shadow-xs flex flex-col justify-between space-y-4 relative"
          >
            <Quote className="w-10 h-10 text-[#F7D6D0] absolute top-5 right-5" />
            
            <div className="space-y-3">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rev.rating
                        ? 'text-[#F39C12] fill-[#F39C12]'
                        : 'text-[#D9C4B5]'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-[#4A3E3D] italic leading-relaxed font-medium">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-[#F2E8DF] flex items-center justify-between text-xs text-[#8C7A77]">
              <div>
                <span className="font-bold text-[#231815] block">{rev.name}</span>
                <span className="font-medium">{rev.location}</span>
              </div>
              <span className="font-medium">{rev.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
