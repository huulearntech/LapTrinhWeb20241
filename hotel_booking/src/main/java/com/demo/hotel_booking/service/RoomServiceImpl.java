package com.demo.hotel_booking.service;

import com.demo.hotel_booking.entity.Room;
import com.demo.hotel_booking.repository.RoomRepository;
import com.demo.hotel_booking.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomServiceImpl implements RoomService {
    @Autowired
    private RoomRepository roomRepository;

    @Override
    public Room createRoom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public Optional<Room> getRoomById(String roomId) {
        return roomRepository.findById(roomId);
    }

    @Override
    public Room updateRoom(String roomId, Room roomDetails) {
        Room room = roomRepository.findById(roomId).orElseThrow(() -> new RuntimeException("Room not found"));
        room.setHotelID(roomDetails.getHotelID());
        room.setDescription(roomDetails.getDescription());
        room.setType(roomDetails.getType());
        room.setStatus(roomDetails.getStatus());
        room.setPrice(roomDetails.getPrice());
        room.setCapacity(roomDetails.getCapacity());
        return roomRepository.save(room);
    }

    @Override
    public void deleteRoom(String roomId) {
        Room room = roomRepository.findById(roomId).orElseThrow(() -> new RuntimeException("Room not found"));
        roomRepository.delete(room);
    }
}