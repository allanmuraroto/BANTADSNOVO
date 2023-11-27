import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  constructor(private gerenteService: GerenteService){}

  ngOnInit(): void {
    
  }

  aprovar($event) : void {
    this.gerenteService.aprovar($event);
  }

  recusar($event) : void {
    this.gerenteService.recusar($event);
  }

  cpf: string;
  clientes = [
    {nome: 'Amanda Silva', cpf: '92332586024', salario: '3.500,00'},
    {nome: 'Jaqueline Ribeiro', cpf: '78467327065', salario: '4.200,00'},
    {nome: 'Joaquim Nascimento', cpf: '53591458031', salario: '3.100,00'},
    {nome: 'Sandro Nogueira', cpf: '72365341020', salario: '2.500,00'}
  ]
  
}
