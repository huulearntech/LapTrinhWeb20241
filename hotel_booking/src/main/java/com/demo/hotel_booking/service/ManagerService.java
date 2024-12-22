package com.demo.hotel_booking.service;

import com.demo.hotel_booking.dto.request.ManagerRegistrationRequest;
import com.demo.hotel_booking.entity.Hotel;
import com.demo.hotel_booking.entity.User;
import com.demo.hotel_booking.repository.HotelRepository;
import com.demo.hotel_booking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ManagerService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private HotelRepository hotelRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void register(ManagerRegistrationRequest request) {
        // Create and save the User
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        //user.setRole("MANAGER");
        userRepository.save(user);

        // Create and save the Hotel
        Hotel hotel = new Hotel();
        hotel.setName(request.getHotelName());
        hotel.setAddress(request.getHotelAddress());
        hotel.setEmail(request.getEmail());
        hotelRepository.save(hotel);
    }
}