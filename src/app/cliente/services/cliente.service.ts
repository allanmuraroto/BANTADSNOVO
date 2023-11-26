import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthTokenService } from 'src/app/shared/auth-token.service';
import { Conta } from 'src/app/shared/models/conta';

type TMovimentar = {
  valor: number;
};

type TTransferir = {
  valor: number;
  contaDestinoId: string;
};

type TExtrato = {
  dataHora: Date;
  valor: number;
  tipo: string;
  destino_nome: string;
};

type TLimiteSaldo = {
  limite: number;
  saldo: number;
};

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(
    private httpClient: HttpClient,
    private authTokenService: AuthTokenService
  ) {}
  baseUrl = `${environment.baseUrl}/conta`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authTokenService.getToken(),
    }),
  };

  alterar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(
      this.baseUrl + usuario.id,
      JSON.stringify(usuario),
      this.httpOptions
    );
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    let Options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    let s = Math.random().toString(36).slice(-10);

    return this.httpClient.post(
      environment.baseUrl + '/autocadastro',
      {
        nome: usuario.nome,
        email: usuario.email,
        cpf: usuario.cpf?.split('.').join('').split('-').join(''),
        senha: s,
        salario: usuario.salario,
        endereco: {
          tipo: usuario.endereco?.tipo,
          logradouro: usuario.endereco?.logradouro,
          cep: usuario.endereco?.cep,
          complemento: usuario.endereco?.complemento,
          numero: usuario.endereco?.numero,
          cidade: usuario.endereco?.cidade,
          estado: usuario.endereco?.estado,
        },
      },
      Options
    );
  }

  buscarPorId(): Observable<Usuario> {
    return this.httpClient.get<Usuario>(
      environment.baseUrl + '/me',
      this.httpOptions
    );
  }

  editar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.get<Usuario>(
      this.baseUrl + '/?id=' + usuario.id,
      this.httpOptions
    );
  }

  sacar(valor: number): Observable<Conta> {
    return this.httpClient.post<Conta>(
      `${this.baseUrl}/sacar`,
      { valor } as TMovimentar,
      this.httpOptions
    );
  }

  depositar(valor: number): Observable<Conta> {
    return this.httpClient.post<Conta>(
      `${this.baseUrl}/depositar`,
      { valor } as TMovimentar,
      this.httpOptions
    );
  }

  transferir(valor: number, contaDestinoId: string): Observable<any> {
    return this.httpClient.post<any>(
      `${this.baseUrl}/transferir`,
      { valor, contaDestinoId } as TTransferir,
      this.httpOptions
    );
  }

  extrato(ini: string, fim: string): Observable<any> {
    console.log(ini, fim);
    return this.httpClient.get(`${this.baseUrl}/extrato`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authTokenService.getToken(),
      }),
      params: {
        dataInicial: ini,
        dataFinal: fim,
      },
    });
  }

  limiteSaldo(): Observable<TLimiteSaldo> {
    return this.httpClient.get<TLimiteSaldo>(
      `${this.baseUrl}/limite-e-saldo`,
      this.httpOptions
    );
  }
}
