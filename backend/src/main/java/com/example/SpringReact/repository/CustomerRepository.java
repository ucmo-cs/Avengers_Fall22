package com.example.SpringReact.repository;

import com.example.SpringReact.domain.Book;
import com.example.SpringReact.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {



}