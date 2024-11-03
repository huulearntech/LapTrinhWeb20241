import React, { useState, useEffect } from 'react';
import { ReactComponent as RightArrow } from './right-arrow.svg';
import { ReactComponent as LeftArrow } from './left-arrow.svg';

const slides = [
  {
    id: 1,
    image: 'https://placehold.co/300x150?text=Product+1',
    link: '/product1',
  },
  {
    id: 2,
    image: 'https://placehold.co/300x150?text=Product+2',
    link: '/product2',
  },
  {
    id: 3,
    image: 'https://placehold.co/300x150?text=Product+3',
    link: '/product3',
  },
  {
    id: 4,
    image: 'https://placehold.co/300x150?text=Product+4',
    link: '/product4',
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
    <div 
      className="relative w-1/3 overflow" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <a key={slide.id} href={slide.link} className="relative w-full flex-shrink-0">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-auto object-cover"
            />
          </a>
        ))}
      </div>

      {/* Navigation Buttons */}
      {isHovered && (
        <>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg transition-opacity duration-300 opacity-75 hover:opacity-100">
            <LeftArrow alt="Previous" className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg transition-opacity duration-300 opacity-75 hover:opacity-100">
            <RightArrow alt="Next" className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Slideshow;

