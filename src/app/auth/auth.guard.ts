import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private location: Location
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const usuarioLogado = this.loginService.usuarioLogado;
      let url = state.url;
      if(usuarioLogado){
        if(route.data?.['role'] && route.data?.['role'] !== usuarioLogado.nivel){
          this.location.back();
          return false;
        }
        return true;
      }
      this.router.navigate(['/login'],
      {queryParams: {error:"você deve realizar loguin" + url}});
      return false;
  }

}
