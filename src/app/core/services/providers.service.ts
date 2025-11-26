import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  private apiUrl = `http://localhost:8000/api`;

  constructor(private http: HttpClient) {}

  getAllProviders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/providers`);
  }

  getProviderById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/providers/${id}`);
  }

  save(data: {
    id?: number,
    nome: string,
    cnpj: string,
    cep: string,
    estado: string,
    bairro: string,
    rua: string,
    complemento: string
  }): Observable<any> {

    if (data.id) {
      return this.http.put(`${this.apiUrl}/providers/${data.id}`, data);
    }

    return this.http.post(`${this.apiUrl}/providers`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/providers/${id}`);
  }

}
