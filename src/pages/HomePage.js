// HomePage.js
import React from 'react';
import SlideShow from '../components/SlideShow'
import ProductSection from '../components/ProductSection'
import RoomSearchBar from '../components/RoomSearchBar'


const HomePage = () => {
  return (
    <div>
      <div className="flex w-full h-2/3 min-h-96 items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${require('../assets/images/bien.jpg')})` }}>
        <RoomSearchBar labelClassName={"text-white"} />
      </div>
      <ProductSection />
      <SlideShow />
    </div>
  );
};

export default HomePage; 