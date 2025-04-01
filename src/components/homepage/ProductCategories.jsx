import React from 'react';

const ProductCategories = () => {
  const categories = [
    "Electronics", "Fashion", "Home & Living", "Books", 
    "Beauty & Health", "Toys & Games", "Sports & Outdoors", "Automotive"
  ];

  return (
    <div className="p-6 shadow-md my-6">
      {/* Centered, larger, lightly colored title */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-base-content text-center mb-6">
        Categories
      </h2>
      
      <div className="flex justify-center gap-4 flex-wrap">
        {categories.map((category, index) => (
          <p 
            key={index} 
            className="px-5 py-3 rounded-lg sm:text-lg font-medium cursor-pointer transition bg-gray-300 dark:bg-gray-800 text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300 border border-gray-300"
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
