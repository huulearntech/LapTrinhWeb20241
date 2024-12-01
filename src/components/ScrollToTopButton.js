import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = ({ threshold = 200, size = 48 }) => {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    // Cập nhật trạng thái chỉ khi vị trí cuộn thay đổi vượt qua ngưỡng
    setVisible(window.scrollY > threshold);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleDebouncedScroll = () => {
      // Cập nhật trạng thái cuộn sau khi dừng cuộn trong một khoảng thời gian ngắn
      handleScroll();
    };

    window.addEventListener('scroll', handleDebouncedScroll);

    // Clean up event listener khi component unmount
    return () => {
      window.removeEventListener('scroll', handleDebouncedScroll);
    };
  }, [handleScroll]);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      role="button" // Tối ưu hóa accessibility
      className={`fixed z-10 bottom-10 right-10 flex items-center justify-center rounded-full shadow-md cursor-pointer transition-opacity duration-300
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
        bg-white bg-opacity-70 hover:bg-opacity-100 focus:outline-none`}
      style={{ width: size, height: size }}
      aria-hidden={!visible} // Ẩn khỏi công cụ trợ giúp khi không hiển thị
    >
      <FaArrowUp className="text-blue-600" />
    </button>
  );
};

export default ScrollToTopButton;
