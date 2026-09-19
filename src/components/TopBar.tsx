import React from 'react';
import { MapPin, Clock, Sparkles } from 'lucide-react';
import { initialStoreSettings } from '../data/demoData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#5A1827] text-[#FAF7F2] text-xs py-2 px-4 border-b border-[#42101B]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#F7D6D0]" />
            <span>{initialStoreSettings.location}</span>
          </div>
          <span className="hidden md:inline text-white/30">|</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#F7D6D0]" />
            <span>Shop Timing: {initialStoreSettings.shopTiming}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[#F7D6D0] font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{initialStoreSettings.announcementText}</span>
        </div>
      </div>
    </div>
  );
};
