import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderClienteComponent } from './header-cliente/header-cliente.component';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ClienteService } from '../auth/services/cliente.service';

@NgModule({
  declarations: [
    HeaderClienteComponent,
    HomeClienteComponent
  ],
  imports: [
    CommonModule,  
    ClienteRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
