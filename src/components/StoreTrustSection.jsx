import React from 'react';
import { Star, ShieldCheck, HeartHandshake, Store, MessageCircle, ArrowRight } from 'lucide-react';

export default function StoreTrustSection({ onOpenWhatsAppModal }) {
  const reviews = [
    {
      name: 'Pooja Tiwari',
      locality: 'Chaubepur Market',
      rating: 5,
      text: 'Got my bridal lehenga and festive sarees from Pranjul Fashion House! Exceptional embroidery quality at genuine wholesale rates.',
      tag: 'Verified Store Customer'
    },
    {
      name: 'Vikram Singh',
      locality: 'Main Chowk, Chaubepur',
      rating: 5,
      text: 'Best collection of men formal shirts and royal silk kurta sets. The fabric quality remains soft even after multiple washes.',
      tag: 'Regular Buyer'
    },
    {
      name: 'Amitabh Mishra',
      locality: 'Near Station Road',
      rating: 5,
      text: 'Super easy WhatsApp ordering! I just sent a screenshot and collected the packaged kids festival wear from the store in 15 mins.',
      tag: 'WhatsApp Order'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#FAF6F0] to-[#FFFFFF] py-10 border-t border-b border-gray-100 mt-6">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#70142C] font-script text-3xl font-medium block">
            Trusted by 5,000+ Local Families
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 font-serif tracking-tight mt-1">
            Why Chaubepur Chooses Pranjul Fashion House
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
            Your neighborhood fashion destination bringing premium Banarasi sarees, designer suits, men's ethnic wear, and kids' collections directly from wholesale looms.
          </p>
        </div>

        {/* 3 Human Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white rounded-2xl p-6 border border-[#F3E6DA] shadow-xs flex flex-col items-start hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-[#70142C]/10 text-[#70142C] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base font-serif">
              100% Handpicked Fabrics
            </h3>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Every saree, suit, and shirt in our catalog undergoes strict quality checks for soft skin comfort, color fastness, and thread embroidery finish.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#F3E6DA] shadow-xs flex flex-col items-start hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-[#70142C]/10 text-[#70142C] flex items-center justify-center mb-4">
              <Store className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base font-serif">
              Wholesale Market Pricing
            </h3>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Skip distributor markups! Get direct loom prices with 20% to 50% savings on every family purchase in Chaubepur.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#F3E6DA] shadow-xs flex flex-col items-start hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-[#70142C]/10 text-[#70142C] flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base font-serif">
              Direct Store Owner Assistance
            </h3>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Need custom sizing or matching dupattas? Connect directly with our store team via WhatsApp or visit our main market shop anytime.
            </p>
          </div>

        </div>

        {/* Verified Customer Reviews */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E6DD] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 font-serif">
                What Our Customers Say
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Real feedback from Chaubepur & Kanpur Nagar buyers
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-900">4.9 / 5.0 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-[#FAF6F0] rounded-2xl p-5 border border-[#F2E4D8] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 font-medium italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-extrabold text-gray-900">{rev.name}</h4>
                    <span className="text-[10px] text-gray-500 font-medium">{rev.locality}</span>
                  </div>
                  <span className="text-[9px] bg-[#70142C]/10 text-[#70142C] font-bold px-2 py-0.5 rounded-full">
                    {rev.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Callout */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#70142C] to-[#580E21] p-5 rounded-2xl text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base">
                  Have questions or want to check local store stock?
                </h4>
                <p className="text-xs text-amber-200 font-medium">
                  Chat directly with Pranjul Fashion House store team on WhatsApp!
                </p>
              </div>
            </div>

            <button
              onClick={onOpenWhatsAppModal}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 transition cursor-pointer shadow-md shrink-0"
            >
              Start WhatsApp Chat <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
