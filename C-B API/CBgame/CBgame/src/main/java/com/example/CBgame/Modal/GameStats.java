package com.example.CBgame.Modal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "GameScore")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GameStats {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stats_id")
    private Long statsId;

    private int numberOfWins;
    private int giveUps;
    private int gamesPlayed;
    private int score;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private RegisterUser user;
}
