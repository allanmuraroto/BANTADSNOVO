import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { GerenteService } from '../services/gerente.service';
import Inputmask from 'inputmask';
@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {

  public cliente: Usuario | undefined;
  public consultado:boolean = false;
  public cpf:any;
  @ViewChild('formSearch') formSearch! : NgForm;

  constructor(private modalService: NgbModal, private gerenteService :GerenteService) {}

  ngOnInit(): void {
    Inputmask().mask(document.querySelectorAll("input"));
  }

  buscaClientePorCPF(){
    this.consultado = true

    this.gerenteService.buscarPorCpf(this.cpf)?.subscribe((res) => {
     
      this.cliente = res;
    });

  }

}
