import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaAltaPipe } from './pipes/caixa-alta.pipe';
import { FiltroDeBuscaPipe } from './pipes/filtro-de-busca.pipe';



@NgModule({
  declarations: [
    CaixaAltaPipe,
    FiltroDeBuscaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CaixaAltaPipe,
    FiltroDeBuscaPipe
  ]
})
export class SharedModule { }
