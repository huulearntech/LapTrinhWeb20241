import React, { useState } from 'react';
import { FaAngleDown as ExpandCardIcon } from 'react-icons/fa';

const FilterGroupCard = ({ name, characteristics, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`
      rounded-lg
      shadow-lg
      bg-white
      border border-gray-300
      ${className}
      `}>

      <div className="flex px-4 justify-between items-center bg-blue-100">
        <h3 className="my-2 text-lg font-semibold">{name}</h3>
        <button
          onClick={handleToggle}
          className="p-1 rounded-full bg-white text-blue-500 transition-transform duration-300 ease-linear"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <ExpandCardIcon className="size-4" />
        </button>
      </div>
      <div
        className={`transition-max-height duration-300 ease-linear overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ transitionProperty: 'max-height' }}
      >
        <div className="p-4 flex flex-col space-y-2">
          {characteristics.map((characteristic, index) => (
            <div key={index}>
              <input type="checkbox" id={characteristic} name={characteristic} className="mr-2" />
              <label htmlFor={characteristic}>{characteristic}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const Filter = () => {
  return (
    <div className="w-60 bg-none space-y-4 overflow-hidden">
      <div className="flex justify-between p-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">
          Apply Filter
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-200">
          Clear
        </button>
      </div>

      <FilterGroupCard
        name="Rating"
        characteristics={[1, 2, 3, 4, 5]}
      />
      <FilterGroupCard
        name="Features"
        characteristics={["Wi-Fi", "Bluetooth", "Waterproof", "Long Battery", "This is a long characteristic to test if it overflows the card or not"]}
      />
    </div>
  );
}

export default Filter;