import React from 'react';
import { RiSearchLine as SearchIcon } from 'react-icons/ri';
import {
  PiMapPin as LocationIcon,
  PiCalendarDots as CalendarIcon,
} from 'react-icons/pi';
import { MdPersonAddAlt as GuestIcon } from 'react-icons/md';

const RoomSearchBar = ({ className, labelClassName }) => {
  return (
    <div className={`flex flex-row items-end justify-center h-20${className}`}>
      <div className="flex flex-col">
        <label className={`px-2 font-semibold ${labelClassName}`}> Location</label>
        <div className="flex flex-row h-14 text-lg bg-white rounded-l-lg border-[1px] hover:border-gray-400 focus:border-blue-500 items-center">
          <LocationIcon className="w-10 h-10 p-2" />
          <input className="h-10 pr-2 focus:outline-none" />
        </div>
      </div>
      <div className="flex flex-col">
        <label className={`px-2 font-semibold ${labelClassName}`}> Date and Time</label>
        <div className="flex flex-row h-14 text-lg bg-white border-[1px] hover:border-gray-400 focus:border-blue-500 items-center">
          <CalendarIcon className="w-10 h-10 p-2" />
          <input className="h-10 pr-2 focus:outline-none" />
        </div>
      </div>
      <div className="flex flex-col">
        <label className={`px-2 font-semibold ${labelClassName}`}> Room and Guest</label>
        <div className="flex flex-row h-14 text-lg bg-white border-[1px] hover:border-gray-400 focus:border-blue-500 items-center">
          <GuestIcon className="w-10 h-10 p-2" />
          <input className="h-10 pr-2 focus:outline-none" />
        </div>
      </div>
      {/* <div className="relative flex flex-col">
        <label className={`px-2 font-semibold ${labelClassName}`}> Room and Guest</label>
        <div className="flex flex-row h-14 text-lg bg-white border-[1px] hover:border-gray-400 focus:border-blue-500 items-center cursor-pointer">
          <GuestIcon className="w-10 h-10 p-2" />
          <input className="h-10 pr-2 focus:outline-none" readOnly />
        </div>
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="flex justify-between p-2">
            <span>Rooms</span>
            <div className="flex items-center">
              <button className="px-2 py-1 bg-gray-200 rounded-l-lg">-</button>
              <span className="px-4">1</span>
              <button className="px-2 py-1 bg-gray-200 rounded-r-lg">+</button>
            </div>
          </div>
          <div className="flex justify-between p-2">
            <span>Guests</span>
            <div className="flex items-center">
              <button className="px-2 py-1 bg-gray-200 rounded-l-lg">-</button>
              <span className="px-4">1</span>
              <button className="px-2 py-1 bg-gray-200 rounded-r-lg">+</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex items-center justify-center">
        <button className=" bg-orange-500 items-center justify-center rounded-r-lg hover:bg-orange-600">
          <SearchIcon className="w-14 h-14 p-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default RoomSearchBar;