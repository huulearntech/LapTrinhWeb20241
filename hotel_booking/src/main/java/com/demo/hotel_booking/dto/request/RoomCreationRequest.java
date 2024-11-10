package com.demo.hotel_booking.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RoomCreationRequest {
    private String hotelID;
    private String roomID;
    private String description;
    private String type;
    private String status;
    private String price;
    private int capacity;
}