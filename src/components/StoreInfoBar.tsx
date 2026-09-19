import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';
import { initialStoreSettings } from '../data/demoData';
import { getWhatsAppLink, getCallLink } from '../lib/utils';

export const StoreInfoBar: React.FC = () => {
  return (
    <section className="bg-[#FAF7F2] border-y border-[#EADED2] py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Location */}
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#EADED2] shadow-xs">
          <div className="p-3 rounded-xl bg-[#F7D6D0] text-[#5A1827] shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#8C665D] uppercase tracking-wider">
              Visit Our Shop
            </h4>
            <p className="text-sm font-semibold text-[#231815] mt-0.5">
              Chaubepur, Uttar Pradesh
            </p>
            <a
              href={initialStoreSettings.mapEmbedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#5A1827] hover:underline mt-1"
            >
              <span>Get Directions</span>
              <Navigation className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Call Us */}
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#EADED2] shadow-xs">
          <div className="p-3 rounded-xl bg-[#F7D6D0] text-[#5A1827] shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#8C665D] uppercase tracking-wider">
              Call Us Directly
            </h4>
            <p className="text-sm font-semibold text-[#231815] mt-0.5">
              {initialStoreSettings.phone}
            </p>
            <a
              href={getCallLink()}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#5A1827] hover:underline mt-1"
            >
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* WhatsApp Us */}
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#EADED2] shadow-xs">
          <div className="p-3 rounded-xl bg-[#25D366]/20 text-[#1EBE5D] shrink-0">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#8C665D] uppercase tracking-wider">
              WhatsApp Support
            </h4>
            <p className="text-sm font-semibold text-[#231815] mt-0.5">
              Quick Enquiries & Photos
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#1EBE5D] hover:underline mt-1"
            >
              <span>Chat Now</span>
            </a>
          </div>
        </div>

        {/* Shop Timing */}
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#EADED2] shadow-xs">
          <div className="p-3 rounded-xl bg-[#F7D6D0] text-[#5A1827] shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#8C665D] uppercase tracking-wider">
              Shop Timing
            </h4>
            <p className="text-sm font-semibold text-[#231815] mt-0.5">
              9:00 AM - 9:00 PM
            </p>
            <span className="text-xs text-[#665B58] block mt-0.5">
              Open 7 Days a Week
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
