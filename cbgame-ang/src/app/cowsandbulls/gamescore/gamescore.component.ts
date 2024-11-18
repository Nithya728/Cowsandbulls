import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gamescore',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './gamescore.component.html',
  styleUrl: './gamescore.component.css'
})
export class GamescoreComponent {

  constructor(private http: HttpClient ,private router: Router) {}

  gameStats: any;
  userEmail: string | null = localStorage.getItem('loginUseremail'); 
  showInstructions: boolean = true; 
  fromPage: string | undefined;

ngOnInit(): void {
  const userId = localStorage.getItem('loginUserId'); 

  if (userId) {
    this.http.get<any>(`http://localhost:8080/api/game/stats?userId=${userId}`).subscribe(
      (data) => {
        if (data) {
          this.gameStats = data;
          console.log('Filtered Game stats:', this.gameStats); 
        } else {
          console.log('No game score available for the guest.');
        }
      },
      (error) => {
        console.error('Error fetching game stats:', error);
      }
    );
  } else {
    console.error('User ID not found in local storage');
  }
}

goBack(): void {
  this.router.navigate(['/games/gameguess']); 
}

}
