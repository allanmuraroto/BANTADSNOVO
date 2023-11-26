import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Login } from 'src/app/shared/models/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthTokenService } from 'src/app/shared/auth-token.service';
import { Observable } from 'rxjs';


const LS_CHAVE: string = "usuarioLogado"
var user: Usuario

export enum NIVEL {
  cliente,
  gerente,
  administrador
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient,private authTokenService:AuthTokenService ) { }
  baseUrl = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null)
  }

  public set usuarioLogado(usuario: Usuario){
   
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  destroy(){
    delete localStorage[LS_CHAVE];
  }
  logout(){
    delete localStorage[LS_CHAVE];
    delete localStorage["token"];
  }

  login(login: Login) : Observable<Usuario> {
   return this.httpClient.post<Usuario>(this.baseUrl +"/api/v1/logar",JSON.stringify(login), this.httpOptions)
  }

  info() : Observable<Usuario> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : this.authTokenService.getToken()
      })
    }
     return this.httpClient.get<Usuario>(this.baseUrl +"/api/v1/me", options)
   }
}
