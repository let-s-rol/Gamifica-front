// Este archivo TypeScript define el componente Angular para la barra de navegación de la aplicación.

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // Variable booleana para determinar si el usuario ha iniciado sesión o no.
  log: boolean;

  // Variable para el servicio UsersService.
  servze: any;

  // Constructor que inicializa la variable de autenticación y la variable del servicio.
  constructor(public router: Router, public service: UsersService) {
    this.log = service.isAuthenticated();
    this.servze = service;
  }

  // Función para cerrar sesión.
  logout() {
    let w = window as any;

    this.service.logout();
    w.location.reload();
  }

  ngOnInit(): void {}
}