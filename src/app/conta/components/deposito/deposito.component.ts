import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Cliente, Conta } from 'src/app/shared';
import Swal from 'sweetalert2';
import { ContaService } from '../../services';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent {

  @Input()
  public conta: Conta;
  @Output() 
  contaChange = new EventEmitter<Conta>();
  limite: number;
  saldo: number;

  constructor(private contaService: ContaService) {}

  ngOnInit() {
    this.conta = new Conta(
      1, new Cliente(1, 'LUCAS GONCALVES', '', '111.123.333-45'),
      114987635, -50, 950, new Date(), undefined, 
      undefined
    );
    this.saldo = this.conta.saldo!;
    this.limite = this.conta.limite!;
  }

  public confirmDeposit(valor: string) : void {
      let valorDeposito = (document.querySelector("#valorDeposito") as HTMLInputElement);
      if (valorDeposito.value == null || valorDeposito.value == "") return;
      Swal.fire({
        title: 'Tem certeza que deseja realizar o depósito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: 'Depósito realizado com sucesso!',
            icon: 'success'
          });
          this.contaService.depositar(this.conta, parseFloat(valor));
          valorDeposito.value = "Ex: 100...";
        }
      });
  }

  depositar(valor: string): void {
    this.saldo = this.conta.saldo!;
    this.limite = this.conta.limite!;
    if (valor) {
      this.saldo += parseFloat(valor);
      this.limite += parseFloat(valor);
    }
  }

  get corSaldo(): string {
    return this.saldo! >= 0 ? 'black' : 'red';
  }

}
