import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  constructor() { }

  

  aprovar($event: any): void {
    $event.preventDefault();
    Swal.fire({
      title: 'Deseja mesmo aprovar o autocadastro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Autocadastro aprovado com sucesso. Um email com a senha foi enviado para o cliente!',
          icon: 'success'
        }).then(result => {
          if (result.isConfirmed) {
            $event.target.closest('tr').remove()
          }
        })
      }
    });
  }

  recusar($event: any) : void {
    $event.preventDefault();
    Swal.fire({
      title: 'Motivo da recusa',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Autocadastro recusado com sucesso. Um e-mail com o motivo foi enviado para o cliente!')
        .then(result => {
          if (result.isConfirmed) {
            $event.target.closest('tr').remove()
          }
        })
      }
    })

    
  }




}
