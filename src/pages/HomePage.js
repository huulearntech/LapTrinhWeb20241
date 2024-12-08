// HomePage.js
import React from 'react';
import Carousel from '../components/Carousel'
import ProductSection from '../components/ProductSection'
import RoomSearchBar from '../components/search_bar';
import SkeletonCard from '../components/Skeleton';
import { slides } from '../fake_data';


const HomePage = () => {
  return (
    <div>
      <div className="flex w-full h-2/3 min-h-96 items-center justify-center bg-blue-600">
        <RoomSearchBar labelClassName={"text-white"} />
      </div>
      <ProductSection />
      <Carousel items={slides} />
      <SkeletonCard />
    </div>
  );
};

export default HomePage; 