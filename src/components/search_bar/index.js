import React, { useState } from 'react';
import { RiSearchLine as SearchIcon } from 'react-icons/ri';

import LocationSection from './LocationSection';
import DateRangeSection from './DateRangeSection';
import RoomAndGuestSection from './RoomAndGuestSection';

const DROPDOWN_TYPES = {
  LOCATION: 'location',
  DATE: 'date',
  GUESTS: 'guests',
};

const useDropdown = () => {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showDatePickerDropdown, setShowDatePickerDropdown] = useState(false);
  const [showGuestsAndRoomsDropdown, setShowGuestsAndRoomsDropdown] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === DROPDOWN_TYPES.LOCATION) {
      setShowLocationDropdown(!showLocationDropdown);
      setShowDatePickerDropdown(false);
      setShowGuestsAndRoomsDropdown(false);
    } else if (dropdown === DROPDOWN_TYPES.DATE) {
      setShowLocationDropdown(false);
      setShowDatePickerDropdown(!showDatePickerDropdown);
      setShowGuestsAndRoomsDropdown(false);
    } else if (dropdown === DROPDOWN_TYPES.GUESTS) {
      setShowLocationDropdown(false);
      setShowDatePickerDropdown(false);
      setShowGuestsAndRoomsDropdown(!showGuestsAndRoomsDropdown);
    }
  };

  const closeDropdowns = () => {
    setShowLocationDropdown(false);
    setShowDatePickerDropdown(false);
    setShowGuestsAndRoomsDropdown(false);
  };

  return {
    showLocationDropdown,
    showDatePickerDropdown,
    showGuestsAndRoomsDropdown,
    toggleDropdown,
    closeDropdowns,
  };
};

const RoomSearchBar = ({ labelClassName }) => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const {
    showLocationDropdown,
    showDatePickerDropdown,
    showGuestsAndRoomsDropdown,
    toggleDropdown,
    closeDropdowns,
  } = useDropdown();

  const handleDateChange = (date, type) => {
    if (type === 'start') {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  return (
    <div className="relative flex flex-col max-lg:space-y-2 lg:flex-row lg:items-end">
      <LocationSection
        labelClassName={labelClassName}
        location={location}
        setLocation={setLocation}
        showLocationDropdown={showLocationDropdown}
        toggleDropdown={toggleDropdown}
        closeDropdowns={closeDropdowns}
      />
      <DateRangeSection
        labelClassName={labelClassName}
        startDate={startDate}
        endDate={endDate}
        handleDateChange={handleDateChange}
        showDatePickerDropdown={showDatePickerDropdown}
        toggleDropdown={toggleDropdown}
        closeDropdowns={closeDropdowns}
      />
      <RoomAndGuestSection
        labelClassName={labelClassName}
        rooms={rooms}
        guests={guests}
        setRooms={setRooms}
        setGuests={setGuests}
        showGuestsAndRoomsDropdown={showGuestsAndRoomsDropdown}
        toggleDropdown={toggleDropdown}
        closeDropdowns={closeDropdowns}
      />
      <div className="flex items-center justify-center">
        <button className="flex bg-orange-500 items-center justify-center max-lg:rounded-lg max-lg:w-full lg:rounded-r-lg hover:bg-orange-600">
          <SearchIcon className="w-14 h-14 p-4 text-white" />
          <span className="lg:hidden text-white text-lg font-semibold py-4">Search</span>
        </button>
      </div>
    </div>
  );
};

export default RoomSearchBar;
