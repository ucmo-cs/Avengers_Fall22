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

        System.out.println("location " + appointment.getLocation() );
        System.out.println("time " + appointment.getTime() );

        //customer = customerRepository.findById(cus_id).orElseThrow(()->new IllegalArgumentException("Check customer Id"));

        System.out.println("setCustomer ");
//        appointment.setCustomer(customer);
        System.out.println("Method call ");

        return appointmentRepository.save(appointment);
    }

}
