import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GerenteService } from '../services/gerente.service';
import Inputmask from 'inputmask';

@Component({
  selector: 'app-modal-recusar',
  templateUrl: './modal-recusar.component.html',
  styleUrls: ['./modal-recusar.component.css']
})
export class ModalRecusarComponent implements OnInit {

  public motivo:any;
  @ViewChild('formBlock') formBlock! : NgForm;

  id: any;
  constructor(public activeModal: NgbActiveModal, private gerenteService :GerenteService) { }

  ngOnInit(): void {
    Inputmask().mask(document.querySelectorAll("input"));
  }


  reprovarCliente(){
    if(this.formBlock.form.valid){
    this.gerenteService.contaReprovar(this.id,this.motivo);
    this.activeModal.close()
  }
    location.reload()
  }
}
