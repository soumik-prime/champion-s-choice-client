import React from 'react';
import SearchBar from './SearchBar';
import Banner from './Banner';

const Home = () => {
  return (
    <div className='py-2'>
      <SearchBar></SearchBar>
      <Banner></Banner>
    </div>
  );
};

export default Home;