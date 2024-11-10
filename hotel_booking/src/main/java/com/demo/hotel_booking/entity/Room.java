package com.demo.hotel_booking.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String hotelID;
    private String roomID;
    private String description;
    private String type;
    private String status;
    private String price;
    private int capacity;
    //private String image;
    //private String createdAt;
    //private String updatedAt;
    //private String deletedAt;
}
