import React, { useState, useEffect } from "react";
import SearchBar from "../components/RoomSearchBar";
import ProductCard from "../components/ProductCard";
import PaginationBar from "../components/PaginationBar";
import Filter from "../components/RoomFilter";

import {
  CiBoxList as ListViewIcon,
  CiGrid41 as GridViewIcon,
  CiFilter as FilterIcon
} from "react-icons/ci";

// Sticky SearchBar
const StickySearchBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Hàm kiểm tra vị trí cuộn
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Vị trí cuộn hiện tại
      if (scrollPosition >= 80) {
        setIsSticky(true); // Mắc lại khi cuộn đến 80px
      } else {
        setIsSticky(false); // Quay lại khi cuộn lên
      }
    };

    // Đăng ký sự kiện cuộn
    window.addEventListener('scroll', handleScroll);

    // Hủy sự kiện khi component bị hủy
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Mảng rỗng để chỉ chạy lần đầu tiên khi component mount

  return (
    <div
      className={`flex py-2 items-center justify-center z-10 w-full shadow-lg transition-colors duration-200
        ${isSticky ? 'fixed bg-black' : 'absolute bg-gray-500'}`}
      style={{ top: isSticky ? '0' : '80px' }}
    >
      <SearchBar />
    </div>
  );

};

const products = [
  {
    name: "Dummy product",
    images: [
      "https://placehold.co/400x300?text=Main+Image",
      "https://placehold.co/100x75?text=Image+1",
      "https://placehold.co/100x75?text=Image+2",
      "https://placehold.co/100x75?text=Image+3"
    ],
    rating: 2.7,
    accommodation: "Hotel",
    location: "New York, USA",
    description: "This product is good",
    amenities: ["Wifi", "Parking", "Pool"],
    price: 129.99
  },
  {
    name: "Another dummy product",
    images: [
      "https://placehold.co/400x300?text=Main+Image",
      "https://placehold.co/100x75?text=Image+1",
      "https://placehold.co/100x75?text=Image+2",
      "https://placehold.co/100x75?text=Image+3"
    ],
    rating: 2.7,
    accommodation: "Hotel",
    location: "New York, USA",
    description: "Bla bla bla",
    amenities: ["Wifi", "Parking", "Pool", "Gym", "Spa"],
    price: 129.99
  },
  {
    name: "Dummy product",
    images: [
      "https://placehold.co/400x300?text=Main+Image",
      "https://placehold.co/100x75?text=Image+1",
      "https://placehold.co/100x75?text=Image+2",
      "https://placehold.co/100x75?text=Image+3"
    ],
    rating: 2.7,
    accommodation: "Hotel",
    location: "New York, USA",
    description: "This product is good",
    amenities: ["Wifi", "Parking", "Pool", "Bar", "Restaurant"],
    price: 129.99
  },
  {
    name: "Another dummy product",
    images: [
      "https://placehold.co/400x300?text=Main+Image",
      "https://placehold.co/100x75?text=Image+1",
      "https://placehold.co/100x75?text=Image+2",
      "https://placehold.co/100x75?text=Image+3"
    ],
    rating: 2.7,
    accommodation: "Hotel",
    location: "New York, USA",
    description: "Bla bla bla",
    amenities: ["Wifi", "Parking", "Pool", "Casino"],
    price: 129.99
  },
];

const SearchPage = () => {
  const [isListView, setIsListView] = useState(true); // Chế độ xem
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const totalPages = 6; // Tổng số trang

  // Hàm chuyển trang
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <StickySearchBar />

      {/* Search page layout */}
      <div className="pt-48 flex flex-row items-start justify-center space-x-6 px-4">
        {/* Chuyển đổi giữa các chế độ hiển thị */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-row justify-between items-center w-full px-4">
            <button className="h-8 p-2 flex items-center justify-center rounded-lg bg-blue-500 text-white" aria-label="Bộ lọc">
              <FilterIcon className="text-xl" />
              <span>Bộ lọc</span>
            </button>
            <div className="flex">
              {/* Chế độ xem dạng danh sách */}
              <button
                onClick={() => setIsListView(true)}
                className={`w-10 h-8 flex items-center justify-center rounded-l-lg transition ${isListView ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                aria-label="Dạng danh sách"
              >
                <ListViewIcon className="text-xl" />
              </button>
              {/* Chế độ xem dạng lưới */}
              <button
                onClick={() => setIsListView(false)}
                className={`w-10 h-8 flex items-center justify-center rounded-r-lg transition ${!isListView ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                aria-label="Dạng lưới"
              >
                <GridViewIcon className="text-xl" />
              </button>
            </div>
          </div>

          <Filter />
        </div>
        {/* Filter */}

        {/* Danh sách hoặc lưới sản phẩm */}
        <div className="flex flex-col space-y-4">

          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          {isListView ? (
            <ul className="space-y-6">
              {products.map((product, index) => (
                <li key={index}>
                  <ProductCard
                    product={product}
                    compact={!isListView}
                    className="w-full rounded-lg hover:shadow-lg hover:shadow-blue-300 hover:scale-[1.02] transition-transform duration-200" />
                </li>
              ))}
            </ul>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div key={index}>
                  <ProductCard
                    product={product}
                    compact={!isListView}
                    className="w-full rounded-lg hover:shadow-lg hover:shadow-blue-300 hover:scale-[1.02] transition-transform duration-200" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
