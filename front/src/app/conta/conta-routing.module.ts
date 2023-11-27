import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositoComponent } from './components/deposito';
import { SaqueComponent } from './components/saque';
import { TransferenciaComponent } from './components/transferencia';
import { ExtratoComponent } from './components/extrato';
import { ContaInfoComponent } from './components/conta-info';

const routes: Routes = [
    {
        path: 'conta/deposito',
        component: DepositoComponent
    },
    {
        path: 'conta/saque',
        component: SaqueComponent
    },
    {
        path: 'conta/transferencia',
        component: TransferenciaComponent
    },
    {
        path: 'conta/extrato',
        component: ExtratoComponent
    },
    {
        path: 'conta/perfil',
        component: ContaInfoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }