import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  Base_Url = "  http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.Base_Url, this.httpOptions);
  }
  buscarPorId(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.Base_Url + id, this.httpOptions);
  }
  login(email:any, senha:any): Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.Base_Url + "/api/v1/logar", JSON.stringify(email,senha), this.httpOptions);
  }
  inserir(usuario:Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.Base_Url, JSON.stringify(usuario), this.httpOptions);
  }
  remover(id: number): Observable<Usuario>{
    return this.httpClient.delete<Usuario>(this.Base_Url + id, this.httpOptions);
  }
  alterar(usuario:Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.Base_Url + usuario.id, JSON.stringify(usuario), this.httpOptions);
  }
}
