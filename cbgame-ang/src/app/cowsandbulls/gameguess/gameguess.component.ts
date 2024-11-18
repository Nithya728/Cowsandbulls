import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gameguess',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './gameguess.component.html',
  styleUrl: './gameguess.component.css'
})
export class GameguessComponent{
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
      localStorage.removeItem('loginUseremail');
      localStorage.removeItem('loginUserId');
      localStorage.removeItem('isGuestUser'); 
  
    }
  
    // Score(){
    //   this.router.navigate(['/games/gamescore']);
    // }
    
    Score() {
      if (localStorage.getItem('isGuestUser') === 'true') {
        this.message = 'Score is not available for guest'; 
        alert('Score is not available for guest'); 
      } else {
        this.router.navigate(['/games/gamescore']); // Navigate if not a guest
      }
    }
    
    startGame() {
      this.showInstructions = false;
      this.newGame(); 
    }
  
    
    
  
    // onSubmit() {
    //   if (this.guess.length === 4 && !this.gameOver) {
    //     const email = localStorage.getItem('loginUseremail'); 
    //     if (email) {
    //       this.gameservice.checkGuess(this.guess, email).subscribe((res) => {
    //         this.result = res;
    //         this.guessHistory.push({ number: this.guess, result: this.result }); 
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

    onSubmit() {
      const numberPattern = /^\d{4}$/; // Regular expression for 4-digit number
      
      if (!numberPattern.test(this.guess)) {
        this.message = 'Please enter a valid 4-digit number.';
        return; // Stop further processing if validation fails
      }
    
      if (this.guess.length === 4 && !this.gameOver) {
        const email = localStorage.getItem('loginUseremail');
        if (email) {
          this.gameservice.checkGuess(this.guess, email).subscribe((res) => {
            this.result = res;
            this.guessHistory.push({ number: this.guess, result: this.result });
            if (this.result.includes('Bulls: 4')) {
              this.gameOver = true;
              this.message = 'Congratulations! You guessed the code!';
            }
          });
        } else {
          this.message = 'User email not found. Please log in again.';
        }
      }
    }
    
    
  
    
    resetGame() {
      this.guess = '';
      this.result = '';
      this.message = '';
      this.gameOver = false;
      this.guessHistory = []; 
      this.gameservice.resetGame().subscribe();
    }
  
    
    newGame() {
      this.resetGame(); 
    }
  
    
    

    giveUp() {
      const email = localStorage.getItem('loginUseremail');
      if (email) {
        this.gameservice.giveUp(email).subscribe((res) => {
          this.secretCode = res; 
          this.gameOver = true;
          this.message = ` ${this.secretCode}`;
        });
      } else {
        this.message = 'User email not found. Please log in again.';
      }
    }
    

    
  
    
    }
    
    
  
  
  
  
  
  
  
  



