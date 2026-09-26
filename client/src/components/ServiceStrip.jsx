import React from 'react';
import { Users, Sparkles, IndianRupee, ShoppingBag, MapPin } from 'lucide-react';

const ServiceStrip = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Wide Range',
      subtext: 'For Entire Family',
    },
    {
      icon: Sparkles,
      title: 'Quality Fabrics',
      subtext: 'Comfort & Style',
    },
    {
      icon: IndianRupee,
      title: 'Best Prices',
      subtext: 'Everyday Value',
    },
    {
      icon: ShoppingBag,
      title: 'Easy Shopping',
      subtext: 'See, Choose, Visit',
    },
    {
      icon: MapPin,
      title: 'Visit Our Store',
      subtext: 'Chaubepur, Kanpur Nagar',
    },
  ];

  return (
    <div className="w-full bg-[#fdf5f0] border-y border-rose-200/60 py-6 my-8">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-2 md:grid-cols-5 gap-6">
        {benefits.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3.5 p-2 justify-center text-center sm:text-left">
              <div className="w-11 h-11 rounded-full bg-white text-[#6b1426] border border-rose-200 flex items-center justify-center shrink-0 shadow-2xs">
                <IconComp className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-stone-900 text-xs sm:text-sm leading-tight">
                  {item.title}
                </span>
                <span className="text-[11px] sm:text-xs text-stone-500 font-medium leading-tight mt-0.5">
                  {item.subtext}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceStrip;
