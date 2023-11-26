import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { hide } from '@popperjs/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { Conta } from 'src/app/shared/models/conta';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { ModalDepositoComponent } from '../modal-deposito/modal-deposito.component';
import { ModalExtratosComponent } from '../modal-extratos/modal-extratos.component';
import { ModalSaldoComponent } from '../modal-saldo/modal-saldo.component';
import { ModalSaqueComponent } from '../modal-saque/modal-saque.component';
import { ModalTransferenciaComponent } from '../modal-transferencia/modal-transferencia.component';
import { ClienteService } from '../services/cliente.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  public mostrar:boolean = true;
  constructor(private modalService: NgbModal, private clienteService: ClienteService,private loginService: LoginService) { }
  public conta:any;
  public color:string = "black";

  ngOnInit(): void {
      this.clienteService.buscarPorId().subscribe(resp => {
         console.log(resp);
         this.conta = resp.conta;
         if(this.conta.saldo < 0){
            this.color = "red"
         }
      })
  }
 abrirModal(op:number){
  var modalRef;
  switch(op){
    case 1 :
       modalRef = this.modalService.open(ModalDepositoComponent);
       modalRef.componentInstance.conta = this.conta;
       break;
    case 2 :
       modalRef = this.modalService.open(ModalSaqueComponent)
       modalRef.componentInstance.conta = this.conta;

       break;
    case 3 :
       modalRef = this.modalService.open(ModalTransferenciaComponent)
       modalRef.componentInstance.conta = this.conta;
       break;
    case 4 :
       modalRef = this.modalService.open(ModalExtratosComponent)
       modalRef.componentInstance.conta = this.conta;
       break;
    case 5 :
       modalRef = this.modalService.open(ModalSaldoComponent)
       modalRef.componentInstance.conta = this.conta;
       break;
    default:
      return
  }
 }
   hide() : void {   
      this.mostrar = !this.mostrar;
   }
}
