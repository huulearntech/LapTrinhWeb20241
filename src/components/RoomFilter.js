import React, { useState } from 'react';
import { FaAngleDown as ExpandCardIcon } from 'react-icons/fa';

const FilterGroupCard = ({ name, characteristics }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="rounded-lg shadow-lg bg-white border border-gray-300">
      <div className="flex px-4 justify-between items-center bg-blue-100">
        <h3 className="my-2 text-lg font-semibold">{name}</h3>
        <button
          onClick={handleToggle}
          className={`p-1 rounded-full bg-white text-blue-500 transition-transform duration-300 ease-linear ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <ExpandCardIcon className="size-4" />
        </button>
      </div>
      <div
        className={`transition-all duration-300 ease-linear overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-4 flex flex-col space-y-2">
          {characteristics.map((characteristic) => (
            <div key={characteristic} className="flex items-center">
              <input type="checkbox" id={characteristic} name={characteristic} className="mr-2 accent-blue-500" />
              <label htmlFor={characteristic}>{characteristic}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PriceRange = ({ minPrice, maxPrice, onChange }) => {
  return (
    <div className="rounded-lg shadow-lg bg-white border border-gray-300">
      <div className="flex flex-col px-4 items-start">
        <h3 className="my-2 text-lg font-semibold">Price Range</h3>
        <p className="text-gray-500">Enter your price range</p>
      </div>
      <div className="flex flex-row space-x-2 p-4 text-sm">
        <input
          type="text"
          id="minPrice"
          name="minPrice"
          className="w-full border border-gray-300 rounded p-2 appearance-none"
          min="0"
          placeholder="Min Price"
          inputMode="numeric"
          value={minPrice}
          onChange={onChange}
        />
        <span className="self-center">-</span>
        <input
          type="text"
          id="maxPrice"
          name="maxPrice"
          className="w-full border border-gray-300 rounded p-2 appearance-none"
          min="0"
          placeholder="Max Price"
          inputMode="numeric"
          value={maxPrice}
          onChange={onChange}
        />
      </div>
    </div>
  );
}


const Filter = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handlePriceRangeChange = (e) => {
    const name = e.target.name;
    const value = e.target.value.replace(/\D/g, ""); 
    if (name === 'minPrice') {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  return (
    <div className="w-60 space-y-4 overflow-hidden">
      <div className="flex justify-between py-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">
          Apply Filter
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-200">
          Clear
        </button>
      </div>
      <PriceRange minPrice={minPrice} maxPrice={maxPrice} onChange={handlePriceRangeChange}/>

      <FilterGroupCard
        name="Rating"
        characteristics={[1, 2, 3, 4, 5]}
      />
      <FilterGroupCard
        name="Accommodation Type"
        characteristics={['Hotel', 'Hostel', 'Motel', 'Resort', 'Inn', 'Villa']}
      />
      <FilterGroupCard
        name="Amenities"
        characteristics={['Free Wi-Fi', 'Free Parking', 'Swimming Pool', 'Airport Shuttle', 'Pet Friendly']}
      />
    </div>
  );
}

export default Filter;