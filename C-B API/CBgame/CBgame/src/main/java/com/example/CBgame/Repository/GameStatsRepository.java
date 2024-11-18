package com.example.CBgame.Repository;

import com.example.CBgame.Modal.GameStats;
import com.example.CBgame.Modal.RegisterUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameStatsRepository extends JpaRepository<GameStats, Long> {
    GameStats findByUser(RegisterUser user);
}
