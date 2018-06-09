import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent ,
    canActivate: [ AuthGuardService ] },
    { path: 'login', component: LoginComponent ,
    canActivate: [ AuthGuardService ] },
    { path: 'precios', component: PreciosComponent  ,
    canActivate: [ AuthGuardService ] },
    { path: 'protegida', component: ProtegidaComponent,
    canActivate: [ AuthGuardService ] },
    { path: '**', pathMatch: 'full' , redirectTo: 'login' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

