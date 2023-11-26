import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './gerente/lista/lista.component';
import { HomeComponent } from './home/home.component';
import { ContaModule, DepositoComponent } from './conta';
import { SaqueComponent } from './conta';
import { TransferenciaComponent } from './conta';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { GerenteModule } from './gerente';
import { ClienteModule } from './cliente/cliente.module';
import { AutoCadastroComponent } from './auth/auto-cadastro/auto-cadastro.component';
import { LoginComponent } from './auth/login/login.component';
import { AdministradorModule } from './administrador/administrador.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'conta',
    loadChildren: () => ContaModule
  },
  {
    path: 'cliente',
    loadChildren: () => ClienteModule
  },
  {
    path: 'gerente',
    loadChildren: () => GerenteModule
    // component: ListaComponent
  },
  {
    path: 'administrador',
    loadChildren: () => AdministradorModule
  },
  {
    path: 'autoCadastro',
    component: AutoCadastroComponent
  },
  {
    path: 'user-edit',
    component: UserEditComponent
  },
  {
    path: 'admin-console',
    component: AdminConsoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
