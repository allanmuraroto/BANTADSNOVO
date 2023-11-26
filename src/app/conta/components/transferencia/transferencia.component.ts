import { Component } from '@angular/core';



@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent {


  accountNumber: string;
  transferAmount: number;

  /* 
     confirmarTransferencia() {
       if (confirm("Tem certeza que deseja realizar o ")) {
         // Código para realizar a transferência
         alert("Depósito realizado com sucesso em " + new Date());
       }
     }
 */

  transfer() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    const message = `Transferência realizada em ${formattedDate} às ${formattedTime} no valor de R$${this.transferAmount.toFixed(2)}.`;
    alert(message);
  }
}