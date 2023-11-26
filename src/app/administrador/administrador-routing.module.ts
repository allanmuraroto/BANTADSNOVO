import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarGerenteComponent } from './listar-gerente';
import { InserirEditarGerenteComponent } from './inserir-editar-gerente';
import { AdministradorInicialComponent } from './administrador-inicial';
import { RelatorioClientesComponent } from './relatorio-clientes';

const routes: Routes = [
  {
    path: '',
    component: ListarGerenteComponent,
  },
  {
    path: 'administrador/lista',
    component: ListarGerenteComponent
  },
  {
    path: 'administrador/novo',
    component: InserirEditarGerenteComponent
  },
  {
    path: 'administrador/editar/:id',
    component: InserirEditarGerenteComponent
  },
  {
    path: 'administrador/inicial',
    component: AdministradorInicialComponent
  },
  {
    path: 'administrador/relatorio-clientes',
    component: RelatorioClientesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
