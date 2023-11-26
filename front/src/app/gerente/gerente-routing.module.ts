import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { GerenteComponent } from './index/index.component';
import { MelhoresClientesComponent } from './melhores-clientes/melhores-clientes.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ModalRecusarComponent } from './modal-recusar/modal-recusar.component';

export const routes: Routes = [
  {
    path: 'gerente',
    canActivate: [AuthGuard],
    data: {
      role: 'gerente',
    },
    children: [
      {
        path: 'index',
        component: GerenteComponent,
        canActivate: [AuthGuard],
        data: {
          role:'gerente'
        }
      },
      {
        path: 'consultar',
        component: ConsultarComponent,
        canActivate: [AuthGuard],
        data: {
          role:'gerente'
        }
      },
      {
        path: 'consultar-cliente',
        component: ConsultarClienteComponent,
        canActivate: [AuthGuard],
        data: {
          role:'gerente'
        }
      },
      {
        path: 'melhores-clientes',
        component: MelhoresClientesComponent,
        canActivate: [AuthGuard],
        data: {
          role:'gerente'
        }
      },
    ],
  },
];

@NgModule({
  declarations: [
    GerenteComponent,
    ConsultarComponent,
    ConsultarClienteComponent,
    MelhoresClientesComponent,
    ModalRecusarComponent

  ],
  imports: [RouterModule.forRoot(routes), CommonModule, DataTablesModule, FormsModule],
  exports: [RouterModule],
})
export class GerenteRoutingModule {}
