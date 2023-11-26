import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gerente } from '../gerentes/models/gerente.model';
import { AuthTokenService } from 'src/app/shared/auth-token.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public baseUrl = `${environment.baseUrl}/gerentes`

  constructor(
    private httpClient: HttpClient,
    private authTokenService:AuthTokenService,
  ) {}


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : this.authTokenService.getToken()
    })
  };

  criarGerente(gerente: Gerente): Observable<Gerente>{
    return this.httpClient.post<Gerente>(`${this.baseUrl}`, JSON.stringify(gerente), this.httpOptions)
  }

  listarGerentes(): Observable<{items: Gerente[]}> {
    return this.httpClient.get<{items: Gerente[]}>(`${this.baseUrl}`, this.httpOptions)
  }

  buscarGerentePorId(cpf: string): Observable<Gerente>{
    return this.httpClient.get<Gerente>(`${this.baseUrl}/${cpf}`, this.httpOptions)
  }

  editarGerente(gerente: Gerente): Observable<Gerente>{
    return this.httpClient.put<Gerente>(`${this.baseUrl}/${gerente.cpf}`, JSON.stringify(gerente), this.httpOptions)
  }

  removerGerente(cpf: string): Observable<Gerente> {
    return this.httpClient.delete<Gerente>(`${this.baseUrl}/${cpf}`, this.httpOptions)
  }

  listarClientesGerente(): Observable<any> {
    return this.httpClient.get<any>(`${environment.baseUrl}/dashboard/gerentes`, this.httpOptions)
  }
}
