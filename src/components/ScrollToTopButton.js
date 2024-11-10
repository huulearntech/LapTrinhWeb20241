import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = ({ threshold = 200, size = 48 }) => {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > threshold);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed z-10 bottom-10 right-10 flex items-center justify-center rounded-full shadow-md cursor-pointer transition-opacity duration-300 
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
        bg-blue-500 hover:bg-blue-600`}
        style={{ width: size, height: size }}
        >
      <FaArrowUp className="text-white"/>
    </button>
  );
};

export default ScrollToTopButton;