import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: FormGroup;

  isTeacher: boolean = false;

  constructor() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      nick: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      passwordRepeat: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]), //TODO hacer que se comprueben que las contraseñas son iguales
    });

    if (this.isTeacher) {
      this.user.addControl('school', new FormControl(' Validators.required'));
    } else {
      this.user.addControl('date', new FormControl(' Validators.required')); //TODO: mirar de hacer que comprueba una fecha razonable
    }
  }
  send(): any {
    //TODO: Usar esta funcion para mandar los datos al back
    console.log(this.user.value);
  }
  changeRol(): void {
    console.log('click');

    this.isTeacher = !this.isTeacher;
  }
  ngOnInit(): void {}
}
