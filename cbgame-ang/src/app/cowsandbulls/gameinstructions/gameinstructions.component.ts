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
  showInstructions: boolean = true; 
   
    startGame(){
      this.router.navigate(['/games/gameguess']);
    }
    
  }