'use client';

import React, { useState } from 'react';
import { Flower2, Sparkles } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  type?: 'hero' | 'category' | 'product';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  type = 'product'
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    if (type === 'hero') {
      return (
        <div className={`relative bg-gradient-to-br from-[#5A1827] via-[#42101B] to-[#6B1D2F] text-[#F7D6D0] flex flex-col justify-between p-8 sm:p-12 overflow-hidden ${className}`}>
          {/* Subtle floral background SVG pattern */}
          <svg className="absolute -right-12 -bottom-12 w-96 h-96 opacity-15 text-[#F7D6D0]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          
          <div className="flex items-center justify-between z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2]/10 border border-[#F7D6D0]/30 text-xs font-bold uppercase tracking-widest text-[#F7D6D0]">
              <Sparkles className="w-3.5 h-3.5" /> Boutique Exclusive
            </span>
            <Flower2 className="w-8 h-8 text-[#F7D6D0] opacity-80" />
          </div>

          <div className="space-y-3 z-10 my-auto py-6">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              {fallbackText || alt || 'Pranjul Fashion House'}
            </h3>
            <p className="font-serif text-base text-[#F7D6D0] italic">
              Crafted in Silk, Chiffon & Pure Cotton Fabrics
            </p>
          </div>

          <div className="pt-4 border-t border-[#F7D6D0]/20 flex items-center justify-between text-xs text-[#F7D6D0]/80 z-10">
            <span>Chaubepur, Uttar Pradesh</span>
            <span>Style for Every You</span>
          </div>
        </div>
      );
    }

    return (
      <div className={`bg-gradient-to-br from-[#5A1827] via-[#3E0F1A] to-[#5A1827] text-[#F7D6D0] flex flex-col items-center justify-center p-4 text-center relative overflow-hidden ${className}`}>
        <div className="w-12 h-12 rounded-full bg-white/10 border border-[#F7D6D0]/30 flex items-center justify-center mb-2 z-10">
          <Flower2 className="w-6 h-6 text-[#F7D6D0]" />
        </div>
        <span className="font-serif text-xs font-bold text-white z-10 line-clamp-1">
          {fallbackText || alt}
        </span>
        <span className="text-[9px] uppercase tracking-widest text-[#F7D6D0]/70 mt-0.5 z-10">
          Pranjul Fashion
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#FBE3D5]/20 ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBE3D5]/30 via-[#F7D6D0]/50 to-[#FBE3D5]/30 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};
