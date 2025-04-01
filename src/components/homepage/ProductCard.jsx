import React from 'react';

const ProductCard = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-auto  dark:bg-gray-800 text-gray-600 dark:text-gray-300">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Sports Equipment"
          className="w-full h-32 object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title font-semibold flex justify-between items-center">
          <span>Football</span>
        </h2>
        <div className='flex justify-between'>
          <div className="text-sm font-bold text-green-500">
            Price: <span>$25.99</span>
          </div>
          <div className="flex items-center text-yellow-500">
            <span className="text-xs mr-1">Rating:</span>
            <span>{4.5}</span>
          </div>
        </div>

        <div className="text-xs mb-2">
          <strong>Customization:</strong> Extra grip and personalized printing available.
        </div>

        <div className="flex justify-between text-xs">
          <div>
            <strong>Processing:</strong> 3-5 days
          </div>
          <div>
            <strong>Stock:</strong> 10 items
          </div>
        </div>


        <div className='flex flex-row-reverse justify-between items-center gap-4 mt-1'>
            <button className="btn btn-sm btn-primary text-xs">View Details</button>
          <div className="flex w-full flex-wrap gap-2">
            <div className="text-xs py-0.5 px-2 flex items-center text-[10px] rounded-2xl bg-base-300">Sports</div>
            <div className="text-xs py-0.5 px-2 flex items-center text-[10px] rounded-2xl bg-base-300">Football</div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;