import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { GameService } from '../cowsandbulls/game.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent  {






  constructor(private gameservice: GameService,private router:Router) {}

  

  
  

username: string |null= localStorage.getItem('loginUser');

guess: string = '';
  result: string = '';
  message: string = '';
  gameOver: boolean = false;
  secretCode: string = ''; 
  guessHistory: { number: string; result: string }[] = []; 
  showInstructions: boolean = true; 
 
  

  logout(){
    
    localStorage.removeItem('isAuthenticated');  
    localStorage.removeItem('loginUser');  
    this.router.navigate(['/auth/login']);

  }

  Score(){
    this.router.navigate(['/userstat']);
  }
  // Start the game and hide instructions
  startGame() {
    this.showInstructions = false;
    this.newGame(); // Start a new game after the instructions
  }

  
  

  onSubmit() {
    if (this.guess.length === 4 && !this.gameOver) {
      const email = localStorage.getItem('loginUseremail'); // Retrieve the email from local storage
      if (email) {
        this.gameservice.checkGuess(this.guess, email).subscribe((res) => {
          this.result = res;
          this.guessHistory.push({ number: this.guess, result: this.result }); // Store guess and result
          if (this.result.includes('Bulls: 4')) {
            this.gameOver = true;
            this.message = 'Congratulations! You guessed the code!';
          }
        });
      } else {
        this.message = 'User email not found. Please log in again.';
      }
    } else {
      this.message = 'Please enter a 4-digit number.';
    }
  }
  

  
  resetGame() {
    this.guess = '';
    this.result = '';
    this.message = '';
    this.gameOver = false;
    this.guessHistory = []; // Clear guess history
    this.gameservice.resetGame().subscribe();
  }

  // Start a new game
  newGame() {
    this.resetGame(); // Reset the game before starting a new one
  }

  // Give up and reveal the secret code
  giveUp() {
    this.gameservice.getSecretCode().subscribe((res) => {
      this.secretCode = res; // Show the correct code
      this.gameOver = true;
      this.message = `The correct code was: ${this.secretCode}`;
    });
  }

  
  }
  
  







