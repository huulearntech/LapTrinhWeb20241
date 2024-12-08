import { MdPersonAddAlt as GuestIcon } from 'react-icons/md';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const RoomAndGuestSection = ({ labelClassName, rooms, guests, setRooms, setGuests, showGuestsAndRoomsDropdown, toggleDropdown, closeDropdowns }) => (
  <div className="relative flex flex-col max-lg:mb-4">
    <label className={`px-2 font-semibold ${labelClassName}`}>Room and Guest</label>
    <div className="flex flex-row h-14 text-lg max-lg:rounded-lg bg-white border-[1px] hover:border-gray-400 focus:border-blue-500 items-center cursor-pointer"
      onClick={() => toggleDropdown('guests')}
    >
      <GuestIcon className="w-10 h-10 p-2" />
      <input className="h-10 pr-2 focus:outline-none" readOnly value={`${rooms} Room(s), ${guests} Guest(s)`} />
    </div>
    <div className={`absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg ${showGuestsAndRoomsDropdown ? 'block' : 'hidden'}`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg">Rooms</span>
          <div className="flex items-center border border-gray-500 rounded-lg">
            <button
              className={`rounded-l-lg text-lg font-bold ${rooms > 1 ? 'text-blue-500' : 'text-gray-400'}`}
              onClick={() => setRooms(prevRooms => Math.max(1, prevRooms - 1))}
              disabled={rooms <= 1}
            >
              <FaMinus className="w-4 h-4 m-2" />
            </button>
            <span className="px-4 text-lg">{rooms}</span>
            <button
              className="rounded-r-lg text-lg font-bold text-blue-500"
              onClick={() => setRooms(prevRooms => (prevRooms < guests ? prevRooms + 1 : prevRooms))}
              disabled={rooms >= guests}
            >
              <FaPlus className="w-4 h-4 m-2" />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg">Guests</span>
          <div className="flex items-center border border-gray-500 rounded-lg">
            <button
              className={`rounded-l-lg text-lg ${guests > 1 ? 'text-blue-500' : 'text-gray-400'}`}
              onClick={() => setGuests(prevGuests => Math.max(1, prevGuests - 1))}
              disabled={guests <= 1}
            >
              <FaMinus className="w-4 h-4 m-2" />
            </button>
            <span className="px-4 text-lg">{guests}</span>
            <button
              className="rounded-r-lg text-lg text-blue-500"
              onClick={() => setGuests(guests + 1)}
            >
              <FaPlus className="w-4 h-4 m-2" />
            </button>
          </div>
        </div>
        {rooms >= guests && (
          <div className="text-red-500 text-sm mt-2">
            Number of rooms cannot exceed number of guests.
            (This feature is not complete yet)
          </div>
        )}
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 text-blue-500 font-semibold rounded-lg hover:bg-gray-200"
            onClick={closeDropdowns}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default RoomAndGuestSection;