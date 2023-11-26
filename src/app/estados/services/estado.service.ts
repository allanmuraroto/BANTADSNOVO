import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from 'src/app/shared/models/estado.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private httpClient: HttpClient ) { }
  Base_Url = "  http://localhost:4000/estados";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  listarTodos(): Estado[]{
    return [
      {
        "Sigla" : "PR",
        "Cidades" : [
          "Curitiba",
          "Campo Largo",
          "Ponta Grossa"
        ]
      },
      {
        "Sigla" : "SP",
        "Cidades" : [
          "Rio Preto",
          "São Paulo"
        ]
      }
    ]
  }
}
