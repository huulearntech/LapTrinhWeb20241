import React from 'react';
import { RiSearchLine as SearchIcon } from 'react-icons/ri';
import {
  PiMapPin as LocationIcon,
  PiCalendarDots as CalendarIcon,
} from 'react-icons/pi';
import { MdPersonAddAlt as GuestIcon } from 'react-icons/md';

const SearchBar = () => {
  return (
    <div className="flex flex-row w-full max-w-2xl h-20 items-end justify-center">
      <div className="flex flex-col">
        <label className="px-2 text-white"> Location</label>
        <div className="flex flex-row h-14 text-lg bg-white rounded-l-lg border-[1px] hover:border-gray-400 focus:border-blue-500 items-center">
          <LocationIcon className="size-10 p-2" />
          <input className="h-10 pr-2 focus:outline-none" />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="px-2 text-white"> Date and Time</label>
        <div className="flex flex-row h-14 text-lg bg-white border-[1px] hover:border-gray-400 focus:border-blue-500 items-center">
          <CalendarIcon className="size-10 p-2" />
          <input className="h-10 pr-2 focus:outline-none" />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="px-2 text-white"> Room and Guest</label>
        <div className="flex flex-row h-14 text-lg bg-white border-[1px] hover:border-gray-400 focus:border-blue-500 items-center">
          <GuestIcon className="size-10 p-2" />
          <input className="h-10 pr-2 focus:outline-none" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className=" bg-orange-500 items-center justify-center rounded-r-lg hover:bg-orange-600">
          <SearchIcon className="size-14 p-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;