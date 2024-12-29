package com.demo.hotel_booking.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookedRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @Column(name = "check_in")
    private LocalDate checkInDate;

    @Column(name = "check_out")
    private LocalDate checkOutDate;

    @Column(name = "guest_fullName")
    private String guestFullName;

    @Column(name = "guest_email")
    private String guestEmail;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "num_of_adults")
    private int numOfAdults;

    @Column(name = "num_of_children")
    private int numOfChildren;

    @Column(name = "confirmation_code")
    private String bookingConfirmationCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    // Payment-related fields
    @Column(name = "payment_status")
    private String paymentStatus; // PENDING, PAID, FAILED

    @Column(name = "transaction_id")
    private String transactionId; // VNPay transaction ID

    @Column(name = "payment_amount")
    private int paymentAmount; // Payment amount in VND (unit: dong)

    @Column(name = "payment_date")
    private LocalDateTime paymentTime; // Date of payment

    @Column(name = "is_paid")
    private boolean isPaid; // true if the booking is paid, false otherwise

    @Column(name = "is_checked_in")
    private boolean isCheckedIn; // true if the guest has checked in, false otherwise

    @Column(name = "is_checked_out")
    private boolean isCheckedOut; // true if the guest has checked out, false otherwise

    public void generateConfirmationCode() {
        this.bookingConfirmationCode = UUID.randomUUID().toString();
    }
}
