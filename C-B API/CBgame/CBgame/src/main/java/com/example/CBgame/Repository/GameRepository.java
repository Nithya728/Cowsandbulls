package com.example.CBgame.Repository;

import com.example.CBgame.Modal.Game;
import org.springframework.data.jpa.repository.JpaRepository;


public interface GameRepository extends JpaRepository<Game,Long> {

}
