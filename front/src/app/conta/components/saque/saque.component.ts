import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente, Conta } from 'src/app/shared';
import Swal from 'sweetalert2';
import { ContaService } from '../../services';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent {

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
      114987635, 300, 1300, new Date(), undefined, 
      undefined
    );
    this.saldo = this.conta.saldo!;
    this.limite = this.conta.limite!;
  }

  public confirmSaque(valor: string) : void {
    let valorSaque = (document.querySelector("#valorSaque") as HTMLInputElement);
    if (valorSaque.value == null || valorSaque.value == "") return;
    Swal.fire({
      title: 'Tem certeza que deseja realizar o saque?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Saque realizado com sucesso!',
          icon: 'success'
        });
        this.contaService.sacar(this.conta, parseFloat(valor));
        valorSaque.value = "Ex: 100...";
      }
    });
  }

  sacar(valor: string): void {
    this.saldo = this.conta.saldo!;
    this.limite = this.conta.limite!;
    if (valor) {
      this.saldo -= parseFloat(valor);
      this.limite -= parseFloat(valor);
    }
  }

  get corSaldo(): string {
    return this.saldo! >= 0 ? 'black' : 'red';
  }

}
