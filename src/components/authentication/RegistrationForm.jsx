import React, { useState } from 'react';

const RegistrationForm = () => {
  const [errorMassage, setErrorMassage] = useState('');
  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    console.log("hi");
    return regex.test(password) ? '' : 'Password must be at least 8 characters long, contain at least one number, one lowercase letter, and one uppercase letter.';
  };
  const handleChangeInPassword = event => {
    setErrorMassage(validatePassword(event.target.value))
  }
  

  return (
    <div>
      <div className="hero bg-base-200 py-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Create your account to join our community and enjoy all the benefits. Simply fill out the form to get started.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm md:max-w-md shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset">
                <label className="fieldset-label">Full Name</label>
                <input type="text" className="input focus:outline-0 w-full" placeholder="Full Name" required/>

                <label className="fieldset-label">User Name</label>
                <input type="text" className="input focus:outline-0 w-full" placeholder="User Name" required/>

                <label className="fieldset-label">Email</label>
                <input type="email" className="input focus:outline-0 w-full" placeholder="Email" required/>

                <label className="fieldset-label">PhotoURL</label>
                <input type="text" className="input focus:outline-0 w-full" placeholder="PhotoURL" required/>

                <label className="fieldset-label">Password</label>
                <input type="password" onChange={handleChangeInPassword} className="input validator focus:outline-0 w-full" required placeholder="Password" minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                <p className='text-red-600'>{errorMassage}</p>

                <label className="fieldset-label">Confirm Password</label>
                <input type="password" className="input focus:outline-0 w-full" placeholder="Confirm Password" required/>

                <div>
                  <p className="py-2">By signing up, you agree to our <a className="link link-hover">Terms and Conditions</a></p>
                </div>

                <button type='submit' className="btn btn-neutral">Register</button>
              </form>
              <button className="btn bg-gray-100 text-black border-[#e5e5e5]"><svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>Register with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;