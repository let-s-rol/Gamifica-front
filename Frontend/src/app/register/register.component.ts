import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

/**
 * Componente para la página de registro de usuarios.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  /**
   * Indica si se está creando un nuevo usuario.
   */
  isCreate: boolean = false;

  /**
   * Formulario para el usuario que se está registrando.
   */
  user: FormGroup;

  /**
   * Indica si hay un error en la validación de las contraseñas.
   */
  errorPassword: boolean = true;

  /**
   * Indica si el usuario que se está registrando es un profesor o un estudiante.
   */
  isTeacher: boolean = false;

  /**
   * Crea una instancia del componente.
   * @param router Servicio de enrutamiento para redirigir a otras páginas.
   * @param UsersService Servicio para interactuar con los usuarios en la base de datos.
   */
  constructor(public router: Router, private UsersService: UsersService) {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      nick: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordRepeat: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    if (this.isTeacher) {
      this.user.addControl('school', new FormControl('', Validators.required));
      this.user.addControl('rol', new FormControl('teacher'));
    } else {
      this.user.addControl('date', new FormControl('', Validators.required));
      this.user.addControl('rol', new FormControl('student'));
    }
  }

  /**
   * Envía los datos del formulario para crear un nuevo usuario.
   */
  send(): any {
    if (this.passwordRepeatValidator()) {
      delete this.user.value.passwordRepeat;
      console.log(this.user.value);
      this.UsersService.addUser(this.user.value);

      try {
        this.isCreate = true;
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1000);
      } catch (error) {}
    }
  }

  /**
   * Valida que las contraseñas ingresadas coincidan.
   * @returns true si las contraseñas coinciden, false en caso contrario.
   */
  passwordRepeatValidator() {
    if (this.user.value.password === this.user.value.passwordRepeat) {
      this.errorPassword = true;
    } else {
      this.errorPassword = false;
    }
    return this.errorPassword;
  }

  /**
   * Cambia el rol del usuario que se está registrando.
   */
  changeRol(): void {
    this.isTeacher = !this.isTeacher;
    this.selectTypeUser();
  }
  /**
   * Función que cambia el tipo de usuario entre estudiante y profesor
   * @returns void
   */
  selectTypeUser(): void {
    if (this.isTeacher) {
      this.user.removeControl('date');
      this.user.addControl('school', new FormControl('', Validators.required));
    } else {
      this.user.removeControl('school');
      this.user.addControl('date', new FormControl('', Validators.required));
    }
  }

  /**
   * Implementación de la interfaz OnInit, se ejecuta al inicializar el componente
   * @returns void
   */
  ngOnInit(): void {}
}
