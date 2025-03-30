import React from 'react';

const UpdateProfileInformation = () => {
  return (
    <div className="card bg-base-100 shrink-0 my-2 md:px-12 py-6 lg:px-20">
      <h2 className="text-2xl font-bold text-center">Profile Information</h2>
      <form className="card-body space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:max-w-2/3 mx-auto">

        {/* Email */}
        <div>
          <label className="label">Email</label>
          <input type="email" name="email" className="input input-bordered w-full focus:outline-0" readOnly />
        </div>

        {/* Full Name */}
        <div>
          <label className="label">Full Name</label>
          <input type="text" name="fullName" className="input input-bordered w-full focus:outline-0" placeholder="Enter Full Name" required />
        </div>

        {/* User Name */}
        <div>
          <label className="label">User Name</label>
          <input type="text" name="userName" className="input input-bordered w-full focus:outline-0" placeholder="Enter User Name" required />
        </div>

        {/* Old Password */}
        <div>
          <label className="label">Old Password</label>
          <input type="password" name="oldPassword" className="input input-bordered w-full focus:outline-0" placeholder="Enter Old Password" required />
        </div>

        {/* New Password */}
        <div>
          <label className="label">New Password</label>
          <input type="password" name="newPassword" className="input input-bordered w-full focus:outline-0" placeholder="Enter New Password" required />
        </div>

        {/* Confirm New Password */}
        <div>
          <label className="label">Confirm New Password</label>
          <input type="password" name="confirmNewPassword" className="input input-bordered w-full focus:outline-0" placeholder="Confirm New Password" required />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center gap-6">
          <button className="btn btn-lg w-1/3 md:w-1/4 btn-ghost border border-gray-300">Cancel</button>
          <button type="submit" className="btn btn-lg w-1/3 md:w-1/4 btn-neutral">Update Profile</button>
        </div>
      </form>
    </div>

  );
};

export default UpdateProfileInformation;