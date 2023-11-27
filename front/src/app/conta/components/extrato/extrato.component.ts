import { Component } from '@angular/core';
import { Cliente, Conta } from 'src/app/shared';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent {

  conta: Conta = new Conta(1, new Cliente(0, "LUCAS GONÇALVES"), 1245, 10000.00);

  dias = [
    {
      extrato: [
        {data: '20/04/2023 10:45', operacao: 'DEPOSITO', origem: '-', destino: '-', valor: '500,00', color: 'blue'},
        {data: '20/04/2023 11:30', operacao: 'SAQUE', origem: '-', destino: '-', valor: '200,00', color: 'red'},
      ],
      saldo: 10300
    },
    {
      extrato: [
        {data: '22/04/2023 23:00', operacao: 'TRANSFERÊNCIA', origem: 'JOÃOZINHO', destino: this.conta.cliente?.nome, valor: '3100,00', color: 'blue'},
        {data: '22/04/2023 23:52', operacao: 'TRANSFERÊNCIA', origem: this.conta.cliente?.nome, destino: 'JOÃOZINHO', valor: '2500,00', color: 'red'},
        {data: '22/04/2023 23:59', operacao: 'DEPOSITO', origem: '-', destino: '-', valor: '100,00', color: 'blue'},
      ],
      saldo: 11000
    },
    {
      extrato: [
        {data: '02/05/2023 12:30', operacao: 'SAQUE', origem: '-', destino: '-', valor: '750,00', color: 'red'}
      ],
      saldo: 10250
    }
  ];

}
