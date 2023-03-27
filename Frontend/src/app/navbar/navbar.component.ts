import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  log: boolean;
  servze: any;

  // hace de flag en caso de haber algun usuario conectado muestra el boton "mi cuenta" en caso de no ser asi muestra los botones para registrarse y loguearse

  // TODO hacer que esta flag cambie cuando hay alguien logueado.



  constructor(public router: Router, public service: UsersService) {
    this.log = service.isAuthenticated();
    this.servze = service;
  }

  logout() {
    let w = window as any;

    this.service.logout();
    w.location.reload();
  }

  ngOnInit(): void {}
}
