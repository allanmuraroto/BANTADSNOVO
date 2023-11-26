import { Component } from '@angular/core';

@Component({
  selector: 'app-melhores-clientes',
  templateUrl: './melhores-clientes.component.html',
  styleUrls: ['./melhores-clientes.component.css']
})
export class MelhoresClientesComponent {

  cpf: string;
  clientes = [
    {nome: 'Amanda Silva', cpf: '92332586024', cidade: 'Fortaleza', estado: 'Ceará', saldo: '3.400,00'},
    {nome: 'Jaqueline Ribeiro', cpf: '78467327065', cidade: 'São Paulo', estado: 'São Paulo', saldo: '15.500,00'},
    {nome: 'Joaquim Nascimento', cpf: '53591458031', cidade: 'Curitiba', estado: 'Paraná', saldo: '8.000,00'},
    {nome: 'Sandro Nogueira', cpf: '72365341020', cidade: 'Rio de Janeiro', estado: 'Rio de Janeiro', saldo: '7.500,00'},
    {nome: 'Saulo Silva', cpf: '90432353410', cidade: 'Rio de Janeiro', estado: 'Rio de Janeiro', saldo: '9.500,00'}
  ]
}
