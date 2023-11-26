import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositoComponent } from './components/deposito';
import { ContaService } from './services';
import { ContaInfoComponent } from './components/conta-info/conta-info.component';
import { SaqueComponent } from './components/saque';
import { TransferenciaComponent } from './components/transferencia';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { ContaRoutingModule } from './conta-routing.module';
import { ClienteModule } from '../cliente/cliente.module';
import { HeaderClienteComponent } from '../cliente/header-cliente/header-cliente.component';
import { HeaderContaComponent } from './header-conta/header-conta.component';



@NgModule({
  declarations: [
    HeaderContaComponent,
    DepositoComponent,
    ContaInfoComponent,
    SaqueComponent,
    TransferenciaComponent,
    ExtratoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ContaRoutingModule,
  ],
  exports: [
    DepositoComponent,
    ContaInfoComponent,
    SaqueComponent,
    TransferenciaComponent,
    ExtratoComponent
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
