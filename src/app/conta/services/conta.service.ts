import { Injectable } from '@angular/core';
import { Conta } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor() { }


  depositar(conta: Conta, valor: number) {
    conta.saldo! += valor;
    conta.limite! += valor;
  }

  sacar(conta: Conta, valor: number) {
    conta.saldo! -= valor;
    conta.limite! -= valor;
  }

}
