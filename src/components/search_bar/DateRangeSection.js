import { PiCalendarDots as CalendarIcon } from 'react-icons/pi';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import vi from 'date-fns/locale/vi';
registerLocale('vi', vi);


const DateRangeSection = ({ labelClassName, startDate, endDate, handleDateChange, showDatePickerDropdown, toggleDropdown, closeDropdowns }) => (
  <div className="relative flex flex-col">
    <label className={`px-2 font-semibold ${labelClassName}`}>Date and Time</label>
    <div className="flex flex-row h-14 text-lg max-lg:rounded-lg bg-white border-[1px] hover:border-gray-400 focus:border-blue-500 items-center cursor-pointer"
      onClick={() => toggleDropdown('date')}
    >
      <CalendarIcon className="w-10 h-10 p-2" />
      <input className="h-10 pr-2 focus:outline-none" readOnly value={`${startDate.toLocaleDateString('vi-VN')} - ${endDate.toLocaleDateString('vi-VN')}`} />
    </div>
    <div className={`absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg ${showDatePickerDropdown ? 'block' : 'hidden'}`}>
      <div className="p-2">
        <DatePicker
          selected={startDate}
          onChange={(date) => handleDateChange(date, 'start')}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="w-full p-2 border border-gray-300 rounded"
          locale={'vi'}
          dateFormat={'dd/MM/yyyy'}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => handleDateChange(date, 'end')}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          locale={'vi'}
          dateFormat={'dd/MM/yyyy'}
        />
      </div>
    </div>
  </div>
);

export default DateRangeSection;