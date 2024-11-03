import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setVisible(currentScrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 bg-blue-500 border-none rounded-full w-12 h-12 flex items-center justify-center shadow-md cursor-pointer transition-opacity duration-300 ${visible ? 'flex' : 'hidden'} hover:bg-blue-600`}
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <img src="#" alt="Scroll to Top" className="w-7 h-7" />
    </button>
  );
};

export default ScrollToTopButton;
