package com.example.CBgame.Modal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "RegUsers")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "user_name")
    private String username;

    private String email;
    private String password;
    private String confirmpassword;
    @Column(name = "date_of_birth")
    private String dob;

    @Column(name = "phone_no")
    private String phoneno;


}
