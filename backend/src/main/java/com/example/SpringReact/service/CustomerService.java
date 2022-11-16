package com.example.SpringReact.service;

import com.example.SpringReact.domain.Book;
import com.example.SpringReact.domain.Customer;
import com.example.SpringReact.repository.BookRepository;
import com.example.SpringReact.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@RequiredArgsConstructor
@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    @Transactional
    public Customer create(Customer customer){
            return customerRepository.save(customer);
        }
}
