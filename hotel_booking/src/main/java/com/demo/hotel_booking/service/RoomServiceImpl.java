package com.demo.hotel_booking.service;

import com.demo.hotel_booking.entity.Room;
import com.demo.hotel_booking.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class RoomServiceImpl implements RoomService {
    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private ImageUploadService imageUploadService;

    @Override
    public Room createRoom(Room room, MultipartFile file) throws IOException {
        if (file != null && !file.isEmpty()) {
            Map uploadResult = imageUploadService.uploadImage(file);
            String imageUrl = (String) uploadResult.get("url");
            room.getImages().add(imageUrl);
        }
        return roomRepository.save(room);
    }

    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public Optional<Room> getRoomById(Long roomId) {
        return roomRepository.findById(roomId);
    }

    @Override
    public Room updateRoom(Long roomId, Room roomDetails) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found"));
        room.setDescription(roomDetails.getDescription());
        room.setType(roomDetails.getType());
        room.setStatus(roomDetails.getStatus());
        room.setPrice(roomDetails.getPrice());
        room.setCapacity(roomDetails.getCapacity());
        room.setImages(roomDetails.getImages());
        room.setHotel(roomDetails.getHotel());
        return roomRepository.save(room);
    }

    @Override
    public void deleteRoom(Long roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found"));
        roomRepository.delete(room);
    }
}