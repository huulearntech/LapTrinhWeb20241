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
public class Hotel {
    @Id
    private String hotelID;
    private String hotelName;
    private String hotelAddress;
    private String hotelEmail;
    private String hotelPassword;

    @OneToMany(mappedBy = "hotel")
    private List<Room> rooms;
}