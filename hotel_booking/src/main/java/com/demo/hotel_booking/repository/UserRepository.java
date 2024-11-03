package com.demo.hotel_booking.repository;

import com.demo.hotel_booking.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User findFirstByEmail(String username);
}
