package com.demo.hotel_booking.repository;

import com.demo.hotel_booking.entity.Feedback;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedBackRepository extends JpaRepository<Feedback, Integer> {
    @Query("""
            SELECT feedback
            FROM Feedback  feedback
            WHERE feedback.room.roomID = :roomId
""")
    Page<Feedback> findAllByBookId(@Param("bookId") Integer bookId, Pageable pageable);
}
