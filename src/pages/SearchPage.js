import React, { useState, useEffect } from "react";
import RoomSearchBar from "../components/RoomSearchBar";
import ProductCard from "../components/ProductCard";
import PaginationBar from "../components/PaginationBar";

import { fake_products } from "../fake_data"

import {
  CiBoxList as ListViewIcon,
  CiGrid41 as GridViewIcon,
  CiFilter as FilterIcon
} from "react-icons/ci";

import { RxCross2 as CloseFilterIcon } from "react-icons/rx";

import Filter from "../components/RoomFilter";

// Sticky SearchBar
const StickySearchBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex py-2 items-center justify-center z-10 w-full transition-colors duration-200
        ${isSticky ? 'fixed bg-white shadow-md' : 'absolute'}`}
      style={{ top: isSticky ? '0' : '80px' }}
    >
      <RoomSearchBar
        labelClassName={'text-black'} />
    </div>
  );

};

const SearchPage = () => {
  const [showFilter, setShowFilter] = useState(false); // Hiển thị bộ lọc
  const [isListView, setIsListView] = useState(true); // Chế độ xem
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const totalPages = 20; // Tổng số trang

  // Hàm chuyển trang
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setIsCompact(true);
      } else {
        setIsCompact(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="flex min-h-screen justify-center">
      <StickySearchBar />

      {/* Search page layout */}
      <div className="pt-12 flex flex-row w-full max-w-[85%] items-start justify-center space-x-6">
        {/* Chuyển đổi giữa các chế độ hiển thị */}
        <div className="hidden lg:flex flex-col items-center space-y-4">
          <Filter />
        </div>

        {/* Danh sách hoặc lưới sản phẩm */}
          <div className="flex flex-col space-y-4 w-full max-w-6xl">
            <div className="flex flex-row justify-between items-center w-full px-4">
              <button
                className="h-8 p-2 flex items-center justify-center rounded-lg bg-blue-500 text-white lg:hidden"
                aria-label="Bộ lọc"
                onClick={() => setShowFilter(!showFilter)}
              >
                <FilterIcon className="text-xl" />
                <span>Bộ lọc</span>
              </button>

              <select
                className="h-8 p-2 rounded-lg bg-gray-200 border border-gray-300 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => console.log(e.target.value)} // Replace with your sorting logic
              >
                <option value="price-asc">Lowest price to Highest price</option>
                <option value="price-desc">Highest price to Lowest price</option>
                <option value="rating">Rating</option>
                <option value="popularity">Popularity</option>
              </select>

              {/* Toggle view mode */}
            <div className="flex">
              {/* List view */}
              <button
                onClick={() => setIsListView(true)}
                className={`w-10 h-8 flex items-center justify-center rounded-l-lg transition ${isListView ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                aria-label="Dạng danh sách"
              >
                <ListViewIcon className="text-xl" />
              </button>
              {/* Grid view */}
              <button
                onClick={() => setIsListView(false)}
                className={`w-10 h-8 flex items-center justify-center rounded-r-lg transition ${!isListView ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                aria-label="Dạng lưới"
              >
                <GridViewIcon className="text-xl" />
              </button>
            </div>
          </div>
          
          <div className={isListView ? "space-y-6" : "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6"}>
            {fake_products.map((product, index) => (
              <div key={index}>
                <ProductCard
                  product={product}
                  compact={!isListView || isCompact}
                  className="w-full rounded-lg hover:shadow-lg hover:shadow-blue-300 hover:scale-[1.02] transition-transform duration-200" />
              </div>
            ))}
          </div>

          <div className="flex justify-center w-full px-4">
            <PaginationBar
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      {/* Side pane filter for smaller screens */}
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-50 z-20 flex justify-end lg:hidden transition-opacity duration-300 ${showFilter ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setShowFilter(false)}
      >
        <div
          className={`bg-white w-68 h-full p-4 overflow-auto transition-transform duration-300 transform ${showFilter ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-blue-700">Filter</div>
            <button
              onClick={() => setShowFilter(false)}
              className="my-auto p-2 rounded-full hover:bg-gray-200"
              aria-label="Close Filter"
            >
              <CloseFilterIcon className="w-6 h-6" />
            </button>
          </div>
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
