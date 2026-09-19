'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MessageCircle, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../lib/utils';
import { ImageWithFallback } from './ImageWithFallback';

export const HeroSlider: React.FC = () => {
  const slides = [
    {
      badge: "TRENDY COLLECTIONS | TRADITIONAL TOUCH | FOR EVERY OCCASION",
      heading: "Welcome to Pranjul Fashion House",
      subheading: "Style for Every Occasion",
      description: "Discover beautiful fashion collections for everyday wear, office wear, parties, weddings and special occasions in Chaubepur.",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1200&auto=format&fit=crop&q=80",
      ctaText: "Explore Collection",
      ctaLink: "/products"
    },
    {
      badge: "ROYAL BRIDAL & FESTIVE SPECIALS",
      heading: "Wedding Collection",
      subheading: "Elegant Looks for Special Moments",
      description: "Exquisite Silk Sarees, Designer Anarkalis, and Heavy Embroidered Lehengas crafted to make your grand occasions unforgettable.",
      image: "https://images.unsplash.com/photo-1610030469668-98e550d6193c?w=1200&auto=format&fit=crop&q=80",
      ctaText: "View Wedding Wear",
      ctaLink: "/products?category=Wedding%20Collection"
    },
    {
      badge: "PURE COTTON & DAILY WEAR ESSENTIALS",
      heading: "Everyday Fashion",
      subheading: "Comfort Meets Style",
      description: "Soft breathable printed suits, cotton kurtis, and effortless unstitched dress materials for daily comfort without compromising elegance.",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1200&auto=format&fit=crop&q=80",
      ctaText: "Shop Daily Wear",
      ctaLink: "/products?category=Kurtis"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden py-4 sm:py-6 lg:py-8 px-6 lg:px-12 w-full">
      <div className="relative rounded-3xl bg-[#FAF7F2] border border-[#E8D9CC] shadow-lg overflow-hidden min-h-[520px] flex items-center w-full">
        
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 lg:p-14 gap-8 w-full ${
              idx === currentSlide
                ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                : 'opacity-0 scale-95 z-0 pointer-events-none'
            }`}
          >
            {/* Text Side */}
            <div className="w-full lg:w-1/2 space-y-5 text-left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F7D6D0] text-[#5A1827] text-xs font-extrabold tracking-wider uppercase shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#5A1827]" />
                {slide.badge}
              </span>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#5A1827] leading-[1.12] tracking-tight">
                {slide.heading}
              </h1>

              <p className="font-serif text-xl sm:text-2xl text-[#8C4351] font-semibold italic">
                &ldquo;{slide.subheading}&rdquo;
              </p>

              <p className="text-sm sm:text-base text-[#524542] leading-relaxed max-w-2xl">
                {slide.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={slide.ctaLink}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#5A1827] text-[#FAF7F2] text-sm font-bold hover:bg-[#42101B] transition-all shadow-md group"
                >
                  <span>{slide.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-[#5A1827] text-[#5A1827] text-sm font-bold hover:bg-[#5A1827] hover:text-white transition-all shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              {/* Trust Tag */}
              <div className="pt-3 flex items-center gap-2 text-xs text-[#7A6B68] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#5A1827]" />
                <span>Verified Quality • Direct Boutique Pricing • Chaubepur, UP</span>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-1/2 h-[300px] sm:h-[380px] lg:h-[460px] relative rounded-2xl overflow-hidden shadow-md group">
              <ImageWithFallback
                src={slide.image}
                alt={slide.heading}
                fallbackText={slide.heading}
                type="hero"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-md flex items-center justify-between text-xs">
                <span className="font-serif font-bold text-sm text-[#5A1827]">{slide.heading}</span>
                <span className="text-[10px] font-bold text-[#8C4351] uppercase bg-[#F7D6D0] px-2.5 py-1 rounded-md">Boutique Collection</span>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#5A1827] flex items-center justify-center shadow-md transition-all border border-[#EADED2]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#5A1827] flex items-center justify-center shadow-md transition-all border border-[#EADED2]"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-white/90 backdrop-blur-xs px-4 py-2 rounded-full border border-[#EADED2]">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentSlide ? 'w-8 bg-[#5A1827]' : 'w-2.5 bg-[#D9C4B5]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
