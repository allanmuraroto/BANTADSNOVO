import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroDeBusca'
})
export class FiltroDeBuscaPipe implements PipeTransform {

  transform(lista: any[], textoDeFiltro: string): any {
    return lista ? lista.filter(cliente => cliente.nome.search(new RegExp(textoDeFiltro, 'i')) > -1 || cliente.cpf.search(new RegExp(textoDeFiltro, 'i')) > -1) : [];
  }


}
