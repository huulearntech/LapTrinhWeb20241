package com.demo.hotel_booking.dto.request;

import lombok.Data;

@Data
public class ManagerRegistrationRequest {
    private String email;
    private String password;
    private String hotelName;
    private String hotelAddress;
}