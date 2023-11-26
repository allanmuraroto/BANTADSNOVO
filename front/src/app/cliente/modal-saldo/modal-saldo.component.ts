import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-saldo',
  templateUrl: './modal-saldo.component.html',
  styleUrls: ['./modal-saldo.component.css']
})
export class ModalSaldoComponent implements OnInit {
  conta:any
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
