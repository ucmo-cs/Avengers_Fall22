package com.example.SpringReact.repository;


import com.example.SpringReact.domain.Appointment;
import com.example.SpringReact.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
