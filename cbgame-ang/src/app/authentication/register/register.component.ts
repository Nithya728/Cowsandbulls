import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';




@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

 
user = {
  username: '',
  email: '',
  password: '',
  confirmpassword: '',
  dob: '',
  phoneno: ''
};

constructor(private http: HttpClient,private router:Router) {}

// onSubmit(registrationForm: NgForm) {
  
//   if (registrationForm.invalid) {
//     alert('Please fill out the form correctly.');
//     return;
//   }

//   if (this.user.password !== this.user.confirmpassword) {
//     alert('Passwords do not match. Please check and try again.');
//     return;
//   }

//   this.http.post('http://localhost:8080/api/auth/register', this.user, { responseType: 'text' })
//     .subscribe(response => {
//       console.log(response);
//       alert('Registration successful');
//       localStorage.setItem('loginUser', this.user.username);
//       this.router.navigate(['/auth/login']);
//     }, error => {
//       console.error(error);
//       alert('Registration failed');
//     });
// }
// }

onSubmit(registrationForm: NgForm) {
  if (registrationForm.invalid) {
    alert('Please fill out the form correctly.');
    return;
  }

  if (this.user.password !== this.user.confirmpassword) {
    alert('Passwords do not match. Please check and try again.');
    return;
  }

  console.log('Email:', this.user.email); // Debugging the email

  this.http.post('http://localhost:8080/api/auth/register', this.user, { responseType: 'text' })
    .subscribe(response => {
      console.log(response);
      alert('Registration successful');
      localStorage.setItem('loginUser', this.user.username);
      this.router.navigate(['/auth/login']);
    }, error => {
      console.error(error);
      alert('Registration failed');
    });
}
}