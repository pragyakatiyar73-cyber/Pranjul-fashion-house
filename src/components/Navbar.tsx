'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Heart, MessageCircle, Menu, X, Flower2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { getWhatsAppLink } from '../lib/utils';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { wishlistCount } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'Products', href: '/products' },
    { name: 'New Arrivals', href: '/products?filter=new' },
    { name: 'Offers', href: '/offers' },
    { name: 'About Us', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EADED2] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-[#5A1827] flex items-center justify-center text-[#F7D6D0] shadow-sm group-hover:bg-[#42101B] transition-colors">
            <Flower2 className="w-6 h-6" />
          </div>
          <div>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#5A1827] block leading-none">
              Pranjul Fashion House
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#8C665D] font-medium block mt-0.5">
              Style for Every You
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#5A1827] ${
                  isActive
                    ? 'text-[#5A1827] font-semibold border-b-2 border-[#5A1827] pb-1'
                    : 'text-[#4A3E3D]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right side icons */}
        <div className="flex items-center gap-3">
          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-full text-[#5A1827] hover:bg-[#F2E8DF] transition-colors"
            title="Search Products"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Wishlist Link */}
          <Link
            href="/wishlist"
            className="p-2 rounded-full text-[#5A1827] hover:bg-[#F2E8DF] transition-colors relative"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#5A1827] text-white text-[10px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* WhatsApp Direct */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1EBE5D] transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#5A1827] hover:bg-[#F2E8DF]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Expanded Search Bar Drawer */}
      {searchOpen && (
        <div className="border-t border-[#EADED2] bg-[#F7F0E8] p-4 animate-fade-in">
          <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto relative flex items-center">
            <input
              type="text"
              placeholder="Search sarees, suits, kurtis, western dresses, formal, wedding..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-4 pr-24 rounded-full bg-white border border-[#D9C4B5] text-sm text-[#231815] focus:outline-hidden focus:ring-2 focus:ring-[#5A1827]"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-1 px-4 py-1.5 rounded-full bg-[#5A1827] text-white text-xs font-semibold hover:bg-[#42101B]"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EADED2] bg-[#FAF7F2] px-4 py-4 space-y-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#4A3E3D] hover:bg-[#F2E8DF] hover:text-[#5A1827]"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
