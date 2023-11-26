import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente, Conta, Endereco } from 'src/app/shared';
import { AutocadastroService } from '../services/autocadastro.service';
import { AdministradorService } from 'src/app/administrador';
import { Gerente } from 'src/app/shared';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-auto-cadastro',
  templateUrl: './auto-cadastro.component.html',
  styleUrls: ['./auto-cadastro.component.css']
})
export class AutoCadastroComponent implements OnInit {
  @ViewChild('formCadastro') formCadastro: NgForm;
  cliente: Cliente = new Cliente();
  endereco: Endereco = new Endereco();


  constructor(
    private router: Router,
    private autoCadastroService: AutocadastroService,
    private administradorService: AdministradorService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
  }
  
  form: FormGroup = new FormGroup({
    Nome: new FormControl('', [Validators.required]),
    DataNascimento: new FormControl('', [Validators.required]),
    CPF: new FormControl('', [Validators.required]),
    CEP: new FormControl('', [Validators.required]),
    DDD: new FormControl('', [Validators.required]),
    Celular: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email])
  });

  telaLogin() {
    this.router.navigate(["/login"]);
  }

  autoCadastro() {
    if (!this.formCadastro.form.valid) return;
    this.autoCadastroService.cadastrar(this.cliente).subscribe(
      (cli: Cliente) => {
        let numero = Math.floor(Math.random() * 1000);
        let limite: number = cli.salario! / 2;
        this.administradorService.listarTodos().subscribe(
          (gerentes: Gerente[]) => {
            let randomGerente: Gerente = gerentes[gerentes.length - 1];
            const novaConta: Conta = new Conta(
              0,
              this.cliente,
              numero,
              0,
              limite,
              new Date(),
              randomGerente,
              []
            );
            this.clienteService.salvarConta(novaConta).subscribe(
              (conta: Conta) => {
                // Cria um usuário para ele também
                this.router.navigate(['/login'], {
                  queryParams: {
                    error: 'Solicitação de cadastro enviada! Aguarde a resposta em seu e-mail!'
                  }
                });
              }
            );
          }
        );
      }
    );
  }
}  
  
  
  
  
  
  