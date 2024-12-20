package com.demo.hotel_booking.service;

import com.demo.hotel_booking.entity.Hotel;
import com.demo.hotel_booking.entity.Room;
import com.demo.hotel_booking.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    public List<Hotel> findHotelsWithAvailableRooms(String address, LocalDate checkInDate, LocalDate checkOutDate, int numOfPeople) {
        return hotelRepository.findHotelsWithAvailableRooms(address, checkInDate, checkOutDate, numOfPeople);
    }

    public List<Room> findRoomsByHotelId(Long hotelId) {
        return hotelRepository.findById(hotelId).orElseThrow().getRooms();
    }
}