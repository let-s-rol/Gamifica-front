import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  user: FormGroup;
  errorPassword: boolean = true;

  isTeacher: boolean = false;

  constructor(public router: Router, private UsersService: UsersService ) {
    
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
      this.user.addControl('date', new FormControl('', Validators.required)); //TODO: mirar de hacer que comprueba una fecha razonable
      this.user.addControl('rol', new FormControl('student'));
    }
  }
  send(): any {
    //TODO: Usar esta funcion para mandar los datos al back

    //  return this.passwordRepeatValidator();
    if (this.passwordRepeatValidator()) {
      console.log(this.user.value);
      this.UsersService.addUser(this.user.value);
      this.router.navigate(['']);
    }
  }

  passwordRepeatValidator() {
    if (this.user.value.password === this.user.value.passwordRepeat) {
      this.errorPassword = true;
    } else {
      this.errorPassword = false;
    }
    return this.errorPassword;
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
