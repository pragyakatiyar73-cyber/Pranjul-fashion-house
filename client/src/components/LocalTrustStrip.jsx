import React from 'react';
import { Star, ShieldCheck, MapPin, Users, Heart, Quote } from 'lucide-react';

const LocalTrustStrip = ({ language = 'en' }) => {
  const isHi = language === 'hi';

  const testimonials = [
    {
      name: isHi ? 'सुनीता शर्मा' : 'Sunita Sharma',
      location: isHi ? 'चौबेपुर कलां, कानपुर' : 'Chaubepur Kalan, Kanpur',
      rating: 5,
      review: isHi
        ? 'प्रांजुल फैशन हाउस से हमने पूरे परिवार के लिए नवरात्रि और शादी के कपड़े लिए। फैब्रिक की क्वालिटी बेहतरीन है और दाम भी जायज हैं।'
        : 'Bought festival dresses for our entire family from Pranjul Fashion House. Fabric quality is genuine and rates are very affordable.',
      tag: isHi ? 'साड़ी & कुर्ती' : 'Sarees & Kurtis'
    },
    {
      name: isHi ? 'राजेश वर्मा' : 'Rajesh Verma',
      location: isHi ? 'शिवराजपुर, कानपुर देहात' : 'Shivrajpur, Kanpur Dehat',
      rating: 5,
      review: isHi
        ? 'शर्ट और कुर्ते का कलेक्शन बहुत बढ़िया है। दुकान के मालिक का व्यवहार बहुत सहयोगी है और कपड़ों की अल्टरेशन भी तुरंत कर दी।'
        : 'Excellent men shirt and kurta collection. Owner behavior is polite and store staff fitted our shirts promptly on site.',
      tag: isHi ? 'मेंस वियर' : 'Men Wear'
    },
    {
      name: isHi ? 'पूजा गुप्ता' : 'Pooja Gupta',
      location: isHi ? 'कल्याणपुर, कानपुर' : 'Kalyanpur, Kanpur',
      rating: 5,
      review: isHi
        ? 'बच्चों के कपड़े यहाँ बहुत टिकाऊ और कम्फर्टेबल मिलते हैं। हर त्यौहार पर हम यही से शॉपिंग करते हैं।'
        : 'Kids clothing is durable and comfortable. We visit the Chaubepur store for every major festival and family occasion.',
      tag: isHi ? 'किड्स कलेक्शन' : 'Kids Collection'
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-6 bg-[#faf6f0] border-y border-rose-200/60">
      
      {/* Top Banner Heading */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#6b1426] text-amber-300 flex items-center justify-center font-bold shadow-sm shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-1 text-stone-800 font-extrabold text-sm">4.9 / 5.0</span>
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 leading-tight">
              {isHi
                ? 'चौबेपुर & कानपुर नगर के 10,000+ परिवारों का भरोसा'
                : 'Trusted by 10,000+ Families in Chaubepur & Kanpur'}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-300 shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>{isHi ? '100% ओरिजिनल क्वालिटी गारंटी' : '100% Authentic Quality Guarantee'}</span>
        </div>
      </div>

      {/* 3 Local Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-[#6b1426] bg-rose-50 px-2 py-0.5 rounded uppercase tracking-wider">
                  {t.tag}
                </span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-xs text-stone-600 italic leading-relaxed">
                "{t.review}"
              </p>
            </div>

            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="font-bold text-stone-900">{t.name}</span>
              <span className="text-[11px] text-stone-500 flex items-center gap-0.5">
                <MapPin className="w-3 h-3 text-[#6b1426]" />
                {t.location}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default LocalTrustStrip;
