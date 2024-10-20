package com.vhung11.hotel_booking_demo.mapper;

import com.vhung11.hotel_booking_demo.dto.request.UserCreationRequest;
import com.vhung11.hotel_booking_demo.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserCreationRequest request);
}
