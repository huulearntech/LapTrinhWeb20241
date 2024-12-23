import React from 'react';
import { Slider, Input } from 'antd';

const PriceRange = ({ minPrice, maxPrice, onSliderChange, onInputChange }) => {
  return (
    <div className="w-full bg-white border border-gray-300 rounded-lg p-4">
      <h3 className="font-semibold">Khoảng giá</h3>
      <p className="text-sm text-gray-500 mb-2">1 phòng, 1 đêm (VND)</p>
      <Slider
        range
        min={100_000}
        max={20_000_000}
        step={100_000}
        value={[minPrice, maxPrice]}
        onChange={onSliderChange}
        tooltip={{ formatter: (value) => `VND ${value.toLocaleString('vi-VN')}` }}
      />
      <div className="flex space-x-2">
        <Input
          type="text"
          id="minPrice"
          name="minPrice"
          className="w-full text-sm"
          placeholder="Min Price"
          value={minPrice.toLocaleString('vi-VN')}
          onChange={onInputChange}
        />
        <span className="self-center">-</span>
        <Input
          type="text"
          id="maxPrice"
          name="maxPrice"
          className="w-full text-sm"
          placeholder="Max Price"
          value={maxPrice.toLocaleString('vi-VN')}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default PriceRange;