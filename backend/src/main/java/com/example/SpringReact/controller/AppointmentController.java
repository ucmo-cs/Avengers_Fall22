package com.example.SpringReact.controller;

import com.example.SpringReact.domain.Appointment;
import com.example.SpringReact.domain.Customer;
import com.example.SpringReact.service.AppointmentService;
import com.example.SpringReact.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin
public class AppointmentController {

    private final AppointmentService appointmentService;

//    @PostMapping("/customers/{customerId}/appointment")
    @PostMapping("/appointment")
    public ResponseEntity<?> createAppointment(@RequestBody Appointment appointment){

        return new ResponseEntity<>(appointmentService.create(appointment), HttpStatus.CREATED);
    }

    @GetMapping("/appointment")
    public String test(){
        return "Hello";
    }

}
