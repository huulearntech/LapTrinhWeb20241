package com.demo.hotel_booking.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private Long id;
    private String hotelID;
    private String roomID;
    private String description;
    private String type;
    private String status;
    private String price;
    private int capacity;

    @ElementCollection
    private List<String> images;
}
