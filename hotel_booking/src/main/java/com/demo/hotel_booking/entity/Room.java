package com.demo.hotel_booking.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomID;
    private String roomNumber;
    private String description;
    private String type;
    private String status;
    private BigDecimal price;
    private int capacity;

    @ElementCollection
    private List<String> images;

    @ManyToOne
    @JoinColumn(name = "hotelID", referencedColumnName = "hotelID")
    private Hotel hotel;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BookedRoom> bookings = new ArrayList<>();

    public List<BookedRoom> getBookings() {
        return bookings;
    }

    public void addBooking(BookedRoom booking) {
        bookings.add(booking);
        booking.setRoom(this);
    }
}