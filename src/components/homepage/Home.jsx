import React from 'react';
import SearchBar from './SearchBar';
import Banner from './Banner';
import ProductCategories from './ProductCategories';
import OurStores from './OurStores';
import SportsGearBanner from './SportsGearBanner';

const Home = () => {
  return (
    <div className='py-2'>
      <SearchBar></SearchBar>
      <Banner></Banner>
      <ProductCategories></ProductCategories>
      <SportsGearBanner></SportsGearBanner>
      <OurStores></OurStores>
    </div>
  );
};

export default Home;