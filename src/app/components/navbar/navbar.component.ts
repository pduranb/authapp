import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) {
    this.auth.handleAuthentication();
  }

  ngOnInit() {}
  usuariovalidado(): boolean {
    return this.auth.isAuthenticated();
  }
  logout() {
    this.auth.logout();
  }
}
