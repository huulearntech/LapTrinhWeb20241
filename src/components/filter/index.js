import React, { useState } from 'react';
import { Collapse, Checkbox, Input, Button, Slider, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { ReactComponent as ShowOnMapImage } from '../../assets/images/show_on_map.svg';
import mapMarkerIcon from '../../assets/images/map_marker.png';


const { Panel } = Collapse;

const FilterGroupCard = ({ name, characteristics }) => {
  return (
    <Collapse
      expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
      className="bg-white border border-gray-300 rounded-lg"
      defaultActiveKey={[name]}
    >
      <Panel header={<span className="font-semibold">{name}</span>} key={name}>
        <div className="flex flex-col space-y-2">
          {characteristics.map((characteristic) => (
            <Checkbox key={characteristic} className='hover:text-blue-500 transition-colors duration-300 ease-in-out'>
              {characteristic}
            </Checkbox>
          ))}
        </div>
      </Panel>
    </Collapse>
  );
};

const PriceRange = ({ minPrice, maxPrice, onSliderChange, onInputChange }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4">
      <h3 className="font-semibold">Khoảng giá</h3>
      <p className="text-sm text-gray-500 mb-2">1 phòng, 1 đêm (VND)</p>
      <Slider
        range
        min={0}
        max={1000}
        value={[minPrice, maxPrice]}
        onChange={onSliderChange}
        tooltip={{ formatter: (value) => `$${value}` }}
      />
      <div className="flex space-x-2">
        <Input
          type="text"
          id="minPrice"
          name="minPrice"
          className="w-full text-sm"
          placeholder="Min Price"
          value={minPrice}
          onChange={onInputChange}
        />
        <span className="self-center">-</span>
        <Input
          type="text"
          id="maxPrice"
          name="maxPrice"
          className="w-full text-sm"
          placeholder="Max Price"
          value={maxPrice}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

const ShowOnMap = () => {
  return (
    <div className="relative flex h-28 bg-white border border-gray-300 rounded-lg p-4 justify-center overflow-hidden">
      <ShowOnMapImage alt="map" className="absolute inset-0 object-cover" />
      <div className="absolute flex flex-col items-center justify-center space-y-2">
        <img src={mapMarkerIcon} alt="marker" className="w-8 h-auto" />
        <Button type="primary" className="bg-blue-500 hover:bg-blue-400 font-semibold">
          Xem trên bản đồ
        </Button>
      </div>
    </div>
  );
};

const Filter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleSliderChange = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value.replace(/\D/g, "");
    if (name === 'minPrice') {
      setMinPrice(value ? parseInt(value, 10) : 0);
    } else {
      setMaxPrice(value ? parseInt(value, 10) : 1000);
    }
  };

  return (
    <div className="w-60 space-y-4">
      <ShowOnMap />
      <Divider />
      <div className="flex justify-between space-x-6">
        <Button className="w-full bg-gray-300 text-gray-700 hover:bg-gray-200 font-semibold">
          Đặt lại
        </Button>
        <Button type="primary" className="w-full bg-blue-500 hover:bg-blue-400 font-semibold">
          Áp dụng
        </Button>
      </div>
      <PriceRange
        minPrice={minPrice}
        maxPrice={maxPrice}
        onSliderChange={handleSliderChange}
        onInputChange={handleInputChange}
      />
      <FilterGroupCard name="Điểm đánh giá"
        characteristics={[
          '1 sao',
          '2 sao',
          '3 sao',
          '4 sao',
          '5 sao'
        ]} />
      <FilterGroupCard name="Loại hình lưu trú"
        characteristics={[
          'Hotel',
          'Hostel',
          'Motel',
          'Resort',
          'Inn',
          'Villa'
        ]} />
      <FilterGroupCard name="Tiện nghi"
        characteristics={[
          'Free Wi-Fi',
          'Free Parking',
          'Swimming Pool',
          'Airport Shuttle',
          'Pet Friendly'
        ]} />
    </div>
  );
};

export default Filter;