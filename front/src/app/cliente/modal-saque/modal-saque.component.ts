import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/auth/services/login.service';
import { Conta } from 'src/app/shared/models/conta';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-modal-saque',
  templateUrl: './modal-saque.component.html',
  styleUrls: ['./modal-saque.component.css']
})
export class ModalSaqueComponent implements OnInit {
  conta:any
  valor: number = 0;
  max: number = 0;
  constructor(public activeModal: NgbActiveModal, private clienteService: ClienteService) { }
  @ViewChild('formSaque') formSaque! : NgForm;
  ngOnInit(): void {
    this.max = this.conta.saldo + this.conta.limite;
  }
 
  sacar(){
    if(this.formSaque.form.valid){
      this.clienteService.sacar(this.valor).subscribe( (resp : Conta) => {
      alert('Saque realizado com sucesso');
      location.reload();
      }
    )
   }
  }
}
