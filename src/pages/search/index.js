import React, { useState, useLayoutEffect } from "react";
import SearchBar from "../../components/search_bar";
import { Pagination, Button } from "antd";

import Filter from "../../components/filter";

import { fake_products } from "../../fake_data";
import Card2 from "../../components/ProductCard";
import SearchStatus from "./SearchStatus";
import Map from "./Map";

const SearchPage = () => {
  const [isListView, setIsListView] = useState(true); // Chế độ xem
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [query, setQuery] = useState(''); // Từ khóa tìm kiếm
  const [isLoading, setIsLoading] = useState(false); // Trạng thái tải dữ liệu
  const totalPages = 20; // Tổng số trang

  // Hàm chuyển trang
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Placeholder: Fetch search results
  useLayoutEffect(() => {
    setIsLoading(true);
    console.log('Fetching search results for page:', currentPage);
    window.setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      window.clearTimeout();
    };
  }, [currentPage]);

  return (
    <div className="flex flex-row w-full h-full justify-center">
      <div className="flex flex-col space-y-4 w-full max-w-7xl">
        <Map />
        <div className="flex items-center justify-center w-full py-2">
          <SearchBar />
        </div>

        <div className="flex flex-row w-full space-x-8">

          <div className={"w-72 h-full transition-all duration-300"}>
            <Filter />
          </div>

          <div className="flex flex-col w-full space-y-4">
            <SearchStatus
              query={query}
              found={1372}
              onSort={(value) => console.log(value)}
              isListView={isListView}
              setIsListView={setIsListView}
            />

            {fake_products.length === 0 ?
              (
                <div className="flex flex-col items-center justify-center w-full h-96">
                  <p className="text-lg text-gray-500">Không tìm thấy kết quả nào</p>
                  <Button type="primary" className="mt-4">Tìm kiếm lại</Button>
                </div>
              )
              :
              (
                <div className={isListView ? "flex flex-col w-full space-y-4" : "grid grid-cols-3 gap-4"}>
                  {fake_products.map((product, index) => (
                    <Card2 key={index} product={product} isLoading={isLoading} isListView={isListView} />
                  ))}
                </div>
              )
            }

            <div className="flex justify-center w-full px-4">
              <Pagination
                current={currentPage}
                total={totalPages * 10} // Assuming 10 items per page
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
