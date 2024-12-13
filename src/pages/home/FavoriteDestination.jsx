import React, { useState } from 'react';
import { GrNext } from 'react-icons/gr';

const locations = ['New York', 'Paris', 'Tokyo', 'Sydney'];
const hotels = {
  'New York': [
    { name: 'Hotel 1', description: 'Description 1' },
    { name: 'Hotel 2', description: 'Description 2' },
  ],
  'Paris': [
    { name: 'Hotel 3', description: 'Description 3' },
    { name: 'Hotel 4', description: 'Description 4' },
  ],
  'Tokyo': [
    { name: 'Hotel 5', description: 'Description 5' },
    { name: 'Hotel 6', description: 'Description 6' },
  ],
  'Sydney': [
    { name: 'Hotel 7', description: 'Description 7' },
    { name: 'Hotel 8', description: 'Description 8' },
  ],
};

const FavoriteDestination = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="flex flex-col p-4 items-start">
      <h2 className="text-2xl font-bold mb-6">Favorite Destination</h2>
      <div className="mb-3 flex space-x-2">
        {locations.map((location) => (
          <button
            key={location}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${selectedLocation === location ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-500'}`}
            onClick={() => setSelectedLocation(location)}
          >
            {location}
          </button>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-4 transition-opacity duration-300">
        {hotels[selectedLocation].map((hotel, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold">{hotel.name}</h3>
            <p>{hotel.description}</p>
          </div>
        ))}
      </div>
      <button className="flex items-center justify-center mt-4 px-4 py-2 bg-blue-500 text-white rounded-full font-semibold transition-colors duration-300 hover:bg-blue-600">
        <span>Book Hotel Now</span>
        <GrNext className="inline-block ml-2" />
      </button>  
    </div>
  );
};

export default FavoriteDestination;
