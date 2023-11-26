import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from 'src/app/estados/services/estado.service';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { Estado } from 'src/app/shared/models/estado.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { ClienteService } from '../services/cliente.service';
import Inputmask from 'inputmask';
@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css'],
})
export class AutocadastroComponent implements OnInit {
  @ViewChild('formCliente') formCliente!: NgForm;
  public usuarioLogado: Usuario = new Usuario();
  public endereco: Endereco = new Endereco();
  public novoUsuario: boolean = true;
  public estados: Array<Estado> = new Array<Estado>();
  public cidades: Array<string> | undefined;

  public contactMethods = [
    { value: 'Avenida', label: 'Avenida' },
    { value: 'Rua', label: 'Rua' },
  ];

  public tipo: string | undefined;
  id!: string;
  senha: string | undefined;
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private estadoService: EstadoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    Inputmask().mask(document.querySelectorAll('input'));
    this.id = this.route.snapshot.params['id'];

    const aux = this.estadoService.listarTodos();

    this.estados = aux;
    this.cidades = aux[0].Cidades;
    this.endereco.estado = aux[0].Sigla;
    this.endereco.cidade = aux[0].Cidades[0];
    this.endereco.tipo = this.contactMethods[0].label;

    if (this.id) {
      this.novoUsuario = false;
      this.clienteService.buscarPorId().subscribe((usu: any) => {
        this.usuarioLogado = usu;
        this.endereco = usu.endereco;
        this.tipo = this.endereco.tipo;
      });
      return;
    }
  }

  buscarCidades() {
    this.cidades = [];
    this.cidades = this.estados.find(
      (x) => x.Sigla == this.endereco.estado
    )?.Cidades;
    if (this.cidades) this.endereco.cidade = this.cidades[0];
    return;
  }
  fechar(click: any) {
    console.log(click);
  }
  salvar(): void {
    this.usuarioLogado.endereco = this.endereco;
    if (this.formCliente.form.valid) {
      if (this.novoUsuario == true) {
        this.clienteService
          .inserir(this.usuarioLogado)
          .subscribe((usuario: any) => {
            console.log(usuario);
            if (usuario.success) {
              confirm(
                'Após a confirmação da conta sua senha sera enviada por email'
              );
              this.router.navigate(['cliente/index']);
            }
          });
      }
    }
  }
}
