import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const LocationSelector = ({ locations, selectedLocation, setSelectedLocation }) => {
  return (
    <div className="mb-4">
      <label htmlFor="location" className="block text-sm font-medium text-gray-700">Hotel Location</label>
      <select
        id="location"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
      >
        <option value="">Select a location</option>
        {locations.map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>
    </div>
  );
};

const DateRangePicker = ({ checkInDate, checkOutDate, setCheckInDate, setCheckOutDate }) => {
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Check-in & Check-out</label>
      <DatePicker
        selected={checkInDate}
        onChange={handleDateChange}
        startDate={checkInDate}
        endDate={checkOutDate}
        selectsRange
        minDate={new Date()} // Prevent selecting dates before today
        dateFormat="dd/MM/yyyy"
        placeholderText="Select date range"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
      />
    </div>
  );
};



const CapacityCounter = ({ capacity, setCapacity }) => {
  const [inputValue, setInputValue] = useState(capacity);
  
  useEffect(() => {
    setInputValue(capacity); // Update inputValue when capacity changes
  }, [capacity]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value >= 1) {
      setInputValue(value);
      setCapacity(value);
    } else {
      setInputValue(1);
      setCapacity(1);
    }
  };

return (
    <div className="mb-4 flex flex-col items-center">
      <label className="block text-sm font-medium text-gray-700 mr-4">Room Capacity</label>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        className="mx-2 text-lg w-20 text-center border rounded-md"
        min="1"
      />
    </div>
  );
};


const RoomFilter = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [capacity, setCapacity] = useState(1);

  const locations = ['New York', 'Los Angeles', 'Chicago']; // Sample locations

  const handleSubmit = () => {
    // Handle the submission logic here
  };
  
  const handleReset = () => {
    console.log("Reset");
    setSelectedLocation('');
    setCheckInDate(null);
    setCheckOutDate(null);
    setCapacity(1);
  }

  return (
    <div className="flex flex-col w-full p-4 items-center bg-white rounded-lg shadow-md">
    <div className="flex flex-row space-x-4">
      <LocationSelector locations={locations} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
      <DateRangePicker 
        checkInDate={checkInDate} 
        setCheckInDate={setCheckInDate} 
        checkOutDate={checkOutDate} 
        setCheckOutDate={setCheckOutDate} 
      />
      <CapacityCounter capacity={capacity} setCapacity={setCapacity} />
      </div>
      <div className="space-x-4">
      <button onClick={handleReset} className="mt-4 px-4 py-2 bg-gray-400 text-black rounded-md hover:bg-gray-500">
        Reset Filter
      </button>
      <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Search Rooms
      </button>
    </div>
    </div>
  );
};

export default RoomFilter;
