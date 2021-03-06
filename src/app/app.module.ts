import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { APP_ROUTING } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
