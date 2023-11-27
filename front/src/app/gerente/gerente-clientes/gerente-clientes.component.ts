import { Component } from '@angular/core';

@Component({
  selector: 'app-gerente-clientes',
  templateUrl: './gerente-clientes.component.html',
  styleUrls: ['./gerente-clientes.component.css']
})
export class GerenteClientesComponent {
  termoDeBusca = '';
  cpf: string;
  clientes = [
    {nome: 'Amanda Silva', cpf: '92332586024', cidade: 'Fortaleza', estado: 'Ceará', saldo: '3.400,00'},
    {nome: 'Jaqueline Ribeiro', cpf: '78467327065', cidade: 'São Paulo', estado: 'São Paulo', saldo: '15.500,00'},
    {nome: 'Joaquim Nascimento', cpf: '53591458031', cidade: 'Curitiba', estado: 'Paraná', saldo: '8.000,00'},
    {nome: 'Sandro Nogueira', cpf: '72365341020', cidade: 'Rio de Janeiro', estado: 'Rio de Janeiro', saldo: '7.500,00'}
  ]
  clientesPesquisados = this.clientes;

  pesquisar(value: string): void {
    this.clientes = this.clientesPesquisados.filter(val => val.nome.toLowerCase().includes(value.toLowerCase()) || val.cpf.includes(value));
  }
}
