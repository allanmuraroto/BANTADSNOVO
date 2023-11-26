import { NgModule } from '@angular/core';
import { AdminComponent } from './index/index.component';
import { AuthGuard } from '../auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CriarGerenteComponent } from './gerentes/criar-gerente/criar-gerente.component';
import { CommonModule } from '@angular/common';
import { ListarGerentesComponent } from './gerentes/listar-gerentes/listar-gerentes.component'
import { ModalRemoverGerenteComponent } from './modal-remover-gerente/modal-remover-gerente.component';

export const routes: Routes = [
  {
    path:'admin/index',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {
      role:'administrador'
    }
  },
  {
    path:'admin/gerentes',
    component: ListarGerentesComponent,
    canActivate: [AuthGuard],
    data: {
      role:'administrador'
    }
  },
  {
    path:'admin/gerente',
    component: CriarGerenteComponent,
    canActivate: [AuthGuard],
    data: {
      role:'administrador'
    }
  },
  {
    path:'admin/gerente/:id',
    component: CriarGerenteComponent,
    canActivate: [AuthGuard],
    data: {
      role:'administrador'
    }
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    CriarGerenteComponent,
    ListarGerentesComponent,
    ModalRemoverGerenteComponent
  ],
  imports: [RouterModule.forRoot(routes), CommonModule, FormsModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
