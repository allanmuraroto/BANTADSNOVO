import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent {


  cpf: string;
  items = [
    { cpf: '123', nome: 'Amanda', valor: 100 },
    { cpf: '456', nome: 'Jaqueline', valor: 200 },
    { cpf: '789', nome: 'Gabriel', valor: 300 }
  ]
}


