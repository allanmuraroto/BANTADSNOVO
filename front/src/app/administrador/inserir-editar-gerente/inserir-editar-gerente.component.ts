import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gerente } from 'src/app/shared';
import { AdministradorService } from '../services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inserir-editar-gerente',
  templateUrl: './inserir-editar-gerente.component.html',
  styleUrls: ['./inserir-editar-gerente.component.css']
})
export class InserirEditarGerenteComponent implements OnInit{
  @ViewChild('formAdministrador') formAdministrador! : NgForm;
  novoGerente: boolean = true;
  gerente: Gerente = new Gerente();
  id!: string;
  loading!: boolean;

  constructor(
    private administradorService: AdministradorService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.gerente = new Gerente();
    this.loading = false;
    this.id = this.route.snapshot.params['id'];
    this.novoGerente = !this.id;

    if (!this.novoGerente) {
      this.administradorService.buscarPorId(+this.id).subscribe(gerente => {
        this.gerente = gerente;
        this.gerente.cpf = "";
      })
    }
  }

  salvar(): void {
    this.loading = true;
    if (this.formAdministrador.form.valid) {
      if (this.novoGerente) {
        this.administradorService.inserir(this.gerente).subscribe(gerente => {
          this.loading = false;
          this.router.navigate(["/administrador"]);
        })
      }
      else {
        this.administradorService.alterar(this.gerente).subscribe(gerente => {
          this.loading = false;
          this.router.navigate(["/administrador"]);
        })
      }
    }
    this.loading = false;
  }
}
