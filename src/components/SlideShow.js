import React, { useState, useEffect } from 'react';
import {
  GrNext as NextIcon,
  GrPrevious as PreviousIcon
} from 'react-icons/gr';

import hanoiImage from '../assets/images/hanoi.webp';
import hoianImage from '../assets/images/hoian.jpg';
import dalatImage from '../assets/images/dalat.jpg';
import saigonImage from '../assets/images/saigon.jpg';
import danangImage from '../assets/images/danang.webp';

const slides = [
    {
      id: 1,
      name: 'Ha Noi',
      image: hanoiImage,
      link: '/products/hanoi'
    },
    {
      id: 2,
      name: 'Hoi An',
      image: hoianImage,
      link: '/products/hanoi'
    },
    {
      id: 3,
      name: 'Da Lat',
      image: dalatImage,
      link: '/products/hanoi'
    },
    {
      id: 4,
      name: 'Sai Gon',
      image: saigonImage,
      link: '/products/hanoi'
    },
    {
      id: 5,
      name: 'Da Nang',
      image: danangImage,
      link: '/products/hanoi'
    },
    // Add more products as needed
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);  // Loop back to the first slide
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Ensure looping
  };

  return (
    <section className="relative mb-20 flex items-center justify-center">
      <div className="relative w-1/2 h-1/2 rounded-lg overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <a key={slide.id} href={slide.link} className="w-full flex-shrink-0">
              <img src={slide.image} alt={`Slide ${slide.name}`} className="w-full h-full object-cover" />
            </a>
          ))}
        </div>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-75 hover:opacity-100">
          <PreviousIcon className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-75 hover:opacity-100">
          <NextIcon className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
