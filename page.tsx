'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
             backgroundImage: `url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1920&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/70 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="w-full max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover, Collect & Trade
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Extraordinary NFTs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Welcome to NovaNFT - your gateway to the world of digital collectibles. Explore unique artworks, connect with creators, and learn about blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/explore">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all cursor-pointer whitespace-nowrap">
                  <i className="ri-search-line mr-2"></i>
                  Explore NFTs
                </button>
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-play-circle-line mr-2"></i>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">12.5K+</div>
              <div className="text-gray-600">Artworks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">3.2K+</div>
              <div className="text-gray-600">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">8.7K+</div>
              <div className="text-gray-600">Collections</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">45K+</div>
              <div className="text-gray-600">Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured NFTs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured NFTs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most popular and trending digital collectibles from talented creators worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                id: 1,
                title: "Cosmic Dreams #001",
                creator: "Alex Chen",
                price: "2.5 ETH",
                image: "https://readdy.ai/api/search-image?query=Abstract%20cosmic%20digital%20art%20with%20swirling%20galaxies%20and%20nebulae%2C%20vibrant%20purple%20and%20blue%20colors%2C%20geometric%20patterns%2C%20futuristic%20design%2C%20clean%20background%2C%20high%20resolution%20digital%20artwork%2C%20modern%20NFT%20style%2C%20ethereal%20glow%20effects&width=400&height=400&seq=nft-1&orientation=squarish"
              },
              {
                id: 2,
                title: "Digital Nature #042",
                creator: "Sarah Williams",
                price: "1.8 ETH",
                image: "https://readdy.ai/api/search-image?query=Digital%20nature%20artwork%20with%20glowing%20trees%20and%20plants%2C%20bioluminescent%20effects%2C%20neon%20green%20and%20blue%20accents%2C%20futuristic%20botanical%20design%2C%20clean%20minimal%20background%2C%20high%20quality%20digital%20art%2C%20NFT%20collection%20style&width=400&height=400&seq=nft-2&orientation=squarish"
              },
              {
                id: 3,
                title: "Cyber Punk City",
                creator: "Mike Rodriguez",
                price: "3.2 ETH",
                image: "https://readdy.ai/api/search-image?query=Cyberpunk%20cityscape%20with%20neon%20lights%20and%20futuristic%20buildings%2C%20dark%20atmosphere%20with%20pink%20and%20blue%20neon%20glow%2C%20high-tech%20architecture%2C%20digital%20art%20style%2C%20clean%20composition%2C%20NFT%20artwork%20aesthetic&width=400&height=400&seq=nft-3&orientation=squarish"
              },
              {
                id: 4,
                title: "Abstract Emotions",
                creator: "Emma Davis",
                price: "2.1 ETH",
                image: "https://readdy.ai/api/search-image?query=Abstract%20emotional%20digital%20art%20with%20flowing%20colors%20and%20shapes%2C%20warm%20gradient%20tones%2C%20artistic%20expression%2C%20modern%20digital%20painting%20style%2C%20clean%20background%2C%20NFT%20collection%20artwork%2C%20vibrant%20composition&width=400&height=400&seq=nft-4&orientation=squarish"
              }
            ].map((nft) => (
              <div key={nft.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={nft.image} 
                    alt={nft.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all cursor-pointer">
                      <i className="ri-heart-line"></i>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{nft.title}</h3>
                  <p className="text-gray-600 mb-3">by {nft.creator}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-purple-600">{nft.price}</div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/explore">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap">
                View All NFTs
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Creators Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Creators</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the most talented and successful creators in our NFT marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Chen",
                username: "@alexcreates",
                artworks: 247,
                followers: "12.5K",
                avatar: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20Asian%20male%20digital%20artist%2C%20creative%20modern%20styling%2C%20clean%20studio%20lighting%2C%20artistic%20background%20with%20digital%20art%20elements%2C%20professional%20headshot%2C%20contemporary%20look&width=200&height=200&seq=creator-1&orientation=squarish"
              },
              {
                name: "Sarah Williams",
                username: "@sarahdigital",
                artworks: 189,
                followers: "9.8K",
                avatar: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20female%20digital%20artist%2C%20creative%20modern%20styling%2C%20clean%20studio%20lighting%2C%20artistic%20background%20with%20digital%20art%20elements%2C%20professional%20headshot%2C%20contemporary%20look&width=200&height=200&seq=creator-2&orientation=squarish"
              },
              {
                name: "Mike Rodriguez",
                username: "@mikeartist",
                artworks: 156,
                followers: "8.2K",
                avatar: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20Hispanic%20male%20digital%20artist%2C%20creative%20modern%20styling%2C%20clean%20studio%20lighting%2C%20artistic%20background%20with%20digital%20art%20elements%2C%20professional%20headshot%2C%20contemporary%20look&width=200&height=200&seq=creator-3&orientation=squarish"
              }
            ].map((creator, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 cursor-pointer">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={creator.avatar} 
                    alt={creator.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{creator.name}</h3>
                <p className="text-purple-600 mb-4">{creator.username}</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{creator.artworks}</div>
                    <div className="text-gray-600 text-sm">Artworks</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{creator.followers}</div>
                    <div className="text-gray-600 text-sm">Followers</div>
                  </div>
                </div>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with NFTs in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect Your Wallet",
                description: "Link your digital wallet to start exploring and trading NFTs securely",
                icon: "ri-wallet-line"
              },
              {
                step: "02",
                title: "Discover NFTs",
                description: "Browse through thousands of unique digital artworks and collectibles",
                icon: "ri-search-line"
              },
              {
                step: "03",
                title: "Buy & Collect",
                description: "Purchase your favorite NFTs and build your digital art collection",
                icon: "ri-shopping-cart-line"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${item.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-sm font-semibold text-purple-600 mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your NFT Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of collectors and creators in the world's most beginner-friendly NFT marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all cursor-pointer whitespace-nowrap">
              <i className="ri-wallet-line mr-2"></i>
              Connect Wallet
            </button>
            <Link href="/explore">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all cursor-pointer whitespace-nowrap">
                Start Exploring
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}