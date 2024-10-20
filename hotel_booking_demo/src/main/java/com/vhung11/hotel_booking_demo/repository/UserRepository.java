package com.vhung11.hotel_booking_demo.repository;

import com.vhung11.hotel_booking_demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
}
