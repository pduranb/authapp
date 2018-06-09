import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService , private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next);

    if (this.auth.isAuthenticated()) {
      if ( next.component['name'] === 'LoginComponent') {
        console.log('no puedo devolverme a login');
        return false;
      } else {
        console.log('paso el guard');
        return true;
      }
    } else {
      if ( next.component['name'] === 'LoginComponent') {
        console.log('devolverme a login');
        return true;
      } else {
        console.error('bloqueado por el guard');
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
}
