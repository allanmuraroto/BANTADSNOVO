
import { Component } from '@angular/core';
@Component({
  selector: 'app-header-conta',
  templateUrl: './header-conta.component.html',
  styleUrls: ['./header-conta.component.css']
})
export class HeaderContaComponent {
  private saldo = 200.00;

  getSaldo() :number{
    return this.saldo;
  }
  
}
