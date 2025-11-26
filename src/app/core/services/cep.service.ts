import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  private getUrl(cep: string) {
    return `https://viacep.com.br/ws/${cep}/json/`;
  }

  getCepInfos(cep: string): Observable<any> {
    const apiUrl: string = this.getUrl(cep);

    return this.http.get(apiUrl);
  }
}
