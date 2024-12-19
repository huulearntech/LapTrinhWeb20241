package com.demo.hotel_booking.controller;

import com.demo.hotel_booking.entity.Room;
import com.demo.hotel_booking.service.RoomService;
import com.demo.hotel_booking.service.RoomServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/managers")
public class RoomController {
    @Autowired
    private RoomServiceImpl roomService;

    @PostMapping("/add_rooms")
    public ResponseEntity<Room> createRoom(@RequestPart Room room, @RequestPart("file") MultipartFile file) {
        try {
            Room createdRoom = roomService.createRoom(room, file);
            return ResponseEntity.ok(createdRoom);
        } catch (IOException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/rooms")
    public ResponseEntity<List<Room>> getAllRooms() {
        List<Room> rooms = roomService.getAllRooms();
        return ResponseEntity.ok(rooms);
    }

    @GetMapping("/rooms/{roomId}")
    public ResponseEntity<Room> getRoomById(@PathVariable Long roomId) {
        Room room = roomService.getRoomById(roomId).orElseThrow(() -> new RuntimeException("Room not found"));
        return ResponseEntity.ok(room);
    }

    @PutMapping("/update/{roomId}")
    public ResponseEntity<Room> updateRoom(@PathVariable Long roomId, @RequestBody Room roomDetails) {
        Room updatedRoom = roomService.updateRoom(roomId, roomDetails);
        return ResponseEntity.ok(updatedRoom);
    }

    @DeleteMapping("/delete/{roomId}")
    public ResponseEntity<Void> deleteRoom(@PathVariable Long roomId) {
        roomService.deleteRoom(roomId);
        return ResponseEntity.noContent().build();
    }
}