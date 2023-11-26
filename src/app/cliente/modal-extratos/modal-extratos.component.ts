import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Conta } from 'src/app/shared/models/conta';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-modal-extratos',
  templateUrl: './modal-extratos.component.html',
  styleUrls: ['./modal-extratos.component.css']
})
export class ModalExtratosComponent implements OnDestroy, OnInit {
  conta:any
  inicio: Date = new Date();
  extratos:any
  fim: Date = new Date();
  mim: string = "";
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  pesquisado:  boolean = false;

  constructor(public activeModal: NgbActiveModal, private clienteService: ClienteService) { }
  @ViewChild('formDate') formDate! : NgForm;
  ngOnInit(): void {
    this.mim = formatDate(this.conta.dataCriacao, 'dd-MM-yyyy','en-US');
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
 
  buscar(){
    let dataIni = formatDate(this.inicio, 'yyyy-MM-dd','en-US',"-0300");
    let dataFim = formatDate(this.fim, 'yyyy-MM-dd','en-US',"-0300");
    if(this.fim < this.inicio){
      alert("Data inicial maior que data final");
      return
    }
    if(this.formDate.form.valid){
      this.clienteService.extrato(dataIni,dataFim).subscribe( (resp :any) => {
       console.log(resp)
        this.pesquisado = true
        this.extratos = resp.items
      });
   }
  }
}
