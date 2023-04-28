/**
 * Componente para el inicio de sesión de usuarios.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterComponent } from '../../register/register.component';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  /**
   * Formulario de inicio de sesión.
   */
  Login!: FormGroup;

  /**
   * Token de autenticación.
   */
  token: any = 'token';

  /**
   * Crea una instancia del componente.
   * @param router Servicio de enrutamiento de Angular.
   * @param UsersService Servicio para la gestión de usuarios.
   */
  constructor(public router: Router, private UsersService: UsersService) {
    // Inicialización del formulario con los campos necesarios
    this.Login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  /**
   * Se ejecuta al inicializar el componente.
   */
  ngOnInit() {
    // Código que se ejecuta al inicializar el componente
  }

  /**
   * Muestra los valores del formulario en la consola.
   */
  send(): any {
    console.log(this.Login.value);
  }

  /**
   * Función que se llama al hacer submit del formulario.
   * Realiza la autenticación del usuario y lo redirige a la página de usuario si la autenticación es exitosa.
   */
  login(): any {
    console.log(JSON.stringify(this.Login.value));

    // Llamada al servicio de usuarios para hacer login
    this.UsersService.login(this.Login.value).subscribe((resp: any) => {
      console.log(resp);

      // Almacena el Access Token en el Local Storage
      localStorage.setItem('access_token', resp.access_token);
      this.token = resp.access_token;
      console.log('access_token');

      // Redirige al usuario a la página de usuario
      this.router.navigate(['/user']);
    });
  }

}
