package com.example.SpringReact.service;


import com.example.SpringReact.domain.Appointment;
import com.example.SpringReact.domain.Customer;
import com.example.SpringReact.repository.AppointmentRepository;
import com.example.SpringReact.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final CustomerRepository customerRepository;

    @Transactional
    public Appointment create(Appointment appointment){

        Customer customer;

//        System.out.println("id " + appointment.getId());
//        System.out.println("location " + appointment.getLocation() );
//        System.out.println("time " + appointment.getTime() );
//        System.out.println("first name " + appointment.getFirstName() );
//        System.out.println("last name " + appointment.getLastName() );
//        System.out.println("Appointment reason " + appointment.getApptReason() );
//        System.out.println("email " + appointment.getEmail() );
//        System.out.println("phone number " + appointment.getPhoneNumber() );

        return appointmentRepository.save(appointment);
    }

}
