import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';
import { Auth, Usuario } from 'src/app/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('formLogin') formLogin!: NgForm;
  login: Auth = new Auth();
  loading: boolean = false;
  message!: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.message = params['error'];
    });
  }

    entrar(): void {
      this.loading = true;
      if (this.formLogin.form.valid) {
        this.loginService.login(this.login).subscribe(
          (usuarios: Usuario[]) => {
            if ((usuarios != null) && (usuarios.length > 0)) {
              let usu = usuarios[0];
              this.loginService.usuarioLogado = usu;
              this.loading = false;
              this.router.navigate([`${usu?.perfil?.toLowerCase()}`]);
            } else {
              this.message = 'Usuário/Senha inválidos.';
            }
          });
    }
  }
}

