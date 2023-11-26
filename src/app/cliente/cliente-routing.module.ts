import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { AutocadastroComponent } from "./autocadastro/autocadastro.component";
import { IndexComponent } from "./index/index.component";
import { ModalDepositoComponent } from "./modal-deposito/modal-deposito.component";
import { ModalExtratosComponent } from "./modal-extratos/modal-extratos.component";
import { ModalSaqueComponent } from "./modal-saque/modal-saque.component";
import { ModalTransferenciaComponent } from "./modal-transferencia/modal-transferencia.component";

export const routes: Routes = [
  {
    path:'cliente/autocadastro',
    component: AutocadastroComponent
  },
  {
    path:'cliente/index',
    component: IndexComponent,
    canActivate: [AuthGuard],
    data: {
      role:'cliente'
    }
  },
  {
    path:'cliente/dados/:id',
    component: AutocadastroComponent,
    canActivate: [AuthGuard],
    data: {
      role:'cliente'
    }
  }
]


@NgModule({
  declarations: [
    AutocadastroComponent,
    IndexComponent,
    ModalDepositoComponent,
    ModalSaqueComponent,
    ModalTransferenciaComponent, 
    ModalExtratosComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    FormsModule,
    
  ]
  ,
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
