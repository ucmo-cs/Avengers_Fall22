package com.ucmo.commerce.service;

import com.ucmo.commerce.domain.User;
import com.ucmo.commerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private UserRepository userRepository;


    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {
        User savedUser = userRepository.save(user);
        return savedUser;
    }
}
