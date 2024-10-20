package com.demo.hotel_booking.mapper;

import com.demo.hotel_booking.dto.request.UserCreationRequest;
import com.demo.hotel_booking.dto.request.UserLoginRequest;
import com.demo.hotel_booking.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserCreationRequest request);
    User toUserLogin(UserLoginRequest request);
}
