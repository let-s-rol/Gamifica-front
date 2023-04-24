// Importaciones de módulos y servicios necesarios
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
  // Declaración de variables
  Login!: FormGroup;
  token: any = 'token';

  constructor(public router: Router, private UsersService: UsersService) {
    // Inicialización del formulario con los campos necesarios
    this.Login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    // Código que se ejecuta al inicializar el componente
  }

  send(): any {
    console.log(this.Login.value);
  }

  // Función que se llama al hacer submit del formulario
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
