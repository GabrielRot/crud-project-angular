import { SignUp } from './../../pages/login/sign-up/sign-up';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private apiUrl ='http://localhost:8000';

  constructor(private http: HttpClient){ }

  signUp(data:{name:string, email:string ,password: string }): Observable<any>{
    return this.http.post(`${this.apiUrl}/cadastrar-usuario`, data);
  }
}
