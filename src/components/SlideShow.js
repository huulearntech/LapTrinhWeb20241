import React, { useState, useEffect } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

const slides = [
  { id: 1, image: 'https://placehold.co/300x150?text=Product+1', link: '/product1' },
  { id: 2, image: 'https://placehold.co/300x150?text=Product+2', link: '/product2' },
  { id: 3, image: 'https://placehold.co/300x150?text=Product+3', link: '/product3' },
  { id: 4, image: 'https://placehold.co/300x150?text=Product+4', link: '/product4' },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);  // Loop back to the first slide
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Ensure looping
  };

  return (
    <section className="relative w-auto h-[50vh] flex items-center justify-center mb-16 mx-16">
      <div className="relative w-full h-full overflow-hidden">
        {/* Slide Container */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <a key={slide.id} href={slide.link} className="relative w-full flex-shrink-0">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg transition-opacity duration-300 opacity-75 hover:opacity-100"
        >
          <GrPrevious alt="Previous" className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg transition-opacity duration-300 opacity-75 hover:opacity-100"
        >
          <GrNext alt="Next" className="w-6 h-6" />
        </button>

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
    </section>
  );
};

export default Slideshow;
