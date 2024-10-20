package com.demo.hotel_booking.dto.request;

import lombok.Getter;

@Getter
public class UserLoginRequest {
    private String email;
    private String password;

    public UserLoginRequest() {
    }

    public UserLoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

}
