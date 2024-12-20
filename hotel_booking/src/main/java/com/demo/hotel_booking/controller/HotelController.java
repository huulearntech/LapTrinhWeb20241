package com.demo.hotel_booking.controller;

import com.demo.hotel_booking.entity.Hotel;
import com.demo.hotel_booking.entity.Room;
import com.demo.hotel_booking.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/hotels")
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @GetMapping("/search")
    public ResponseEntity<List<Hotel>> searchHotels(@RequestParam String address,
                                                    @RequestParam LocalDate checkInDate,
                                                    @RequestParam LocalDate checkOutDate,
                                                    @RequestParam int numOfPeople) {
        List<Hotel> availableHotels = hotelService.findHotelsWithAvailableRooms(address, checkInDate, checkOutDate, numOfPeople);
        return ResponseEntity.ok(availableHotels);
    }

    @GetMapping("/{hotelId}/rooms")
    public ResponseEntity<List<Room>> getRoomsByHotelId(@PathVariable Long hotelId) {
        List<Room> rooms = hotelService.findRoomsByHotelId(hotelId);
        return ResponseEntity.ok(rooms);
    }
}