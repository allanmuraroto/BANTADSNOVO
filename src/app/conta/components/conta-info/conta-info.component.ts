import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente, Conta } from 'src/app/shared';

@Component({
  selector: 'app-conta-info',
  templateUrl: './conta-info.component.html',
  styleUrls: ['./conta-info.component.css']
})
export class ContaInfoComponent {

  @Input()
  public conta: Conta;

  constructor() {}

  get corSaldo(): string {
    return this.conta.saldo! >= 0 ? 'black' : 'red';
  }

}
