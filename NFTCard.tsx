'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NFT {
  id: number;
  title: string;
  creator: string;
  price: string;
  likes: number;
  category: string;
  date: string;
  image: string;
}

interface NFTCardProps {
  nft: NFT;
}

export default function NFTCard({ nft }: NFTCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(nft.likes);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Link href={`/nft/${nft.id}`}>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group cursor-pointer">
        <div className="relative overflow-hidden">
          <img 
            src={nft.image} 
            alt={nft.title}
            className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <button 
              onClick={handleLike}
              className={`w-10 h-10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all cursor-pointer ${
                isLiked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <i className={`ri-heart-${isLiked ? 'fill' : 'line'}`}></i>
            </button>
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {nft.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
            {nft.title}
          </h3>
          <p className="text-gray-600 mb-3">by {nft.creator}</p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-bold text-purple-600">{nft.price}</div>
            <div className="flex items-center space-x-1 text-gray-500">
              <i className="ri-heart-line"></i>
              <span className="text-sm">{likeCount}</span>
            </div>
          </div>
          
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-shopping-cart-line mr-2"></i>
            Place Bid
          </button>
        </div>
      </div>
    </Link>
  );
}