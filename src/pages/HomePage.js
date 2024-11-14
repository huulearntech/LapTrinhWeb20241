// HomePage.js
import React from 'react';
import SlideShow from '../components/SlideShow'
import ProductSection from '../components/ProductSection'

const HomePage = () => {
  return (
    <div className="px-20">

      <SlideShow />
      <ProductSection />
    </div>
  );
};

export default HomePage;