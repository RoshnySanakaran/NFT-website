'use client';

import { useState } from 'react';

interface FilterSidebarProps {
  onFilter: (filters: any) => void;
}

export default function FilterSidebar({ onFilter }: FilterSidebarProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [dateFilter, setDateFilter] = useState('all');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'art', label: 'Art' },
    { value: 'music', label: 'Music' },
    { value: 'sports', label: 'Sports' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'photography', label: 'Photography' },
    { value: 'collectibles', label: 'Collectibles' }
  ];

  const dateFilters = [
    { value: 'all', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'year', label: 'This Year' }
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilter({ 
      category, 
      priceRange: priceRange[0] === 0 && priceRange[1] === 10 ? null : priceRange,
      dateFilter: dateFilter === 'all' ? null : dateFilter 
    });
  };

  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
    onFilter({ 
      category: selectedCategory === 'all' ? null : selectedCategory,
      priceRange: newRange[0] === 0 && newRange[1] === 10 ? null : newRange,
      dateFilter: dateFilter === 'all' ? null : dateFilter 
    });
  };

  const handleDateChange = (date: string) => {
    setDateFilter(date);
    onFilter({ 
      category: selectedCategory === 'all' ? null : selectedCategory,
      priceRange: priceRange[0] === 0 && priceRange[1] === 10 ? null : priceRange,
      dateFilter: date === 'all' ? null : date 
    });
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 10]);
    setDateFilter('all');
    onFilter({});
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-purple-600 hover:text-purple-700 text-sm cursor-pointer"
        >
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
        <div className="space-y-3">
          {categories.map(category => (
            <label key={category.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category.value}
                checked={selectedCategory === category.value}
                onChange={() => handleCategoryChange(category.value)}
                className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300"
              />
              <span className="ml-3 text-gray-700">{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-4">Price Range (ETH)</h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="number"
              min="0"
              max="10"
              step="0.1"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(0, parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              placeholder="Min"
            />
            <span className="text-gray-500">to</span>
            <input
              type="number"
              min="0"
              max="10"
              step="0.1"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              placeholder="Max"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>0 ETH</span>
            <span>10+ ETH</span>
          </div>
        </div>
      </div>

      {/* Date Listed */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-4">Date Listed</h4>
        <div className="space-y-3">
          {dateFilters.map(filter => (
            <label key={filter.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="dateFilter"
                value={filter.value}
                checked={dateFilter === filter.value}
                onChange={() => handleDateChange(filter.value)}
                className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300"
              />
              <span className="ml-3 text-gray-700">{filter.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Status */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Status</h4>
        <div className="space-y-3">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <span className="ml-3 text-gray-700">Buy Now</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <span className="ml-3 text-gray-700">On Auction</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <span className="ml-3 text-gray-700">Has Offers</span>
          </label>
        </div>
      </div>
    </div>
  );
}