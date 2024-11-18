package com.example.CBgame.Modal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "game_id")
    private Long gameid;

    private String secretCode;
    private String guess;
    private int bulls;
    private int cows;


    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private RegisterUser user;

}