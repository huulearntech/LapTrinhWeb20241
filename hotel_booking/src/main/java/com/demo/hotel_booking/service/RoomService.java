package com.demo.hotel_booking.service;

import com.demo.hotel_booking.entity.Room;

import java.util.List;
import java.util.Optional;

public interface RoomService {
    Room createRoom(Room room);
    List<Room> getAllRooms();
    Optional<Room> getRoomById(Long roomId);
    Room updateRoom(Long roomId, Room roomDetails);
    void deleteRoom(Long roomId);
}