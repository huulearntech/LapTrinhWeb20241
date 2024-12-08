import { PiMapPin as LocationIcon } from 'react-icons/pi';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

const LocationSection = ({ labelClassName, location, setLocation, showLocationDropdown, toggleDropdown, closeDropdowns }) => (
  <div className="relative flex flex-col">
    <label className={`px-2 font-semibold ${labelClassName}`}>Location</label>
    <div className="relative flex flex-row h-14 text-lg rounded-l-lg max-lg:rounded-lg bg-white border-[1px] hover:border-gray-400 focus:border-blue-500 items-center cursor-pointer"
      onClick={() => toggleDropdown('location')}
    >
      <LocationIcon className="w-10 h-10 p-2" />
      <input
        className="h-10 pr-8 focus:outline-none flex-grow"
        value={location}
        placeholder="Select Location"
        onChange={(e) => setLocation(e.target.value)}
      />
      {location && (
        <CloseIcon
          className="absolute w-6 h-6 top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center p-1 rounded-full hover:bg-gray-200"
          onClick={(e) => {
            e.stopPropagation();
            setLocation('');
          }}
        />
      )}
    </div>
    <div className={`absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg ${showLocationDropdown ? 'block' : 'hidden'}`}>
      <div className="max-h-60 overflow-y-auto rounded-lg">
        {['New York', 'Los Angeles', 'Chicago'].map((loc, index) => (
          <div
            key={index}
            className="p-2 text-lg hover:bg-gray-200 cursor-pointer"
            onClick={() => {
              setLocation(loc);
              closeDropdowns();
            }}
          >
            {loc}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LocationSection;