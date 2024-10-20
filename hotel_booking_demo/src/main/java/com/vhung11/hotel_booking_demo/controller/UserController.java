package com.vhung11.hotel_booking_demo.controller;

import com.vhung11.hotel_booking_demo.dto.request.UserCreationRequest;
import com.vhung11.hotel_booking_demo.entity.User;
import com.vhung11.hotel_booking_demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public User createUser(@RequestBody UserCreationRequest request) {
        return userService.createUser(request);
    }
}
