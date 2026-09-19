'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../lib/utils';

export const HeroSlider: React.FC = () => {
  const slides = [
    {
      badge: "Trendy Collections | Traditional Touch | For Every Occasion",
      heading: "Welcome to Pranjul Fashion House",
      subheading: "Style for Every Occasion",
      description: "Discover beautiful fashion collections for everyday wear, office wear, parties, weddings and special occasions in Chaubepur.",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=1200",
      ctaText: "Explore Collection",
      ctaLink: "/products"
    },
    {
      badge: "Royal Bridal & Ceremonial Wear",
      heading: "Wedding Collection",
      subheading: "Elegant Looks for Special Moments",
      description: "Exquisite Silk Sarees, Designer Anarkalis, and Heavy Embroidered Lehengas crafted to make your celebrations unforgettable.",
      image: "https://images.unsplash.com/photo-1610030469668-98e550d6193c?auto=format&fit=crop&q=80&w=1200",
      ctaText: "View Wedding Wear",
      ctaLink: "/products?category=Wedding%20Collection"
    },
    {
      badge: "Pure Cotton & Daily Wear Essentials",
      heading: "Everyday Fashion",
      subheading: "Comfort Meets Style",
      description: "Soft breathable printed suits, cotton kurtis, and effortless dress materials for daily comfort without compromising elegance.",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1200",
      ctaText: "Shop Daily Wear",
      ctaLink: "/products?category=Kurtis"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden bg-[#FBE3D5]/40 py-8 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-[#FAF7F2] border border-[#E8D9CC] shadow-md overflow-hidden min-h-[480px] flex items-center">
          
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 gap-8 ${
                idx === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-4 text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F7D6D0] text-[#5A1827] text-xs font-semibold tracking-wide uppercase">
                  {slide.badge}
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5A1827] leading-tight">
                  {slide.heading}
                </h1>

                <p className="font-serif text-lg sm:text-xl text-[#8C4351] font-medium italic">
                  &ldquo;{slide.subheading}&rdquo;
                </p>

                <p className="text-sm sm:text-base text-[#524542] leading-relaxed max-w-xl">
                  {slide.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5A1827] text-[#FAF7F2] text-sm font-semibold hover:bg-[#42101B] transition-all shadow-md group"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#5A1827] text-[#5A1827] text-sm font-semibold hover:bg-[#5A1827] hover:text-white transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-1/2 h-[260px] sm:h-[340px] lg:h-[400px] relative rounded-2xl overflow-hidden shadow-md">
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#5A1827] flex items-center justify-center shadow-md transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#5A1827] flex items-center justify-center shadow-md transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slider Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
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
      </div>
    </section>
  );
};
