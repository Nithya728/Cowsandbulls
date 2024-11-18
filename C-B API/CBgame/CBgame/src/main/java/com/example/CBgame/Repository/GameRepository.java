package com.example.CBgame.Repository;

import com.example.CBgame.Modal.Game;
import com.example.CBgame.Modal.RegisterUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GameRepository extends JpaRepository<Game,Long> {


//    long countByUser(RegisterUser user);
}
