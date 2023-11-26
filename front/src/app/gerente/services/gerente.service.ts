import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthTokenService } from 'src/app/shared/auth-token.service';
import { Conta } from 'src/app/shared/models/conta';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { Usuario } from 'src/app/shared/models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class GerenteService {
  constructor(private httpClient: HttpClient,private authTokenService:AuthTokenService ) { }
  Base_Url = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : this.authTokenService.getToken()
    })
  };


  getClientes() : Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.Base_Url +"/api/v1/clientes", this.httpOptions)
   }

   getClientesAjax(): Observable<Usuario[]>{
     return this.httpClient.get<Usuario[]>(this.Base_Url +"/api/v1/contas/pendentes", this.httpOptions)
   }

   getClientesTop5(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.Base_Url +"/api/v1/clientes/conta/top5", this.httpOptions)
  }

   contaAprovar(id : any){
      let contaId:string = id;

      this.httpClient.post<string>(this.Base_Url +"/api/v1/contas/pendentes/"+contaId+"/aprovar",{},this.httpOptions).subscribe( (resp => {
        console.log(resp);
      }));

   }
   contaReprovar(id : any, motivo : any){
    let contaId:string = id;
    this.httpClient.post<string>(this.Base_Url +"/api/v1/contas/pendentes/"+contaId+"/reprovar",{id : id, motivo: motivo},this.httpOptions).subscribe( (resp => {
      console.log(resp);
    }));
 }
   buscarPorCpf(cpf:any) {
    if(parseInt(cpf)){
      return this.httpClient.get<Usuario>(this.Base_Url +"/api/v1/clientes/" + cpf, this.httpOptions)
    }
    return null
   }
}
