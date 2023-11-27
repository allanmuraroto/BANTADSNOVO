import { Component, OnInit } from '@angular/core';
import { Gerente } from 'src/app/shared';
import { AdministradorService } from '../services';

@Component({
  selector: 'app-listar-gerente',
  templateUrl: './listar-gerente.component.html',
  styleUrls: ['./listar-gerente.component.css']
})
export class ListarGerenteComponent implements OnInit{
  gerentes: Gerente[] = []
  constructor(private administradorService: AdministradorService){}

  ngOnInit(): void {
    this.gerentes = [];
    this.listarTodos();
  }

  listarTodos(): Gerente[] {
    this.administradorService.listarTodos().subscribe({
      next: (data: Gerente[]) => {
        if (data == null) {
          this.gerentes = [];
        }
        else {
          this.gerentes = data;
        }
      }
    });

    return this.gerentes;
  }

  remover($event: any, gerente: Gerente) : void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o gerente ${gerente.nome}?`)) {
      this.administradorService.remover(gerente.id!).subscribe({
        complete: () => {
          this.listarTodos();
        }
      })
    }
  }

}
