import React from 'react';
import Link from 'next/link';
import { Flower2, MapPin, Award, HeartHandshake, ShieldCheck, MessageCircle } from 'lucide-react';
import { initialStoreSettings } from '../../data/demoData';
import { getWhatsAppLink } from '../../lib/utils';

export default function AboutPage() {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#FAF7F2] via-[#FBE3D5]/80 to-[#FAF7F2] rounded-3xl p-8 lg:p-12 border border-[#EADED2] text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-[#5A1827] text-[#F7D6D0] flex items-center justify-center mx-auto shadow-md">
          <Flower2 className="w-8 h-8" />
        </div>
        <span className="text-xs uppercase tracking-widest text-[#8C4351] font-bold block">
          Welcome to Our Boutique
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5A1827]">
          Pranjul Fashion House
        </h1>
        <p className="font-serif text-lg text-[#8C4351] italic">
          &ldquo;Style for Every You&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-[#524542] max-w-2xl mx-auto leading-relaxed">
          Located in the heart of Chaubepur, Uttar Pradesh, Pranjul Fashion House is dedicated to bringing fine Indian ethnic attire and modern western styles directly to fashion-conscious women across the region.
        </p>
      </div>

      {/* Brand Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 border border-[#EADED2] shadow-xs">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#8C4351] font-semibold">
            Our Heritage & Values
          </span>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#5A1827]">
            Crafted for Tradition, Designed for Everyday Confidence
          </h2>
          <p className="text-xs sm:text-sm text-[#524542] leading-relaxed">
            At Pranjul Fashion House, we believe every woman deserves clothing that makes her feel graceful, confident, and comfortable. Whether you are shopping for a daily wear cotton kurti, an elegant office suit set, or a grand Banarasi silk saree for a family wedding, we offer carefully selected designs under one roof.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Connect on WhatsApp</span>
            </a>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5A1827] text-white text-xs font-semibold hover:bg-[#42101B] transition-colors"
            >
              <span>Explore Catalogue</span>
            </Link>
          </div>
        </div>

        <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800"
            alt="Boutique Store Interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-[#EADED2] text-center space-y-3 shadow-xs">
          <Award className="w-8 h-8 text-[#5A1827] mx-auto" />
          <h3 className="font-bold text-base text-[#231815]">Quality Assured</h3>
          <p className="text-xs text-[#665B58]">
            We inspect fabric weave, color fastness, and stitching finish on every piece before displaying it in our Chaubepur store.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#EADED2] text-center space-y-3 shadow-xs">
          <HeartHandshake className="w-8 h-8 text-[#5A1827] mx-auto" />
          <h3 className="font-bold text-base text-[#231815]">Personal Attention</h3>
          <p className="text-xs text-[#665B58]">
            Our boutique team takes time to help you choose matching dupattas, fabrics, and fit options suited to your preferences.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#EADED2] text-center space-y-3 shadow-xs">
          <MapPin className="w-8 h-8 text-[#5A1827] mx-auto" />
          <h3 className="font-bold text-base text-[#231815]">Local Store Pride</h3>
          <p className="text-xs text-[#665B58]">
            Proudly serving Chaubepur and surrounding areas with reliable fashion collections and honest pricing.
          </p>
        </div>
      </div>

    </div>
  );
}
