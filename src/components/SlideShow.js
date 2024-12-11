import React, { useState, useEffect, useCallback } from "react";

const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sử dụng useCallback để đảm bảo hàm ổn định
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Tự động chuyển slide
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [goToNext]); // Thêm goToNext vào mảng dependencies

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-80 object-cover transition-transform duration-500"
        />
      </div>

      {/* Nút Previous */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-none text-blue-400 p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
      >
        ❮
      </button>

      {/* Nút Next */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-none text-blue-400 p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
      >
        ❯
      </button>

      {/* Chấm chỉ mục */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
