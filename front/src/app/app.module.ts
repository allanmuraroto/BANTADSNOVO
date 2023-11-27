import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContaModule } from './conta/conta.module';
import { GerenteModule } from './gerente/gerente.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AutoCadastroComponent } from './auth/auto-cadastro/auto-cadastro.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdministradorModule } from './administrador/administrador.module';
import { ClienteModule } from './cliente/cliente.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutoCadastroComponent,
    HomeComponent,
    HeaderComponent,
    UserEditComponent,
    AdminConsoleComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ContaModule,
    MatFormFieldModule,
    MatDialogModule,
    GerenteModule,
    HttpClientModule,
    AdministradorModule,
    ClienteModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { minWidth: "40vw" }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }