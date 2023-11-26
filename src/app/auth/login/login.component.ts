import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthTokenService } from 'src/app/shared/auth-token.service';
import { Login } from 'src/app/shared/models/login';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private authTokenService: AuthTokenService
  ) {
    if (this.loginService.usuarioLogado) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.message = params['error'];
    });
  }
  logar(): void {
    this.loading = true;

    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe(
        (response: any) => {
          this.authTokenService.setToken(response.token);
          this.loginService.info().subscribe((info: any) => {
            switch (response.payload.nivel) {
              case 0:
                info.nivel = 'cliente';
                this.loginService.usuarioLogado = info;
                break;
              case 1:
                info.nivel = 'gerente';
                this.loginService.usuarioLogado = info;
                break;
              case 2:
                info.nivel = 'administrador';
                this.loginService.usuarioLogado = info;
                break;
            }

            if (this.loginService.usuarioLogado.nivel == 'cliente') {
              this.router.navigate(['cliente/index']);
            }
            if (this.loginService.usuarioLogado.nivel == 'gerente') {
              this.router.navigate(['gerente/index']);
            }
            if (this.loginService.usuarioLogado.nivel == 'administrador') {
              this.router.navigate(['admin/index']);
            } else {
              this.loading = false;
              this.message = 'Usuario/senha inválidos.';
            }
          });
        },
        (error: any) => {
          alert('Usuario/senha inválidos.');
          this.loading = false;
          this.message = 'Usuario/senha inválidos.';
        }
      );
    }
  }
}
