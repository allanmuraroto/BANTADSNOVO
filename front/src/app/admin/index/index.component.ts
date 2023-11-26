import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Gerente } from '../gerentes/models/gerente.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class AdminComponent implements OnInit {
  public gerentes: any[] = []

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.listarGerentes().subscribe(
      data => {
        data.items.forEach((gerente: Gerente) => {
          let aux = {
            nome: gerente.nome,
            cpf: gerente.cpf,
            saldosPositivos: 0,
            saldosNegativos: 0,
            clientes: [],
          }

          this.gerentes.push(aux)
        })
      }
    )

    this.adminService.listarClientesGerente().subscribe(
      data => {
        data.forEach((cliente: any) => {
          let gerente = this.gerentes.find(g => g.cpf === cliente.gerente.cpf)

          if (gerente) {
            if (cliente.saldo > 0) gerente.saldosPositivos += cliente.saldo
            else gerente.saldosNegativos += cliente.saldo

            gerente.clientes.push(cliente)
          } else {
            console.log('Gerente apagado')
          }
        })
      }
    )
  }
}
