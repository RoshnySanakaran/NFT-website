'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <i className="ri-diamond-line text-white text-lg"></i>
              </div>
              <span className="font-['Pacifico'] text-2xl">NovaNFT</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              A beginner-friendly NFT marketplace designed to help you explore and learn about the world of digital collectibles and blockchain technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <i className="ri-twitter-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <i className="ri-discord-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <i className="ri-github-line"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/explore" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Explore NFTs</Link></li>
              <li><Link href="/creators" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Creators</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Learn</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Roshny Sankaran. All rights reserved. This NFT Marketplace website is a personal portfolio project. Content used is for educational demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}