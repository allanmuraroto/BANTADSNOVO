import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-modal-remover-gerente',
  templateUrl: './modal-remover-gerente.component.html',
  styleUrls: ['./modal-remover-gerente.component.css']
})
export class ModalRemoverGerenteComponent implements OnInit {
  @Input() public gerente: any

  constructor(private adminService: AdminService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {}

  removerGerente(): void {
    this.gerente.cpf && this.adminService.removerGerente(this.gerente.cpf).subscribe()

    this.activeModal.close()
    window.location.reload()
  }

}
