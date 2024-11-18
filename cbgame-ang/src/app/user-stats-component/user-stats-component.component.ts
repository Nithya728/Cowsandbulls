import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-stats-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-stats-component.component.html',
  styleUrl: './user-stats-component.component.css'
})
export class UserStatsComponentComponent  implements OnInit {
  
  gameStats: any;
  userEmail: string | null = localStorage.getItem('loginUseremail'); // Get the email from local storage
  showInstructions: boolean = true; 
  fromPage: string | undefined;

  constructor(private http: HttpClient ,private router: Router, private location: Location) {}


ngOnInit(): void {
  const userId = localStorage.getItem('loginUserId'); // Ensure this value is stored after login

  if (userId) {
    this.http.get<any>(`http://localhost:8080/api/game/stats?userId=${userId}`).subscribe(
      (data) => {
        if (data) {
          this.gameStats = data;
          console.log('Filtered Game stats:', this.gameStats); // Debugging line
        } else {
          console.log('No game stats available for the user.');
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
  this.router.navigate(['/game']); // Navigate to game page with fragment
}
}