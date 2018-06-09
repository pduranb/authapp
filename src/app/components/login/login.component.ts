import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent  {
  animacion = false;
  constructor(private auth: AuthService) { }

  login() {
    this.auth.login();
  }
}
