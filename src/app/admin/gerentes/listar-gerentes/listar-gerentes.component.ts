import { Component, OnInit } from '@angular/core';
import { Gerente } from '../models/gerente.model';
import { AdminService } from '../../services/admin.service'
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRemoverGerenteComponent } from '../../modal-remover-gerente/modal-remover-gerente.component';

@Component({
  selector: 'app-listar-gerentes',
  templateUrl: './listar-gerentes.component.html',
  styleUrls: ['./listar-gerentes.component.css']
})
export class ListarGerentesComponent implements OnInit {
  public baseUrl = `${environment.baseUrl}/gerentes`
  public items: Gerente[] = []

  constructor(private modalService: NgbModal ,private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.listarGerentes().subscribe(
      data => {
        this.items = data.items
      }
    )
  }

  abrirModalRemoverGerente(gerente: Gerente | undefined) {
    let modalRef = this.modalService.open(ModalRemoverGerenteComponent)

    modalRef.componentInstance.gerente = gerente
  }
}
