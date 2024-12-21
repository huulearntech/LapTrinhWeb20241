import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

import { CiBoxList as ListViewIcon, CiGrid41 as GridViewIcon } from "react-icons/ci";

const SearchResult = ({ products }) => {
  const [isListView, setIsListView] = useState(true);
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
    <div className="flex flex-col space-y-4 w-full max-w-6xl">
      <div className="flex flex-row justify-between items-center w-full px-4">
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

      {
        <div className={!isListView ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
          {products.map((product, index) => (
            <div key={index}>
              <ProductCard
                product={product}
                compact={!isListView || isCompact}
                className="w-full rounded-lg hover:shadow-lg hover:shadow-blue-300 hover:scale-[1.02] transition-transform duration-200" />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default SearchResult;