'use client';

import React, { useState } from 'react';
import { Flower2 } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackText
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div className={`bg-gradient-to-br from-[#5A1827] via-[#3E0F1A] to-[#6B1D2F] text-[#F7D6D0] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(#F7D6D0_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        <div className="w-14 h-14 rounded-full bg-[#FAF7F2]/10 border border-[#F7D6D0]/30 flex items-center justify-center mb-3 shadow-inner z-10">
          <Flower2 className="w-7 h-7 text-[#F7D6D0] animate-pulse" />
        </div>
        <span className="font-serif text-lg font-bold text-white z-10 line-clamp-1">
          {fallbackText || alt || 'Pranjul Fashion House'}
        </span>
        <span className="text-[10px] tracking-widest uppercase text-[#F7D6D0]/80 mt-1 z-10">
          Chaubepur Boutique
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#FBE3D5]/30 ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBE3D5]/20 via-[#F7D6D0]/40 to-[#FBE3D5]/20 animate-pulse" />
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
