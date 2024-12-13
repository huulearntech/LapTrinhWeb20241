// HomePage.js
import React from 'react';
import FavoriteDestination from './FavoriteDestination';
import Suggestion from './Suggestion';
import WhyUs from './WhyUs';
import SearchBar from '../../components/search_bar';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex w-full h-96 items-center justify-center bg-gray-300">
        <SearchBar />
      </div>
      <div className="flex flex-col w-full max-w-7xl">

      <FavoriteDestination />
      <FavoriteDestination />
      <FavoriteDestination />
      <Suggestion />
      </div>
      <WhyUs />
    </div>
  );
};

export default HomePage; 