package com.demo.hotel_booking.service;

import com.demo.hotel_booking.entity.Room;

import java.util.List;
import java.util.Optional;

public interface RoomService {
    Room createRoom(Room room);
    List<Room> getAllRooms();
    Optional<Room> getRoomById(String roomId);
}