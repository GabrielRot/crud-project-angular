import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private tokenService: TokenService) {}

  logout() {
    this.tokenService.clear();
  }

  isLoggedIn(): boolean {
    return !!this.tokenService.getToken();
  }

}
