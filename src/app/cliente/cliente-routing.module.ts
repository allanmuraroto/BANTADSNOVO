import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { ContaInfoComponent } from '../conta/components/conta-info';


const routes: Routes = [
  { 
      path: '', 
      component: HomeClienteComponent 
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
