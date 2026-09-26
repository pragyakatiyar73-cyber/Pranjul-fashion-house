import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

const AboutContactPage = ({ storeSettings }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    interest: 'General Inquiry',
  });

  const whatsappNum = storeSettings?.whatsappNumber || '+91 98765 43210';
  const cleanWhatsapp = whatsappNum.replace(/[^0-9]/g, '');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', message: '', interest: 'General Inquiry' });
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* About Header */}
      <div className="bg-gradient-to-r from-[#701a2b] to-slate-900 rounded-3xl p-6 sm:p-12 text-white shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            ABOUT OUR STORE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold">
            Pranjul Fashion House
          </h1>
          <p className="text-amber-300 font-serif italic text-lg sm:text-xl">
            “{storeSettings?.tagline || 'Style for Every Generation'}”
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Located in <strong>Chaubepur, Kanpur Nagar, Uttar Pradesh</strong>, Pranjul Fashion House is a family fashion showroom providing authentic ethnic wear, trendy western outfits, formal menswear, and cute kids collections.
          </p>
        </div>
      </div>

      {/* Grid: Store Info Cards & Location */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-slate-900">
            Store Contact Details
          </h2>

          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-xs space-y-2">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-rose-50 text-[#701a2b] rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-slate-900 text-sm">Store Address:</strong>
                <p className="text-xs text-slate-600 mt-0.5">
                  {storeSettings?.location || 'Chaubepur, Kanpur Nagar, Uttar Pradesh - 209203'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-xs space-y-2">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-slate-900 text-sm">WhatsApp Support:</strong>
                <p className="text-xs text-slate-600 mt-0.5">{whatsappNum}</p>
                <a
                  href={`https://wa.me/${cleanWhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-emerald-700 font-bold hover:underline"
                >
                  Chat directly on WhatsApp →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-xs space-y-2">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-amber-50 text-amber-800 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-slate-900 text-sm">Phone Number:</strong>
                <p className="text-xs text-slate-600 mt-0.5">{storeSettings?.phoneNumber || '+91 98765 43210'}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-xs space-y-2">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-purple-50 text-purple-800 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-slate-900 text-sm">Store Timings:</strong>
                <p className="text-xs text-slate-600 mt-0.5">
                  {storeSettings?.openingHours || 'Monday to Sunday: 10:00 AM - 9:00 PM'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form & Google Maps */}
        <div className="lg:col-span-7 space-y-6">
          {/* Form */}
          <div className="bg-white rounded-3xl border border-rose-100 p-6 sm:p-8 shadow-xs">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
              Send Us a Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Have questions about size availability, festival discounts, or bulk family shopping? Leave us a message.
            </p>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-4 rounded-2xl flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <strong className="block font-bold">Thank you for reaching out!</strong>
                  <span className="text-xs">We have received your message and will respond shortly on WhatsApp or Phone.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-[#701a2b] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-[#701a2b] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Inquiry Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-[#701a2b] focus:outline-hidden"
                  >
                    <option value="General Inquiry">General Store Inquiry</option>
                    <option value="Saree & Suit Availability">Saree & Suit Availability</option>
                    <option value="Wedding & Festival Bulk Wear">Wedding & Festival Bulk Wear</option>
                    <option value="Menswear Inquiry">Menswear & Formal Shirts</option>
                    <option value="Kids Collection">Kids Collection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Tell us what clothing item or size you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-[#701a2b] focus:outline-hidden"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#701a2b] hover:bg-rose-900 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Store</span>
                </button>
              </form>
            )}
          </div>

          {/* Google Maps Location Embed */}
          <div className="bg-white rounded-3xl border border-rose-100 p-4 shadow-xs overflow-hidden">
            <h4 className="font-serif font-bold text-slate-900 text-base mb-3 px-2">
              Google Maps Location — Chaubepur, Kanpur Nagar
            </h4>
            <div className="rounded-2xl overflow-hidden border border-slate-200">
              <iframe
                title="Google Maps Location"
                src={storeSettings?.googleMapsEmbedUrl || "https://maps.google.com/maps?q=Chaubepur,+Kanpur+Nagar,+Uttar+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContactPage;
