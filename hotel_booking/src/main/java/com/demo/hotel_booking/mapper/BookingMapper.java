package com.demo.hotel_booking.mapper;

import com.demo.hotel_booking.dto.request.BookingRequest;
import com.demo.hotel_booking.entity.BookedRoom;
import com.demo.hotel_booking.entity.Room;
import org.springframework.stereotype.Service;

@Service
public class BookingMapper {

    public BookedRoom toBookedRoom(BookingRequest request) {
        return BookedRoom.builder()
                .checkInDate(request.getCheckInDate())
                .checkOutDate(request.getCheckOutDate())
                .guestFullName(request.getGuestFullName())
                .guestEmail(request.getGuestEmail())
                .numOfAdults(request.getNumOfAdults())
                .numOfChildren(request.getNumOfChildren())
                .room(Room.builder()
                        .id(request.getRoomId())
                        .build())
                .isPaid(false)
                .isCheckedIn(false)
                .isCheckedOut(false)
                .build();
    }
}