import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-300 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonCard2 = () => {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-row space-x-4">
        <div className="w-1/3 p-4 bg-gray-300 rounded-lg"></div>
        <div className='w-1/3 p-4 flex flex-col justify-between'>
          <div className="flex justify-between items-center mb-2">
            <div className="h-10 w-20 bg-gray-300"></div>
            <div className="h-10 w-20 bg-gray-300"></div>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="bg-gray-300"></div>
            <div className="bg-gray-300"></div>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="bg-gray-300"></div>
            <div className="bg-gray-300"></div>
          </div>
          <div className="bg-gray-300 mt-2"></div>
        </div>
        <div className="w-1/3 flex-row justify-between">
          <div className="bg-gray-300"></div>
          <div className="bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

const SkeletonProductCard = ({ compact }) => {
  const cardClass = compact ? 'max-w-md h-96' : 'max-w-3/4 h-60 flex';
  const imageClass = compact ? 'relative w-full h-48' : 'w-1/3 p-4';
  const descriptionClass = compact ? 'px-4 py-2 space-y-2' : 'flex w-2/3 divide-x-2 divide-gray-200';
  const priceButtonClass = compact ? 'px-4 py-2 flex justify-between items-center' : 'w-2/5 p-4 flex flex-col justify-end';

  return (
    <div className={`mx-auto bg-white shadow-lg rounded-lg overflow-hidden ${cardClass}`}>
      {/* Image Section */}
      <div className={imageClass}>
        <div className="w-full h-full bg-gray-300 animate-pulse"></div>
      </div>

      {/* Description Section */}
      <div className={descriptionClass}>
        <div className={compact ? '' : 'w-3/5 p-4 flex flex-col justify-between'}>
          <div className="flex justify-between items-center mb-2">
            <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
              ))}
            </div>
          </div>
          <div className="flex space-x-4 items-center text-gray-700">
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
          </div>
          <div className="flex space-x-4 items-center text-blue-500">
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
          </div>
          {compact ? null : <div className="h-4 bg-gray-300 rounded mt-2 animate-pulse w-full"></div>}
          <div className="flex flex-row space-x-2 mt-2">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="h-4 bg-gray-300 rounded-full w-1/4 animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Price and Buy Button Section */}
        <div className={priceButtonClass}>
          <div className="h-6 bg-gray-300 rounded w-1/2 animate-pulse"></div>
          <div className="h-10 bg-gray-300 rounded w-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

// export { SkeletonProductCard };

export default SkeletonProductCard;

