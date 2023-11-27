import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth, Usuario } from 'src/app/shared';

const LS_CHAVE: string = 'usuarioLogado';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  BASE_URL = "";

  constructor(
    private httpClient: HttpClient
  ) { }

  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return usu ? JSON.parse(localStorage[LS_CHAVE]) : null;
  }
  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Auth): Observable<Usuario[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().append('email', login.login!).append('senha', login.senha!)
    };

    return this.httpClient.get<Usuario[]>(this.BASE_URL, httpOptions);

  }

}
