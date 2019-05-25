import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  url: String = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  getEndereco(cep: String): Observable<any> {
    return this.http.get(`${this.url}${cep}/json`)
  }
}
