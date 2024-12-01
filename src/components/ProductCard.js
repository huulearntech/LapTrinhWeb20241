import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrNext as NextIcon, GrPrevious as PreviousIcon } from 'react-icons/gr';

import { FaBuilding as AccommodationIcon } from 'react-icons/fa6';
import {
  PiMapPinFill as LocationIcon,
  PiStar as EmptyStarIcon,
  PiStarHalfFill as HalfStarIcon,
  PiStarFill as FullStarIcon
} from 'react-icons/pi';

import { toast } from 'react-toastify';


// Helper function to display stars
const StarRating = ({ rating }) => {
  // Round the rating, and calculate the full stars and half star based on its decimal
  const doubledRating = Math.round(rating * 2); // Multiply by 2 and round to avoid float precision issues
  const fullStars = Math.floor(doubledRating / 2); // Get full stars count
  const hasHalfStar = doubledRating % 2 === 1; // Check if the rating has a half star

  // Calculate the remaining empty stars to make sure there are always 5 stars
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {/* Display full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <FullStarIcon key={index} className="w-4 h-4 text-yellow-500" />
      ))}

      {/* Display half star if necessary */}
      {hasHalfStar && (
        <HalfStarIcon className="w-4 h-4 text-yellow-500" />
      )}

      {/* Display empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <EmptyStarIcon key={index} className="w-4 h-4 text-gray-500" />
      ))}
    </div>
  );
};



const ProductCard = ({ product, compact, className }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const cardClass = compact ? 'max-w-md h-96' : 'max-w-3/4 flex';
  const imageClass = compact ? 'relative w-full h-48' : 'w-1/3 p-4';
  const descriptionClass = compact ? 'px-4 py-2 space-y-2' : 'flex w-2/3 divide-x-2 divide-gray-200';
  const priceButtonClass = compact ? 'px-4 py-2 flex justify-between items-center' : 'w-2/5 p-4 flex flex-col justify-end';

  return (
    <div className={`mx-auto bg-white shadow-lg rounded-lg overflow-hidden ${cardClass} ${className}`}>
      {/* Image Section */}
      <div className={imageClass}>
        {compact ? (
          <>
            <img
              src={product.images[currentImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-lg opacity-75 hover:opacity-100"
            >
              <PreviousIcon className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-lg opacity-75 hover:opacity-100"
            >
              <NextIcon className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            <Link to={`/product-detail/${product.id}`}>
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover mb-2 rounded-lg"
              />
            </Link>
            <div className="grid grid-cols-3 gap-2">
              {product.images.slice(1).map((image, index) => (
                <Link key={index} to={`/product-detail/${product.id}`}>
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover rounded-md cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Description Section */}
      <div className={descriptionClass}>
        <div className={compact ? '' : 'w-3/5 p-4 flex flex-col justify-between'}>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <StarRating rating={product.rating} />
          </div>
          <div className="flex space-x-4 items-center text-gray-700">
            <LocationIcon />
            <p className="text-sm">{product.location}</p>
          </div>
          <div className="flex space-x-4 items-center text-blue-500">
            <AccommodationIcon />
            <p className="text-sm">{product.accommodation}</p>
          </div>
          {compact ? null : <p className="text-gray-700 mt-2">{product.description}</p>}
          <div className="flex flex-row">
            {product.amenities.slice(0, 3).map((amenity, index) => (
              <span key={index} className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold mr-2">
                {amenity}
              </span>
            ))}
            {product.amenities.length > 3 && (
              <div className="relative group">
                <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold mr-2">
                  +{product.amenities.length - 3}
                </span>
                <div className="absolute mt-2 max-w-48 bg-white border border-gray-300 rounded-lg shadow-lg p-2 hidden group-hover:block">
                  {product.amenities.slice(3).map((amenity, index) => (
                    <span key={index} className="block text-gray-700 text-xs font-semibold mb-1">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Price and Buy Button Section */}
        <div className={priceButtonClass}>
          <p className="text-xl font-bold text-orange-600">${product.price}</p>
          <button
            onClick={() => toast.success(`Buying ${product.name}...`)}
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-colors"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;