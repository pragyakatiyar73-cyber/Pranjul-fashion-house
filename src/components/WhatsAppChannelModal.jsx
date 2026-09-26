import React from 'react';
import { X, MessageCircle, CheckCircle, Bell, Sparkles, Users, ArrowRight } from 'lucide-react';
import { storeInfo } from '../data/mockData';

export default function WhatsAppChannelModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-green-500/30 animate-in zoom-in-95 duration-200">
        
        {/* Top Decorative Header */}
        <div className="bg-gradient-to-r from-green-700 via-emerald-800 to-teal-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-2xl p-2 flex items-center justify-center shadow-lg shrink-0 border-2 border-green-400">
              <MessageCircle className="w-9 h-9 text-green-600 fill-current" />
            </div>
            <div>
              <span className="bg-green-500/40 text-green-200 text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Official WhatsApp Channel
              </span>
              <h3 className="text-xl font-black text-white mt-1 font-serif">
                Pranjul Fashion Chaubepur
              </h3>
              <p className="text-xs text-green-200 flex items-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-yellow-300" /> 1,480+ Active Local Members
              </p>
            </div>
          </div>
        </div>

        {/* Channel Benefits */}
        <div className="p-6 space-y-4">
          
          <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
            <h4 className="text-sm font-extrabold text-green-900 flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4 text-green-600" /> Why Join Our WhatsApp Channel?
            </h4>

            <ul className="space-y-2 text-xs text-gray-700 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>New Collection Alerts:</strong> Get photos of new sarees, suit sets & menswear as soon as they arrive in Chaubepur store.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Exclusive Festival Discounts:</strong> Channel-only secret coupons & bumper discounts up to 50% OFF.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Direct Order & Reserve:</strong> Message store owner directly to hold your size before stock sells out!</span>
              </li>
            </ul>
          </div>

          {/* Join Channel CTA Button */}
          <div className="space-y-2">
            <a
              href={storeInfo.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 text-sm cursor-pointer transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              JOIN WHATSAPP CHANNEL NOW <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-[11px] text-gray-400 text-center">
              🔒 Safe & Private. No spam, only genuine Chaubepur store collection updates.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
