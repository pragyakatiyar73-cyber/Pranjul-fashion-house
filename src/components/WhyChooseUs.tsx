import React from 'react';
import { Award, TrendingUp, Layers, Wallet, MessageSquare } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      desc: "Finest fabrics handpicked from top artisanal weaving centers."
    },
    {
      icon: TrendingUp,
      title: "Latest Trends",
      desc: "Fresh collection additions added every week in Chaubepur."
    },
    {
      icon: Layers,
      title: "Different Styles, One Place",
      desc: "From daily wear kurtis to bridal lehengas under one roof."
    },
    {
      icon: Wallet,
      title: "Affordable Prices",
      desc: "Transparent and honest pricing tailored for every shopper."
    },
    {
      icon: MessageSquare,
      title: "Easy WhatsApp Inquiry",
      desc: "Instant responses on product photos, sizes, and price details."
    }
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-center">
      <div className="mb-10 space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#8C4351] font-semibold">
          Your Trust Means Everything
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5A1827]">
          Why Choose Pranjul Fashion House?
        </h2>
        <div className="w-16 h-0.5 bg-[#5A1827] mx-auto rounded-full mt-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#EADED2] shadow-xs hover:shadow-md hover:border-[#5A1827]/40 transition-all flex flex-col items-center text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F7D6D0]/60 text-[#5A1827] flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-[#231815]">
                {item.title}
              </h3>
              <p className="text-xs text-[#665B58] leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
