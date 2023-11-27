import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista';
import { GerenteClientesComponent } from './gerente-clientes';
import { GerenteClienteperfilComponent } from './gerente-clienteperfil/gerente-clienteperfil.component';
import { ConsultarClienteComponent } from './consultar-cliente';
import { GerenteHeaderComponent } from './gerente-header/gerente-header.component';
import { MelhoresClientesComponent } from './melhores-clientes';

const routes: Routes = [
  {
    path: '',
    component: ListaComponent
  },
  {
    path: 'gerente/lista',
    component: ListaComponent
  }, 
  {
    path: 'gerente/clientes',
    component: GerenteClientesComponent
  },
   {
    path: 'gerente/consultar-cliente',
    component: ConsultarClienteComponent
  },
  {
    path: 'gerente/clientes/:cliente',
    component: GerenteClienteperfilComponent
  },
  {
    path: 'gerente/header',
    component: GerenteHeaderComponent
  },
  {
    path: 'gerente/melhores-clientes',
    component: MelhoresClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenteRoutingModule { }
