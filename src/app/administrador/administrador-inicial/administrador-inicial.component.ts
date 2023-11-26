import { Component } from '@angular/core';

@Component({
  selector: 'app-administrador-inicial',
  templateUrl: './administrador-inicial.component.html',
  styleUrls: ['./administrador-inicial.component.css']
})
export class AdministradorInicialComponent {
  gerentes = [
    { nome: 'João', clientes: 25, saldoPositivo: 30000, saldoNegativo: -9000 },
    { nome: 'Maria', clientes: 30, saldoPositivo: 10000, saldoNegativo: -6788 },
    { nome: 'Pedro', clientes: 40, saldoPositivo: 50000, saldoNegativo: -1268 }
  ];
}
