package com.demo.hotel_booking.service;

import com.demo.hotel_booking.entity.Room;
import com.demo.hotel_booking.exception.RoomNotFoundException;
import com.demo.hotel_booking.repository.RoomRepository;
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
    public Optional<Room> getRoomById(Long roomId) {
        return roomRepository.findById(String.valueOf(roomId));
    }

    @Override
    public Room updateRoom(Long roomId, Room roomDetails) {
        Room room = findRoomByIdOrThrow(roomId);

        if (roomDetails.getDescription() != null) {
            room.setDescription(roomDetails.getDescription());
        }
        if (roomDetails.getType() != null) {
            room.setType(roomDetails.getType());
        }
        if (roomDetails.getStatus() != null) {
            room.setStatus(roomDetails.getStatus());
        }
        if (roomDetails.getPrice() != null) {
            room.setPrice(roomDetails.getPrice());
        }
        if (roomDetails.getCapacity() > 0) {
            room.setCapacity(roomDetails.getCapacity());
        }
        if (roomDetails.getHotel() != null) {
            room.setHotel(roomDetails.getHotel());
        }

        return roomRepository.save(room);
    }

    @Override
    public void deleteRoom(Long roomId) {
        Room room = findRoomByIdOrThrow(roomId);
        roomRepository.delete(room);
    }

    private Room findRoomByIdOrThrow(Long roomId) {
        return roomRepository.findById(String.valueOf(roomId)).orElseThrow(() -> new RoomNotFoundException("Room with ID " + roomId + " not found"));
    }
}
