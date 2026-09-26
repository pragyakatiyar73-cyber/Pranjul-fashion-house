import React from 'react';
import { Sparkles, HeartHandshake, CheckCircle2, MessageCircle, Percent, Gift, Award } from 'lucide-react';

const WeddingBulkSection = ({ storeSettings, language = 'en' }) => {
  const isHi = language === 'hi';
  const whatsappNum = storeSettings?.whatsappNumber || '+91 98765 43210';
  const cleanWhatsapp = whatsappNum.replace(/[^0-9]/g, '');

  const weddingMsg = encodeURIComponent(
    isHi
      ? 'नमस्ते प्रांजुल फैशन हाउस, मुझे शादी-ब्याह / पारिवारिक कार्यक्रम के लिए बल्क कपड़ों की खरीदारी (Wedding Trousseau & Family Bulk Shopping) के बारे में जानकारी और डिस्काउंट रेट चाहिए।'
      : 'Hello Pranjul Fashion House, I would like to inquire about Wedding & Family Bulk Shopping discounts and reserve a showroom consultation.'
  );

  const weddingWhatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${weddingMsg}`;

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#500c1b] via-[#6b1426] to-[#8a1d33] text-white p-6 sm:p-10 shadow-xl border border-rose-900/60">
        
        {/* Background Decorative Circles */}
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-rose-500/10 blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-amber-500/10 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-extrabold text-[11px] sm:text-xs px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isHi ? 'शादी-ब्याह और त्योहार विशेष' : 'Wedding & Family Function Special'}</span>
            </div>

            <h3 className="font-serif font-bold text-2xl sm:text-4xl leading-tight">
              {isHi
                ? 'शादी और बड़े पारिवारिक कार्यक्रमों के लिए बल्क डिस्काउंट'
                : 'Wedding Trousseau & Bulk Family Shopping Assistant'}
            </h3>

            <p className="text-rose-100 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
              {isHi
                ? 'पूरे परिवार (दूल्हा, दुल्हन, रिश्तेदार) के लिए एक ही छत के नीचे शानदार ट्रेडिशनल कपड़े। 10+ सूट, साड़ी या कुर्ते खरीदने पर पाएं विशेष फैमिली बल्क ऑफर!'
                : 'Get exclusive bulk savings for your entire family wedding shopping (Bride, Groom & Relatives). Special tiered pricing for bulk orders of 10+ Sarees, Suits, or Kurta sets.'}
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 bg-rose-950/60 p-2.5 rounded-xl border border-rose-800/80">
                <Percent className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{isHi ? 'बल्क खरीद पर अतिरिक्त छूट' : 'Special Bulk Discounts'}</span>
              </div>
              <div className="flex items-center gap-2 bg-rose-950/60 p-2.5 rounded-xl border border-rose-800/80">
                <Gift className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{isHi ? 'मैचिंग पैकिंग सहायता' : 'Gift Packing Assistance'}</span>
              </div>
              <div className="flex items-center gap-2 bg-rose-950/60 p-2.5 rounded-xl border border-rose-800/80">
                <Award className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{isHi ? 'पर्सनल शोरूम गाइड' : 'Personal Styling Assistant'}</span>
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center mx-auto font-bold shadow-md">
              <HeartHandshake className="w-6 h-6" />
            </div>

            <h4 className="font-serif font-bold text-base text-amber-200">
              {isHi ? 'शादी की खरीदारी बुक करें' : 'Book Bulk Consultation'}
            </h4>

            <p className="text-[11px] text-rose-100">
              {isHi ? 'चौबेपुर स्टोर में स्पेशल अटेंडेंट रखें' : 'Direct VIP assistance at Chaubepur store'}
            </p>

            <a
              href={weddingWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isHi ? 'व्हाट्सएप पर संपर्क करें' : 'Inquire Bulk Rates on WhatsApp'}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WeddingBulkSection;
