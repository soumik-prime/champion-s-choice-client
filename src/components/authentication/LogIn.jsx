import React from 'react';

const LogIn = () => {
  return (
    <div className="px-1 md:px-6 hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse justify-evenly w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Now!</h1>
          <p className="py-6 max-w-2xl">
            Welcome back, athlete! Log in to access exclusive offers on high-quality sports gear. Stay updated with
            our latest collections, sales, and promotions. Don't have an account? Sign up now to get started with the best
            sports equipment tailored just for you.
          </p>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset">
              <label className="fieldset-label">Email</label>
              <input type="email" className="input focus:outline-0" placeholder="Email" required />
              <label className="fieldset-label">Password</label>
              <input type="password" className="input focus:outline-0" placeholder="Password" minLength={8} required />
              <input type="submit" value="Log In" className="btn btn-neutral mt-4" />
            </form>
              {/* Google */}
              <button className="btn bg-gray-100 text-black border-[#e5e5e5]"><svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;