package com.demo.hotel_booking.controller;

import com.demo.hotel_booking.entity.Room;
import com.demo.hotel_booking.service.RoomService;
import com.demo.hotel_booking.service.RoomServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/managers")
public class RoomController {
    @Autowired
    private RoomServiceImpl roomService;

    @PostMapping("/add_rooms")
    public ResponseEntity<Room> createRoom(@RequestBody Room room) {
        Room createdRoom = roomService.createRoom(room);
        return ResponseEntity.ok(createdRoom);
    }
}