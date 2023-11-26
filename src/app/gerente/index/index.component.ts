import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { ModalAprovarComponent } from '../modal-aprovar/modal-aprovar.component';
import { ModalRecusarComponent } from '../modal-recusar/modal-recusar.component';
import { GerenteService } from '../services/gerente.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class GerenteComponent implements OnInit {
  public clientes: Array<Usuario> = [];


  constructor(private modalService: NgbModal, private gerenteService :GerenteService) {}

  ngOnInit(): void {
    this.gerenteService.getClientesAjax().subscribe(
      (data) => {
        let res:any[] = (data as any).items;
        res.forEach((u : any) => {
          this.clientes.push(u.cliente);
        });
      }
    )
  }
  abrirModal(op: number, id : any) {
    var modalRef;
    switch (op) {
      case 1:
        modalRef = this.modalService.open(ModalAprovarComponent);
        modalRef.componentInstance.id = id;
        break;
      case 2:
        modalRef = this.modalService.open(ModalRecusarComponent);
        modalRef.componentInstance.id = id;
        break;
      default:
        return;
    }
  }
}
