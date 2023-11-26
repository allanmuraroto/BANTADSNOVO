import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

const LS_CHAVE: string = "token"
@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  public getToken(): string {
    return localStorage[LS_CHAVE]
  }

  public setToken(token:string){
    localStorage[LS_CHAVE] = token;
  }

  public decodePayloadJWT(): any {
    try {
      return jwt_decode(this.getToken());
    } catch (Error) {
      return null;
    }
  }
}
