import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Conta } from 'src/app/shared/models/conta';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-modal-transferencia',
  templateUrl: './modal-transferencia.component.html',
  styleUrls: ['./modal-transferencia.component.css'],
})
export class ModalTransferenciaComponent implements OnInit {
  conta: any;
  valor: number = 0;
  destino: string = '';
  max: number = 0;
  constructor(
    public activeModal: NgbActiveModal,
    private clienteService: ClienteService
  ) {}
  @ViewChild('formTransf') formTransf!: NgForm;
  ngOnInit(): void {
    this.max = this.conta.saldo + this.conta.limite;
  }

  trasnferir() {
    if (this.formTransf.form.valid) {
      this.clienteService
        .transferir(this.valor, this.destino)
        .subscribe((resp: any) => {
          try {
            // @ts-ignore
            if (resp.trace) {
              if (resp.trace.includes('encontrada')) {
                alert('Conta de destino não encontrada');
                return;
              }

              if (resp.trace.includes('saldo')) {
                alert('Saldo + Limite em sua conta são insuficientes');
                return;
              }
            }

            // if (resp.)
            alert('Tranferencia realizado com sucesso');
            location.reload();
          } catch (e) {
            console.error(e);
          }
        });
    }
  }
}
