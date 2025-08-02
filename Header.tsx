'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <i className="ri-diamond-line text-white text-lg"></i>
            </div>
            <span className="font-['Pacifico'] text-2xl text-gray-800">NovaNFT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Home</Link>
            <Link href="/explore" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Explore NFTs</Link>
            <Link href="/creators" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Creators</Link>
            <Link href="/blog" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Learn</Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Contact</Link>
          </nav>

          {/* Connect Wallet Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all cursor-pointer whitespace-nowrap">
              <i className="ri-wallet-line mr-2"></i>
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Home</Link>
              <Link href="/explore" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Explore NFTs</Link>
              <Link href="/creators" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Creators</Link>
              <Link href="/blog" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Learn</Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">Contact</Link>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all cursor-pointer whitespace-nowrap w-fit">
                <i className="ri-wallet-line mr-2"></i>
                Connect Wallet
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}