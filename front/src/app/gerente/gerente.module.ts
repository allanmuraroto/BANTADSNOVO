import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GerenteRoutingModule } from './gerente-routing.module';
import { ListaComponent } from './lista';
import { GerenteService } from './services';
import { GerenteClientesComponent } from './gerente-clientes';
import { GerenteClienteperfilComponent } from './gerente-clienteperfil/gerente-clienteperfil.component';
import { ConsultarClienteComponent } from './consultar-cliente';
import { GerenteHeaderComponent } from './gerente-header/gerente-header.component';
import { SharedModule } from '../shared/shared.module';
import { MelhoresClientesComponent } from './melhores-clientes/melhores-clientes.component';


@NgModule({
  declarations: [
    ListaComponent,
    GerenteClientesComponent,
    GerenteClienteperfilComponent,
    ConsultarClienteComponent,
    GerenteHeaderComponent,
    MelhoresClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GerenteRoutingModule,
    SharedModule
  ],
  exports: [
    ListaComponent
  ],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
  providers: [
    GerenteService
  ]
})
export class GerenteModule { }
