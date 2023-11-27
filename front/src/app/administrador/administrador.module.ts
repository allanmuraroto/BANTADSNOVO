import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { ListarGerenteComponent } from './listar-gerente/listar-gerente.component';
import { InserirEditarGerenteComponent } from './inserir-editar-gerente/inserir-editar-gerente.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdministradorService } from './services';
import { AdministradorHeaderComponent } from './administrador-header/administrador-header.component';
import { AdministradorInicialComponent } from './administrador-inicial/administrador-inicial.component';
import { RelatorioClientesComponent } from './relatorio-clientes/relatorio-clientes.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    ListarGerenteComponent,
    InserirEditarGerenteComponent,
    AdministradorHeaderComponent,
    AdministradorInicialComponent,
    RelatorioClientesComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    AdministradorService
  ]
})
export class AdministradorModule { }
