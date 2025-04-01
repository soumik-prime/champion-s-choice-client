import React from 'react';
import ProductCard from './ProductCard';

const SportsGearBanner = () => {
  return (
    <div className="p-6 shadow-md my-6">
      <h2 className="text-3xl sm:text-4xl font-semibold  text-base-content text-center mb-6">
        Our Products
      </h2>
      <div className='flex flex-wrap gap-8 my-10'>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <div className='flex justify-center'>
        <button className='btn btn-lg btn-info'>View All Products</button>
      </div>
    </div>
  );
};

export default SportsGearBanner;