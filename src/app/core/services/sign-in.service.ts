import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TokenService } from '../auth/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private apiUrl = `http://localhost:8000`;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  signIn(data: { email: string, password: string }) {
    return this.http.post<{
      access_token: string,
      token_type: string,
      expires_in: number
    }>(`${this.apiUrl}/api/login`, data)
      .pipe(
        tap(res => this.tokenService.saveToken(res.access_token))
      );
  }
}
