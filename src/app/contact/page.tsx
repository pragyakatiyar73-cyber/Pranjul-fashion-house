'use client';

import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { initialStoreSettings } from '../../data/demoData';
import { getWhatsAppLink, getCallLink } from '../../lib/utils';
import { StoreInfoBar } from '../../components/StoreInfoBar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productName: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
    } catch (e) {
      console.warn('API offline fallback:', e);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 space-y-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Contact Info */}
        <div className="space-y-6 bg-white p-8 rounded-3xl border border-[#EADED2] shadow-xs">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#8C4351] font-semibold">
              Get in Touch
            </span>
            <h1 className="font-serif text-3xl font-bold text-[#5A1827] mt-1">
              Contact Pranjul Fashion House
            </h1>
            <p className="text-xs sm:text-sm text-[#665B58] mt-2">
              Have questions about saree fabrics, suit sizes, or store availability? Visit our Chaubepur boutique or send us a message!
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#F2E8DF]">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#F7D6D0] text-[#5A1827] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#231815]">Address</h4>
                <p className="text-xs text-[#665B58] mt-0.5">{initialStoreSettings.address}</p>
                <a
                  href={initialStoreSettings.mapEmbedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#5A1827] hover:underline mt-1"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F7D6D0] text-[#5A1827] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#231815]">Opening Hours</h4>
                <p className="text-xs text-[#665B58] mt-0.5">{initialStoreSettings.shopTiming}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F7D6D0] text-[#5A1827] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#231815]">Phone Call</h4>
                <p className="text-xs text-[#665B58] mt-0.5">{initialStoreSettings.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#25D366]/20 text-[#1EBE5D] shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#231815]">WhatsApp Inquiry</h4>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#1EBE5D] hover:underline mt-0.5 block"
                >
                  Chat on WhatsApp ({initialStoreSettings.whatsappNumber})
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Inquiry Form */}
        <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#EADED2] shadow-xs flex flex-col justify-between">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#5A1827]">
                  Send Customer Inquiry
                </h3>
                <p className="text-xs text-[#665B58] mt-1">
                  Fill out the form below and our Chaubepur store representative will get back to you promptly.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Radhika Sharma"
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#D9C4B5] text-xs text-[#231815] focus:outline-hidden focus:ring-2 focus:ring-[#5A1827]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9876543210"
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#D9C4B5] text-xs text-[#231815] focus:outline-hidden focus:ring-2 focus:ring-[#5A1827]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">
                  Product / Fabric Interest (Optional)
                </label>
                <input
                  type="text"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  placeholder="e.g. Silk Saree / Anarkali Suit / Kurtis"
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#D9C4B5] text-xs text-[#231815] focus:outline-hidden focus:ring-2 focus:ring-[#5A1827]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3E3D] mb-1">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what style or size you are looking for..."
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#D9C4B5] text-xs text-[#231815] focus:outline-hidden focus:ring-2 focus:ring-[#5A1827]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-[#5A1827] text-white text-xs font-semibold hover:bg-[#42101B] transition-colors shadow-md disabled:opacity-50"
              >
                {loading ? 'Sending Inquiry...' : 'Submit Inquiry'}
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4 my-auto">
              <CheckCircle2 className="w-14 h-14 text-[#27AE60] mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-[#5A1827]">
                Inquiry Received!
              </h3>
              <p className="text-xs text-[#524542]">
                Thank you for contacting Pranjul Fashion House. We will reach out to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-xl bg-[#5A1827] text-white text-xs font-semibold"
              >
                Send Another Inquiry
              </button>
            </div>
          )}
        </div>

      </div>

      <StoreInfoBar />
    </div>
  );
}
