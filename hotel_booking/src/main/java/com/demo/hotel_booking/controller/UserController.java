package com.demo.hotel_booking.controller;

import com.demo.hotel_booking.dto.request.UserCreationRequest;
import com.demo.hotel_booking.entity.User;
import com.demo.hotel_booking.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String showHomePage() {
        return "index";
    }

    @GetMapping("login")
    public String showLogin() {
        return "login";
    }

    @GetMapping("register")
    public String showRegisterForm() {
        return "register";
    }




}
