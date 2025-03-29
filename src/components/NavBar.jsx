import React, { useEffect, useState } from 'react';
import ThemeController from './ThemeController';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [userLogedIn, setUserLogedIn] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem('Theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, [])
  const handleChange = () => {
    setDarkMode(!isDarkMode);
  }
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode]);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-1 md:px-6 lg:px-12">
        <div className="md:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <div
              tabIndex={0}
              role="tablist"
              className="dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow flex flex-col"
            >
              <div className='w-full pl-4'><ThemeController isDarkMode={isDarkMode} handleChange={handleChange}></ThemeController></div>
              <a role="tab" className="tab justify-start tab-active">Home</a>
              <a role="tab" className="tab justify-start">All Sports Equipments</a>
              {
                userLogedIn &&
                <>
                  <a role="tab" className="tab justify-start">Add New Equipment</a>
                  <a role="tab" className="tab justify-start">My Equipments List</a>
                </>
              }
            </div>
          </div>
        </div>

        <div className="flex-1 font-bold text-nowrap">
          <a className="text-xs sm:text-base md:text-xl font-extrabold font-logo-res">Champion's Choice</a>
        </div>
        <div className='hidden md:block'>
          <div role="tablist" className="tabs">
            <a role="tab" className="tab tab-active">Home</a>
            <a role="tab" className="tab">All Sports Equipments</a>
            {
              userLogedIn &&
              <>
                <a role="tab" className="tab">Add New Equipment</a>
                <a role="tab" className="tab">My Equipments List</a>
              </>
            }
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 items-center">
          <div className='hidden md:block mx-2'><ThemeController isDarkMode={isDarkMode} handleChange={handleChange}></ThemeController></div>
          {
            !userLogedIn ?
              <>
                <button className="btn btn-xs sm:btn-sm btn-info text-xs">Sign In</button>
                <button className="btn btn-xs sm:btn-sm btn-info text-xs">Register Now</button>
              </>
              :
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow">
                  <li><a>Profile</a></li>
                  <li><a>Sign&#20;Out</a></li>
                </ul>
              </div>
          }

        </div>
      </div>
    </div>
  );
};

export default NavBar;
