package com.example.CBgame.Repository;

import com.example.CBgame.Modal.RegisterUser;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<RegisterUser,Long>{
    RegisterUser findByEmail(String email);
}
