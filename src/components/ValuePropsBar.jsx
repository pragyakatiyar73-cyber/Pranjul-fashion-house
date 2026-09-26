import React from 'react';
import { Users, Shirt, Tag, ShoppingBag, MapPin } from 'lucide-react';

export default function ValuePropsBar() {
  const props = [
    {
      icon: Users,
      title: 'Wide Range',
      subtitle: 'For Entire Family'
    },
    {
      icon: Shirt,
      title: 'Quality Fabrics',
      subtitle: 'Comfort & Style'
    },
    {
      icon: Tag,
      title: 'Best Prices',
      subtitle: 'Everyday Value'
    },
    {
      icon: ShoppingBag,
      title: 'Easy Shopping',
      subtitle: 'See, Choose, Visit'
    },
    {
      icon: MapPin,
      title: 'Visit Our Store',
      subtitle: 'Chaubepur, Kanpur Nagar'
    }
  ];

  return (
    <div className="bg-[#F8F6F4] border-t border-b border-gray-200/80 py-5 mt-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
          {props.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 p-2">
                <div className="w-10 h-10 rounded-full bg-[#70142C]/10 text-[#70142C] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-xs text-gray-900 leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
