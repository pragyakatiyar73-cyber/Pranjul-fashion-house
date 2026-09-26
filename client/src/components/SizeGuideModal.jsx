import React, { useState } from 'react';
import { X, Ruler, CheckCircle2, Info, Sparkles, MapPin } from 'lucide-react';

const SizeGuideModal = ({ isOpen, onClose, language = 'en' }) => {
  if (!isOpen) return null;

  const isHi = language === 'hi';
  const [activeTab, setActiveTab] = useState('women');

  const womenKurtiSizes = [
    { size: 'S', bust: '36 in', waist: '32 in', hip: '38 in', shoulder: '14.5 in', length: '42 in' },
    { size: 'M', bust: '38 in', waist: '34 in', hip: '40 in', shoulder: '15.0 in', length: '43 in' },
    { size: 'L', bust: '40 in', waist: '36 in', hip: '42 in', shoulder: '15.5 in', length: '44 in' },
    { size: 'XL', bust: '42 in', waist: '38 in', hip: '44 in', shoulder: '16.0 in', length: '44 in' },
    { size: 'XXL', bust: '44 in', waist: '40 in', hip: '46 in', shoulder: '16.5 in', length: '45 in' },
    { size: '3XL', bust: '46 in', waist: '42 in', hip: '48 in', shoulder: '17.0 in', length: '45 in' },
  ];

  const menShirtSizes = [
    { size: '38 (S)', chest: '38 in', shoulder: '17.0 in', length: '28.5 in', sleeve: '24.5 in' },
    { size: '40 (M)', chest: '40 in', shoulder: '17.5 in', length: '29.0 in', sleeve: '25.0 in' },
    { size: '42 (L)', chest: '42 in', shoulder: '18.0 in', length: '29.5 in', sleeve: '25.5 in' },
    { size: '44 (XL)', chest: '44 in', shoulder: '18.5 in', length: '30.0 in', sleeve: '26.0 in' },
    { size: '46 (XXL)', chest: '46 in', shoulder: '19.0 in', length: '30.5 in', sleeve: '26.5 in' },
  ];

  const kidsAgeSizes = [
    { age: '1-2 Years', sizeNo: '20', height: '85 - 90 cm', chest: '20 - 21 in' },
    { age: '3-4 Years', sizeNo: '22', height: '95 - 105 cm', chest: '22 - 23 in' },
    { age: '5-6 Years', sizeNo: '24-26', height: '110 - 120 cm', chest: '24 - 25 in' },
    { age: '7-8 Years', sizeNo: '28-30', height: '125 - 135 cm', chest: '26 - 27 in' },
    { age: '9-10 Years', sizeNo: '32', height: '138 - 145 cm', chest: '28 - 29 in' },
    { age: '11-12 Years', sizeNo: '34-36', height: '148 - 155 cm', chest: '30 - 32 in' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-rose-100 flex flex-col my-auto max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#6b1426] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">
                {isHi ? 'भारतीय कपड़ों की साइज़ गाइड' : 'Indian Clothing Size Measurement Guide'}
              </h3>
              <p className="text-[11px] text-rose-200 font-medium">
                {isHi
                  ? 'कुर्ती, साड़ी, शर्ट और बच्चों के कपड़ों की सटीक माप'
                  : 'Accurate fitting measurements for Kurtis, Sarees, Shirts & Kids'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-rose-200 hover:text-white p-1 rounded-full hover:bg-rose-900/60 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-stone-100 px-6 py-3 border-b border-stone-200 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('women')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeTab === 'women'
                ? 'bg-[#6b1426] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-200'
            }`}
          >
            {isHi ? 'महिलाएं (कुर्ती & सूट)' : 'Women (Kurtis & Suits)'}
          </button>
          <button
            onClick={() => setActiveTab('men')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeTab === 'men'
                ? 'bg-[#6b1426] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-200'
            }`}
          >
            {isHi ? 'पुरुष (शर्ट & कुर्ता)' : 'Men (Shirts & Kurtas)'}
          </button>
          <button
            onClick={() => setActiveTab('saree')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeTab === 'saree'
                ? 'bg-[#6b1426] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-200'
            }`}
          >
            {isHi ? 'साड़ी साइज़ जानकारी' : 'Saree Standard Spec'}
          </button>
          <button
            onClick={() => setActiveTab('kids')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              activeTab === 'kids'
                ? 'bg-[#6b1426] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-200'
            }`}
          >
            {isHi ? 'बच्चे (Kids Size)' : 'Kids Wear'}
          </button>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {/* WOMEN TAB */}
          {activeTab === 'women' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
                <span className="font-semibold flex items-center gap-1 text-[#6b1426]">
                  <Sparkles className="w-4 h-4" />
                  {isHi ? 'कुर्ती साइज़ चार्ट (इंच में माप)' : 'Kurti Size Specification (Inches)'}
                </span>
                <span className="font-bold text-emerald-800">
                  {isHi ? 'रेडी-टू-वियर कम्फर्ट फिट' : 'Comfortable Regular Fit'}
                </span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-stone-200">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#6b1426] text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-2.5">Size</th>
                      <th className="p-2.5">Bust</th>
                      <th className="p-2.5">Waist</th>
                      <th className="p-2.5">Hip</th>
                      <th className="p-2.5">Shoulder</th>
                      <th className="p-2.5">Length</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 font-medium">
                    {womenKurtiSizes.map((row, idx) => (
                      <tr key={row.size} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                        <td className="p-2.5 font-bold text-[#6b1426]">{row.size}</td>
                        <td className="p-2.5 text-stone-800">{row.bust}</td>
                        <td className="p-2.5 text-stone-600">{row.waist}</td>
                        <td className="p-2.5 text-stone-600">{row.hip}</td>
                        <td className="p-2.5 text-stone-600">{row.shoulder}</td>
                        <td className="p-2.5 text-stone-600">{row.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* MEN TAB */}
          {activeTab === 'men' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-600 bg-blue-50 p-3 rounded-xl border border-blue-200">
                <span className="font-semibold flex items-center gap-1 text-blue-900">
                  <Sparkles className="w-4 h-4" />
                  {isHi ? 'पुरुषों की शर्ट एवं कुर्ता माप (इंच में)' : 'Men Shirts & Kurta Chart (Inches)'}
                </span>
                <span className="font-bold text-blue-800">Standard Collar Fit</span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-stone-200">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#6b1426] text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-2.5">Size Tag</th>
                      <th className="p-2.5">Chest</th>
                      <th className="p-2.5">Shoulder</th>
                      <th className="p-2.5">Shirt Length</th>
                      <th className="p-2.5">Sleeve</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 font-medium">
                    {menShirtSizes.map((row, idx) => (
                      <tr key={row.size} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                        <td className="p-2.5 font-bold text-[#6b1426]">{row.size}</td>
                        <td className="p-2.5 text-stone-800">{row.chest}</td>
                        <td className="p-2.5 text-stone-600">{row.shoulder}</td>
                        <td className="p-2.5 text-stone-600">{row.length}</td>
                        <td className="p-2.5 text-stone-600">{row.sleeve}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SAREE TAB */}
          {activeTab === 'saree' && (
            <div className="space-y-3 bg-amber-50/60 p-4 rounded-2xl border border-amber-200 text-xs">
              <h4 className="font-serif font-bold text-stone-900 text-sm text-[#6b1426] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                {isHi ? 'साड़ी की मानक लंबाई और ब्लाउज की जानकारी' : 'Standard Saree Length & Specifications'}
              </h4>
              <ul className="space-y-2 text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Saree Length:</strong> Standard 5.5 Meters (Full Length)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Blouse Piece:</strong> Unstitched 0.80 Meters (Included attached with saree)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Border Width:</strong> Standard 44 Inches</span>
                </li>
              </ul>
            </div>
          )}

          {/* KIDS TAB */}
          {activeTab === 'kids' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-600 bg-amber-50 p-3 rounded-xl border border-amber-200">
                <span className="font-semibold flex items-center gap-1 text-amber-900">
                  <Sparkles className="w-4 h-4" />
                  {isHi ? 'बच्चों के उम्र अनुसार साइज़ चार्ट' : 'Kids Age Wise Size Chart'}
                </span>
                <span className="font-bold text-amber-800">Boys & Girls</span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-stone-200">
                <table className="w-full text-xs text-left">
                  <tbody className="divide-y divide-stone-200 font-medium">
                    {kidsAgeSizes.map((row, idx) => (
                      <tr key={row.age} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                        <td className="p-2.5 font-bold text-[#6b1426]">{row.age}</td>
                        <td className="p-2.5 text-stone-800">Size No: {row.sizeNo}</td>
                        <td className="p-2.5 text-stone-600">Height: {row.height}</td>
                        <td className="p-2.5 text-stone-600">Chest: {row.chest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tailoring & Alteration Guarantee Note */}
          <div className="bg-[#faf5f0] p-4 rounded-2xl border border-rose-200 text-xs flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#6b1426] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-stone-900">
                {isHi ? 'चौबेपुर स्टोर अल्टरेशन सुविधा' : 'Free In-Store Alteration at Chaubepur'}
              </h5>
              <p className="text-stone-600 mt-0.5 leading-relaxed">
                {isHi
                  ? 'अगर साइज़ में थोड़ा फर्क हो, तो हमारे चौबेपुर स्टोर पर फिटिंग अल्टरेशन की सुविधा उपलब्ध है।'
                  : 'If any outfit requires minor sleeve or waist adjustment, our Chaubepur store team provides quick fitting alterations right on site!'}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#6b1426] hover:bg-[#520f1d] text-white font-bold text-xs px-6 py-2.5 rounded-xl transition cursor-pointer"
          >
            {isHi ? 'ठीक है (बंद करें)' : 'Got It (Close Guide)'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SizeGuideModal;
