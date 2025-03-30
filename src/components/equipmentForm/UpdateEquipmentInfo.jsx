import React from 'react';

const UpdateEquipmentInfo = () => {
  return (
    <div className="card bg-base-100 shrink-0 my-2 md:px-12 py-6 lg:px-20">
      <h2 className="text-2xl font-bold text-center">Update Your Equipment Information</h2>
      <form className="card-body space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:max-w-2/3 mx-auto">

        {/* User Email */}
        <div>
          <label className="label">User Email</label>
          <input type="email" name="userEmail" className="input input-bordered w-full focus:outline-0" readOnly />
        </div>

        {/* User Name*/}
        <div>
          <label className="label">User Name</label>
          <input type="text" name="userName" className="input input-bordered w-full focus:outline-0" readOnly />
        </div>

        {/* Item Name */}
        <div>
          <label className="label">Item Name</label>
          <input type="text" name="itemName" className="input input-bordered w-full focus:outline-0" placeholder="Enter Item Name" required />
        </div>
        {/* Category */}
        <div>
          <label className="label">Category</label>
          <input type="text" name="category" className="input input-bordered w-full focus:outline-0" placeholder="Enter Category" required />
        </div>


        {/* Image URL */}
        <div>
          <label className="label">Image URL</label>
          <input type="text" name="image" className="input input-bordered w-full focus:outline-0" placeholder="Enter Image URL" required />
        </div>

        {/* Price */}
        <div>
          <label className="label">Price</label>
          <input type="number" name="price" className="input input-bordered w-full focus:outline-0" min="0" step='100' placeholder="Enter Price" required />
        </div>

        {/* Delivery Time */}
        <div>
          <label className="label">Delivery Time (Days)</label>
          <input type="number" name="deliveryTime" min="1" className="input input-bordered w-full focus:outline-0" placeholder="Enter Delivery Time" required />
        </div>

        {/* Rating */}
        <div>
          <label className="label">Rating (1-5)</label>
          <input type="number" name="rating" className="input input-bordered w-full focus:outline-0" min="1" max="5" step="0.1" placeholder="Enter Rating" required />
        </div>

        {/* Customization */}
        <div>
          <label className="label">Customization Options</label>
          <input type="text" name="customization" className="input input-bordered w-full focus:outline-0" placeholder="Enter Customization Details" />
        </div>

        {/* Stock Status */}
        <div>
          <label className="label">Available Quantity</label>
          <input type="number" name="stockStatus" className="input input-bordered w-full focus:outline-0" min='0' placeholder="Enter Available Stock" required />
        </div>


        {/* Description */}
        <div className=' col-span-2'>
          <label className="label">Description</label>
          <textarea name="description" className="textarea textarea-bordered w-full focus:outline-0" placeholder="Enter Description" required></textarea>
        </div>

        {/* Submit Button */}
        <div className='md:col-span-2 flex justify-center gap-6'>
          <button className="btn w-1/3 md:w-1/4 btn-ghost border border-gray-300">Cancel</button>
          <button type="submit" className="btn w-1/3 md:w-1/4 btn-neutral">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEquipmentInfo;