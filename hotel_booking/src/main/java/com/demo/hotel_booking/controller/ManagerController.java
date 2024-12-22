package com.demo.hotel_booking.controller;

import com.demo.hotel_booking.dto.request.ManagerRegistrationRequest;
import com.demo.hotel_booking.service.ManagerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/managers")
public class ManagerController {

    private final ManagerService managerService;

    public ManagerController(ManagerService managerService) {
        this.managerService = managerService;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> register(@RequestBody ManagerRegistrationRequest request) {
        managerService.register(request);
        return ResponseEntity.status(HttpStatus.CREATED).body("Manager registered successfully");
    }
}