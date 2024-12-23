package com.demo.hotel_booking.repository;

import com.demo.hotel_booking.entity.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface HotelRepository extends JpaRepository<Hotel, Long> {

    @Query("SELECT DISTINCT h FROM Hotel h JOIN h.rooms r WHERE h.address = :address AND r.numOfAdults >= :numOfAdults AND r.numOfChildren >= :numOfChildren AND r.id NOT IN " +
            "(SELECT br.room.id FROM BookedRoom br WHERE br.checkInDate <= :checkOutDate AND br.checkOutDate >= :checkInDate)")
    List<Hotel> findHotelsWithAvailableRooms(@Param("address") String address,
                                             @Param("checkInDate") LocalDate checkInDate,
                                             @Param("checkOutDate") LocalDate checkOutDate,
                                             @Param("numOfPeople") int numOfAdults,
                                             @Param("numOfChildren") int numOfChildren);

}