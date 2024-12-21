import React, { useState, useCallback } from 'react';
import { DatePicker, Button } from 'antd';
import 'moment/locale/vi';
import locale from 'antd/es/date-picker/locale/vi_VN';
import moment from 'moment';
import { CalendarOutlined, SearchOutlined } from '@ant-design/icons';

import Location from './Location';
import GuestsAndRooms from './GuestsAndRooms';

const InoutDate = React.memo(({ checkInOut, setCheckInOut }) => {
  const disabledDate = (current) => {
    return current && current < moment().startOf('day');
  };

  return (
    <div className="flex w-full flex-col">
      <label className="text-black text-sm font-semibold ml-1 mb-1">Ngày nhận phòng và trả phòng</label>
        <DatePicker.RangePicker
          placeholder={['Ngày nhận', 'Ngày trả']}
          prefix={<CalendarOutlined style={{ fontSize: '20px', marginRight: '4px', color: '#1677ff' }} />}
          suffixIcon={null}
          size='large'
          disabledDate={disabledDate}
          format={'DD/MM/YYYY'}
          value={checkInOut}
          onChange={(dates) => setCheckInOut(dates)}
          locale={locale}
        />
    </div>
  );
});


const SearchButton = React.memo(({ handleSubmit, isLoading }) => {
  return (
    <Button
      type='primary'
      icon={<SearchOutlined style={{ fontSize: '20px', marginRight: '4px', color: 'white' }} />}
      size='large'
      onClick={handleSubmit}
      loading={isLoading}
    >
      <span className='text-[16px] font-semibold text-white'>Tìm kiếm</span>
    </Button>
  );
});

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkInOut, setCheckInOut] = useState([]);
  const [guestsAndRooms, setGuestsAndRooms] = useState({ adults: 2, children: 0, rooms: 1 });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback((e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log('Search button clicked', { location, checkInOut, guestsAndRooms });
    setIsLoading(false);
  }, [location, checkInOut, guestsAndRooms]);

  return (
    <div className="flex w-full max-w-7xl items-end justify-center space-x-2">
      <Location location={location} setLocation={setLocation} />
      <InoutDate checkInOut={checkInOut} setCheckInOut={setCheckInOut} />
      <GuestsAndRooms guestsAndRooms={guestsAndRooms} setGuestsAndRooms={setGuestsAndRooms} />
      <SearchButton handleSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}

export default SearchBar;