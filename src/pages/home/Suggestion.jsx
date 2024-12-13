import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../../fake_data';

const { hanoi, hoian, dalat, saigon, danang } = images;
const suggestions = [
  { id: 1, title: 'Product 1', image: hanoi },
  { id: 2, title: 'Product 2', image: hoian },
  { id: 3, title: 'Product 3', image: dalat },
  { id: 4, title: 'Product 4', image: saigon },
  { id: 5, title: 'Product 5', image: danang },
  // Add more products as needed
];

const SuggestionCard = ({ suggestion }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${suggestion.id}`);
  };

  return (
    <div
      className="relative w-80 h-48 bg-gray-200 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-300 overflow-hidden"
      onClick={handleCardClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundImage: `url(${suggestion.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${hover ? 'bg-opacity-50' : 'bg-opacity-30'}`}>
        <div className={`absolute bottom-0 w-full text-center py-2 text-white transform transition-transform duration-300 ${hover ? 'translate-y-0' : 'translate-y-full'}`}>
          See available hotels
        </div>
      </div>
      <span className="absolute top-4 left-4 text-white text-lg font-semibold">{suggestion.title}</span>
    </div>
  );
};

const Suggestion = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {suggestions.map((suggestion) => (
          <SuggestionCard key={suggestion.id} suggestion={suggestion} />
        ))}
      </div>
    </div>
  );
};

export default Suggestion;