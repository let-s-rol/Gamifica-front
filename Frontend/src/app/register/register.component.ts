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
      this.user.addControl('school', new FormControl('', Validators.required));
    } else {
      this.user.addControl('date', new FormControl('', Validators.required)); //TODO: mirar de hacer que comprueba una fecha razonable
    }
  }
  send(): any {
    //TODO: Usar esta funcion para mandar los datos al back
    

    if (this.passwordRepeatValidatos() ){
      let form = this.user.value;
      form['role'] = 'teacher';
      console.log(form);
    }
  }

  passwordRepeatValidatos(){
    if (this.user.value.password === this.user.value.passwordRepeat ){
      return true;

    }else{
      return false;
    }
  }

  changeRol(): void {
    this.isTeacher = !this.isTeacher;

    this.selectTypeUser();
  }

  selectTypeUser() {
    if (this.isTeacher) {
      this.user.removeControl('date');
      this.user.addControl('school', new FormControl('Validators.required'));
    } else {
      this.user.removeControl('school');
      this.user.addControl('date', new FormControl('Validators.required')); //TODO: mirar de hacer que comprueba una fecha razonable
    }
  }
  ngOnInit(): void {}
}
