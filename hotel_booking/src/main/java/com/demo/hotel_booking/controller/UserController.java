package com.demo.hotel_booking.controller;

import com.demo.hotel_booking.dto.request.UserCreationRequest;
import com.demo.hotel_booking.dto.request.UserLoginRequest;
import com.demo.hotel_booking.entity.User;
import com.demo.hotel_booking.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/users")
    public User createUser(@RequestBody UserCreationRequest request) {
        return userService.createUser(request);
    }

    @PostMapping("/login")
    public User login(@RequestBody UserLoginRequest request) {
        return userService.login(request);
    }
}
