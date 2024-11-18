package com.example.CBgame.Controller;

import com.example.CBgame.Modal.Game;
//import com.example.CBgame.Modal.GameStats;
import com.example.CBgame.Modal.GameStats;
import com.example.CBgame.Modal.RegisterUser;
import com.example.CBgame.Repository.GameRepository;
//import com.example.CBgame.Repository.GameStatsRepository;
import com.example.CBgame.Repository.GameStatsRepository;
import com.example.CBgame.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@CrossOrigin
@RestController
@RequestMapping("/api/game")

public class GameController1 {
    private String secretCode;

    @Autowired
    private GameRepository gameRepository;


    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GameStatsRepository gameStatsRepository;

    public GameController1() {
        generateSecretCode();
    }

    private void generateSecretCode() {
        Random random = new Random();
        secretCode = String.format("%04d", random.nextInt(10000));
    }


//    @PostMapping("/guess")
//    public String checkGuess(@RequestParam("email") String email, @RequestBody String guess) {
//        if (guess.length() != 4) {
//            return "Invalid guess. Please provide a 4-digit number.";
//        }
//
//        // Find the user by email
//        RegisterUser user = userRepository.findByEmail(email);
//        if (user == null) {
//            return "User not found.";
//        }
//
//        int bulls = 0, cows = 0;
//        for (int i = 0; i < 4; i++) {
//            if (guess.charAt(i) == secretCode.charAt(i)) {
//                bulls++;
//            } else if (secretCode.contains(String.valueOf(guess.charAt(i)))) {
//                cows++;
//            }
//        }
//
//        Game game = new Game();
//        game.setSecretCode(secretCode);
//        game.setGuess(guess);
//        game.setBulls(bulls);
//        game.setCows(cows);
//        game.setUser(user); // Set the user
//
//        gameRepository.save(game);
//
//        GameStats gameStats = gameStatsRepository.findByUser(user);
//        if (gameStats == null) {
//            gameStats = new GameStats();
//            gameStats.setUser(user);
//        }
//
//        // Update stats based on the game outcome
//        if (bulls == 4) {
//            gameStats.setNumberOfWins(gameStats.getNumberOfWins() + 1);
//            gameStats.setScore(gameStats.getScore() + 10); // Increment score by 10 for a win
//        } else {
//            gameStats.setScore(gameStats.getScore() + 0); // Increment score for participating
//        }
//        gameStats.setGamesPlayed(gameStats.getNumberOfWins() + gameStats.getGiveUps());
//
//        gameStatsRepository.save(gameStats);
//
//        return String.format("Bulls: %d, Cows: %d", bulls, cows);
//    }
//

    @PostMapping("/guess")
    public String checkGuess(@RequestParam("email") String email, @RequestBody String guess) {
        // Check if guess contains only digits
        if (!guess.matches("\\d{4}")) {
            return "Invalid input. Please enter a 4-digit number.";
        }

        if (guess.length() != 4) {
            return "Invalid guess. Please provide a 4-digit number.";
        }

        // Existing logic to find the user and calculate bulls and cows
        RegisterUser user = userRepository.findByEmail(email);
        if (user == null) {
            return "User not found.";
        }

        int bulls = 0, cows = 0;
        for (int i = 0; i < 4; i++) {
            if (guess.charAt(i) == secretCode.charAt(i)) {
                bulls++;
            } else if (secretCode.contains(String.valueOf(guess.charAt(i)))) {
                cows++;
            }
        }

        // Existing logic to save game and update stats
        Game game = new Game();
        game.setSecretCode(secretCode);
        game.setGuess(guess);
        game.setBulls(bulls);
        game.setCows(cows);
        game.setUser(user);

        gameRepository.save(game);

        GameStats gameStats = gameStatsRepository.findByUser(user);
        if (gameStats == null) {
            gameStats = new GameStats();
            gameStats.setUser(user);
        }

        if (bulls == 4) {
            gameStats.setNumberOfWins(gameStats.getNumberOfWins() + 1);
            gameStats.setScore(gameStats.getScore() + 10);
        }
        gameStats.setGamesPlayed(gameStats.getNumberOfWins() + gameStats.getGiveUps());

        gameStatsRepository.save(gameStats);

        return String.format("Bulls: %d, Cows: %d", bulls, cows);
    }


    @PostMapping("/giveup")
    public String giveUp(@RequestParam("email") String email) {
        // Find the user by email
        RegisterUser user = userRepository.findByEmail(email);
        if (user == null) {
            return "User not found.";
        }

        // Update giveUps and score in GameStats
        GameStats gameStats = gameStatsRepository.findByUser(user);
        if (gameStats == null) {
            gameStats = new GameStats();
            gameStats.setUser(user);
        }

        gameStats.setGiveUps(gameStats.getGiveUps() + 1); // Increment the giveUps count
        gameStats.setGamesPlayed(gameStats.getNumberOfWins() + gameStats.getGiveUps());
        gameStats.setScore(gameStats.getScore() );

        gameStatsRepository.save(gameStats);

        return "You have given up. The secret code was: " + secretCode;
    }


    @PostMapping("/reset")
    public String resetGame() {
        generateSecretCode();
        return "Game reset. New secret code generated.";
    }

    @GetMapping("/secret")
    public String getSecretCode() {
        return secretCode;
    }



    @GetMapping("/stats")
    public ResponseEntity<GameStats> getGameStatsByUserId(@RequestParam("userId") Long userId) {
        RegisterUser user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        GameStats gameStats = gameStatsRepository.findByUser(user);
        if (gameStats != null) {
            return ResponseEntity.ok(gameStats);
        } else {
            return ResponseEntity.noContent().build();
        }
    }


}