package com.vhung11.hotel_booking_demo.service;

import com.vhung11.hotel_booking_demo.dto.request.UserCreationRequest;
import com.vhung11.hotel_booking_demo.entity.User;
import com.vhung11.hotel_booking_demo.mapper.UserMapper;
import com.vhung11.hotel_booking_demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserMapper userMapper;

    public User createUser(UserCreationRequest request) {
        User user = userMapper.toUser(request);
        return userRepository.save(user);
    }
}
