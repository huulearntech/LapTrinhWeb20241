package com.demo.hotel_booking.service;

import com.demo.hotel_booking.dto.request.UserCreationRequest;
import com.demo.hotel_booking.entity.User;
import com.demo.hotel_booking.mapper.UserMapper;
import com.demo.hotel_booking.repository.UserRepository;
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
