import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-modal-aprovar',
  templateUrl: './modal-aprovar.component.html',
  styleUrls: ['./modal-aprovar.component.css']
})
export class ModalAprovarComponent implements OnInit {

  id: any;

  constructor(public activeModal: NgbActiveModal, private gerenteService :GerenteService) { }

  ngOnInit(): void {
  }

  aprovarCliente(){
    this.gerenteService.contaAprovar(this.id);
    this.activeModal.close()
    location.reload()
  }
}
