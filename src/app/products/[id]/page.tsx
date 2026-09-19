'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  MessageCircle,
  Phone,
  Calendar,
  Heart,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Tag,
  ShieldCheck,
  Share2
} from 'lucide-react';
import { initialProducts, initialStoreSettings } from '../../../data/demoData';
import { formatPrice, getWhatsAppLink, getCallLink } from '../../../lib/utils';
import { useWishlist } from '../../../context/WishlistContext';
import { ReserveModal } from '../../../components/ReserveModal';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const productId = params?.id as string;
  const product = initialProducts.find((p) => p.id === productId || p._id === productId) || initialProducts[0];

  const [selectedImage, setSelectedImage] = useState(product.images[0] || '');
  const [reserveModalOpen, setReserveModalOpen] = useState(false);

  const isWishlisted = isInWishlist(product.id || product._id);

  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto space-y-8">
      {/* Breadcrumb & Back */}
      <div className="flex items-center justify-between text-xs text-[#7A6B68]">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-1 hover:text-[#5A1827] font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Catalogue
        </button>
        <div className="flex items-center gap-1.5">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:underline">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[#231815] font-semibold truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl p-6 lg:p-10 border border-[#EADED2] shadow-xs">
        
        {/* Left: Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#EADED2]">
            <img
              src={selectedImage || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Wishlist Heart */}
            <button
              onClick={() => toggleWishlist(product.id || product._id)}
              className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-colors shadow-md ${
                isWishlisted
                  ? 'bg-[#5A1827] text-white'
                  : 'bg-white/80 text-[#5A1827] hover:bg-white'
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
            </button>
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                    (selectedImage || product.images[0]) === img
                      ? 'border-[#5A1827] ring-2 ring-[#5A1827]/30'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info & Actions */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F7D6D0] text-[#5A1827] text-xs font-bold uppercase tracking-wider">
              {product.category}
            </span>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5A1827] leading-tight">
              {product.name}
            </h1>

            {/* Price & Stock status */}
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-3xl font-bold text-[#5A1827]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-lg text-[#8C7A77] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="text-xs font-bold text-[#27AE60] bg-[#E8F8F0] px-2.5 py-1 rounded-md">
                  Save {discountPercent}%
                </span>
              )}
            </div>

            {/* In stock badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8F8F0] text-[#27AE60] text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>In Stock at Chaubepur Boutique</span>
            </div>

            <p className="text-sm text-[#524542] leading-relaxed border-t border-[#F2E8DF] pt-4">
              {product.description}
            </p>

            {/* Attributes Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs bg-[#FAF7F2] p-4 rounded-2xl border border-[#EADED2]">
              <div>
                <span className="text-[#8C7A77] font-medium block">Fabric / Material:</span>
                <span className="font-bold text-[#231815]">{product.fabric}</span>
              </div>
              <div>
                <span className="text-[#8C7A77] font-medium block">Colour:</span>
                <span className="font-bold text-[#231815]">{product.colour}</span>
              </div>
              <div>
                <span className="text-[#8C7A77] font-medium block">Occasion:</span>
                <span className="font-bold text-[#231815]">{product.occasion}</span>
              </div>
              <div>
                <span className="text-[#8C7A77] font-medium block">Available Sizes:</span>
                <span className="font-bold text-[#231815]">{product.sizes.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Core Inquiry & Reservation Buttons */}
          <div className="space-y-3 pt-4 border-t border-[#F2E8DF]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={getWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1EBE5D] transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                onClick={() => setReserveModalOpen(true)}
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#5A1827] text-white font-bold text-sm hover:bg-[#42101B] transition-colors shadow-md"
              >
                <Calendar className="w-5 h-5" />
                <span>Reserve for Store Visit</span>
              </button>
            </div>

            <a
              href={getCallLink()}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#5A1827] text-[#5A1827] text-xs font-semibold hover:bg-[#F2E8DF] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Boutique Store Directly ({initialStoreSettings.phone})</span>
            </a>

            {/* Store Guarantee Box */}
            <div className="flex items-center justify-between text-[11px] text-[#7A6B68] pt-2">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#5A1827]" />
                <span>Chaubepur, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5A1827]" />
                <span>100% Quality Checked</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Reserve Modal */}
      {reserveModalOpen && (
        <ReserveModal product={product} onClose={() => setReserveModalOpen(false)} />
      )}
    </div>
  );
}
