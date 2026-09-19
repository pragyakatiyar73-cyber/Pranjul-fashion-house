import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HeroSlider } from '../components/HeroSlider';
import { ShopByCategory } from '../components/ShopByCategory';
import { ProductCard } from '../components/ProductCard';
import { SpecialOffersBanner } from '../components/SpecialOffersBanner';
import { BudgetSection } from '../components/BudgetSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { StoreInfoBar } from '../components/StoreInfoBar';
import { ReviewsSection } from '../components/ReviewsSection';
import { initialProducts } from '../data/demoData';

export default function HomePage() {
  const featuredProducts = initialProducts.slice(0, 5);

  return (
    <div className="space-y-6 pb-12">
      {/* Hero Carousel */}
      <HeroSlider />

      {/* Shop by Category (Circular Avatars) */}
      <ShopByCategory />

      {/* Featured Products Showcase */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8C4351] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handpicked Collection</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#5A1827]">
              Featured Products
            </h2>
            <p className="text-xs text-[#665B58] mt-0.5">
              Our most loved suits, sarees, kurtis and dresses in Chaubepur
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5A1827] text-white text-xs font-semibold hover:bg-[#42101B] transition-colors shadow-xs"
          >
            <span>View All Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id || product._id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banners */}
      <SpecialOffersBanner />

      {/* Budget Filter Chips */}
      <BudgetSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Store Location & Timings */}
      <StoreInfoBar />

      {/* Customer Reviews */}
      <ReviewsSection />
    </div>
  );
}
