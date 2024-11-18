import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  
private baseUrl = 'http://localhost:8080/users/register1';

  constructor(private http: HttpClient) {}

  // Encrypt using Base64
  private encrypt(data: string): string {
    return btoa(data); // Base64 encode
  }

  // Decrypt using Base64 (if needed later)
  private decrypt(data: string): string {
    return atob(data); // Base64 decode
  }

  // login(userData: any): Observable<any> {
  //   console.log('Calling backend API');
  //   userData.password = this.encrypt(userData.password); // Encrypt password
  //   return this.http.post<any>(`${this.baseUrl}/login`, userData);
  // }

  login(userData: any): Observable<any> {
    console.log('Calling backend API');
    userData.password = this.encrypt(userData.password); 
    return this.http.post<any>(`${this.baseUrl}/login`, userData).pipe(
      tap(response => {
        
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('loginUser', response.email);  
        localStorage.setItem('username', response.username);  
      })
    );
  }

  registerUser(userData: any): Observable<any> {
    console.log("Making registerUser http call", userData);
    userData.password = this.encrypt(userData.password); // Encrypt password
    return this.http.post(this.baseUrl, userData);
  }
}
