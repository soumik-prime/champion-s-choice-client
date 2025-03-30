import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import logo from '../../assets/logo.png'

const SearchBar = () => {
  return (
    <div className='px-2 md:px-6 lg:px-12 flex justify-between items-center'>
      <img className='sm:h-16 h-12 w-14 sm:w-24' src={logo} alt="" />
      <form className='flex my-4 justify-end text-xs sm:text-base w-fit'>
        <div className='border border-r-0 border-gray-500 rounded-l-xl flex text-gray-400 items-center justify-between'>
          <input type="text" name="" id="" className='p-3 outline-0' />
          <div className="dropdown dropdown-bottom dropdown-center">
            <div tabIndex={0} role="button" className="m-1 hover:cursor-pointer flex items-center justify-between border-l px-2 sm:px-6 border-gray-300 ">
              <p className='text-nowrap hidden sm:block'>All Categories</p>
              <p><MdKeyboardArrowDown /></p>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
        <button type='submit' className='bg-[#3c88d4] px-2 sm:px-6 rounded-r-xl border border-l-0 border-gray-500'><FaSearch /></button>
      </form>
    </div>
  );
};

export default SearchBar;