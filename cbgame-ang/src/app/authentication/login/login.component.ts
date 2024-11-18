import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
user = {
  email: '',
  password: ''
};
username: string;
constructor(private http: HttpClient,private router: Router) {
  this.username = localStorage.getItem('loginUser') || '';
}



onSubmit() {
  this.http.post('http://localhost:8080/api/auth/login', this.user).subscribe(
    (response: any) => {
      console.log(response);
      alert(response.message);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('loginUserId', response.userId); // Store userId
      localStorage.setItem('loginUseremail', this.user.email);
      localStorage.setItem('loginUser', response.username); // Store username

      this.router.navigate(['games/gameinstruction']);
    },
    (error) => {
      console.error(error);
      alert('Login failed');
    }
  );
}

loginAsGuest() {
  const guestUser = { email: 'guest@example.com', password: 'guestpassword' };

  this.http.post('http://localhost:8080/api/auth/login', guestUser).subscribe(
    (response: any) => {
      console.log(response);
      alert('Logged in as guest');
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('loginUseremail', 'guest@example.com');
      localStorage.setItem('isGuestUser', 'true'); 
      
      this.router.navigate(['/games/gameinstruction']);
    },
    (error) => {
      console.error(error);
      alert('Failed to login as guest');
    }
  );
}

}

