import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Conta } from 'src/app/shared/models/conta';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-modal-deposito',
  templateUrl: './modal-deposito.component.html',
  styleUrls: ['./modal-deposito.component.css']
})
export class ModalDepositoComponent implements OnInit {

  conta:any
  valor: number = 0;
  max: number = 0;
  constructor(public activeModal: NgbActiveModal, private clienteService: ClienteService) { }
  @ViewChild('formDeposito') formDeposito! : NgForm;
  ngOnInit(): void {
    this.max = this.conta.saldo + this.conta.limite;
  }
  depositar(){
    if(this.formDeposito.form.valid){
      this.clienteService.depositar(this.valor).subscribe( (resp : Conta) => {
      alert('Deposito realizado com sucesso');
      location.reload();
      }
    )
   }
  }
}
