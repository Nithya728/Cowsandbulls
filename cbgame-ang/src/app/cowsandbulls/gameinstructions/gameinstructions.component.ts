import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gameinstructions',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './gameinstructions.component.html',
  styleUrl: './gameinstructions.component.css'
})
export class GameinstructionsComponent {
  constructor(private gameservice: GameService,private router:Router) {}

  

  
  

  username: string |null= localStorage.getItem('loginUser');
  
  // guess: string = '';
  //   result: string = '';
  //   message: string = '';
  //   gameOver: boolean = false;
  //   secretCode: string = ''; 
  //   guessHistory: { number: string; result: string }[] = []; 
    showInstructions: boolean = true; 
   
    
  
  //   logout(){
      
  //     localStorage.removeItem('isAuthenticated');  
  //     localStorage.removeItem('loginUser');  
  //     this.router.navigate(['/auth/login']);
  
  //   }
  
  //   Score(){
  //     this.router.navigate(['/games/gamescore']);
  //   }
    
  
    startGame(){
      this.router.navigate(['/games/gameguess']);
    }
    
  
    // onSubmit() {
    //   if (this.guess.length === 4 && !this.gameOver) {
    //     const email = localStorage.getItem('loginUseremail'); // Retrieve the email from local storage
    //     if (email) {
    //       this.gameservice.checkGuess(this.guess, email).subscribe((res) => {
    //         this.result = res;
    //         this.guessHistory.push({ number: this.guess, result: this.result }); // Store guess and result
    //         if (this.result.includes('Bulls: 4')) {
    //           this.gameOver = true;
    //           this.message = 'Congratulations! You guessed the code!';
    //         }
    //       });
    //     } else {
    //       this.message = 'User email not found. Please log in again.';
    //     }
    //   } else {
    //     this.message = 'Please enter a 4-digit number.';
    //   }
    // }
    
  
    
    // resetGame() {
    //   this.guess = '';
    //   this.result = '';
    //   this.message = '';
    //   this.gameOver = false;
    //   this.guessHistory = []; // Clear guess history
    //   this.gameservice.resetGame().subscribe();
    // }
  
    
    // newGame() {
    //   this.resetGame(); 
    // }
  
    // // Give up and reveal the secret code
    // giveUp() {
    //   this.gameservice.getSecretCode().subscribe((res) => {
    //     this.secretCode = res; // Show the correct code
    //     this.gameOver = true;
    //     this.message = `The correct code was: ${this.secretCode}`;
    //   });
    // }
  
    
    }
    
    
  
  
  
  
  
  
  
  

