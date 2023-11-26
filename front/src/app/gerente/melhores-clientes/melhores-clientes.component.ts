import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { GerenteService } from '../services/gerente.service';
@Component({
  selector: 'app-melhores-clientes',
  templateUrl: './melhores-clientes.component.html',
  styleUrls: ['./melhores-clientes.component.css']
})
export class MelhoresClientesComponent implements OnDestroy, OnInit {
  // Must be declared as "any", not as "DataTables.Settings"
  constructor(private gerenteService :GerenteService) {}

  dtOptions: DataTables.Settings = {};
  public clientes: Array<Usuario> = [];
  dtTrigger: Subject<any> = new Subject<any>();


  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [5,'DESC']
    };
    this.gerenteService.getClientesTop5().subscribe(
      (data) => {
        console.log(data)
        let res:any[] = (data as any).items;
        res.forEach((u : any) => {
          this.clientes.push(u.cliente);
        });
        this.dtTrigger.next(false);
      }
    )
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
