import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = 'http://localhost:8080/api/game';

  constructor(private http: HttpClient) {}

  checkGuess(guess: string, email: string): Observable<string> {
    return this.http.post(`${this.apiUrl}/guess?email=${email}`, guess, { responseType: 'text' });
  }
  
  resetGame(): Observable<string> {
    return this.http.post(`${this.apiUrl}/reset`, {}, { responseType: 'text' });
  }

  getSecretCode(): Observable<string> {
    return this.http.get(`${this.apiUrl}/secret`, { responseType: 'text' });
  }

  giveUp(email: string): Observable<string> {
    return this.http.post(`${this.apiUrl}/giveup?email=${email}`, {}, { responseType: 'text' });
  }
  

 
  
  
 

}
