package com.example.CBgame.Controller;

import com.example.CBgame.Modal.RegisterUser;
import com.example.CBgame.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegisterUser user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email already exists!");
        }


        String encodedPassword = Base64.getEncoder().encodeToString(user.getPassword().getBytes());
        user.setPassword(encodedPassword);

        String encodedConfirmPassword = Base64.getEncoder().encodeToString(user.getConfirmpassword().getBytes());
        user.setConfirmpassword(encodedConfirmPassword);


        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }



    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody RegisterUser loginUser) {

        if ("guest@example.com".equals(loginUser.getEmail()) && "guestpassword".equals(loginUser.getPassword())) {
            RegisterUser existingGuestUser = userRepository.findByEmail(loginUser.getEmail());

            if (existingGuestUser == null) {
                RegisterUser guestUser = new RegisterUser();
                guestUser.setEmail("guest@example.com");
                guestUser.setUsername("guest");

                String encodedPassword = Base64.getEncoder().encodeToString("guestpassword".getBytes());
                guestUser.setPassword(encodedPassword);
                guestUser.setConfirmpassword(encodedPassword);

                userRepository.save(guestUser);
                existingGuestUser = guestUser;
            }

            Map<String, Object> response = new HashMap<>();
            response.put("message", "Guest login successful");
            response.put("userId", existingGuestUser.getUserId());
            response.put("username", existingGuestUser.getUsername());
            return ResponseEntity.ok(response);
        }


        RegisterUser user = userRepository.findByEmail(loginUser.getEmail());
        if (user != null) {
            String decodedPassword = new String(Base64.getDecoder().decode(user.getPassword()));

            if (decodedPassword.equals(loginUser.getPassword())) {
                Map<String, Object> response = new HashMap<>();
                response.put("message", "Login successful");
                response.put("userId", user.getUserId());
                response.put("username", user.getUsername());
                return ResponseEntity.ok(response);
            }
        }
        return ResponseEntity.status(401).body(Map.of("message", "Invalid credentials"));
    }
}