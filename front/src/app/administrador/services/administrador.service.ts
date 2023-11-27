import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gerente } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  BASE_URL = "http://localhost:5001/gerente";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Gerente[]> {
    return this.httpClient.get<Gerente[]>(this.BASE_URL, this.httpOptions);
  }

  buscarPorId(id: number): Observable<Gerente> {
    return this.httpClient.get<Gerente>(this.BASE_URL + "/" + id, this.httpOptions);
  }

  inserir(gerente: Gerente): Observable<Gerente> {
    return this.httpClient.post<Gerente>(this.BASE_URL, JSON.stringify(gerente), this.httpOptions);
  }

  remover(id: number): Observable<Gerente> {
    return this.httpClient.delete<Gerente>(this.BASE_URL + "/" + id, this.httpOptions);
  }

  alterar(gerente: Gerente): Observable<Gerente> {
    return this.httpClient.put<Gerente>(this.BASE_URL, JSON.stringify(gerente), this.httpOptions);
  }


}
