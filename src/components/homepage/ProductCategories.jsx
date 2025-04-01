import React from 'react';

const ProductCategories = () => {
  const categories = [
    "Electronics", "Fashion", "Home & Living", "Books", 
    "Beauty & Health", "Toys & Games", "Sports & Outdoors", "Automotive"
  ];

  return (
    <div className="p-6 shadow-md my-6">
      {/* Centered, larger, lightly colored title */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-600 text-center mb-6">
        Categories
      </h2>
      
      <div className="flex justify-center gap-4 flex-wrap">
        {categories.map((category, index) => (
          <p 
            key={index} 
            className="px-5 py-3 bg-gray-200 rounded-lg text-gray-600 sm:text-lg font-medium cursor-pointer hover:bg-gray-300 transition"
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
