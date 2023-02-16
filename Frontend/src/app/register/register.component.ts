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

/* TODO:
    Al pasar de estudiante a profesor da un error: 
        ERROR Error: Cannot find control with name: 'school'
        at _throwError (forms.mjs:3204:11)
        at setUpControl (forms.mjs:2990:13)
        at FormGroupDirective.addControl (forms.mjs:4858:9)
        at FormControlName._setUpControl (forms.mjs:5417:43)
        at FormControlName.ngOnChanges (forms.mjs:5362:18)
        at FormControlName.rememberChangeHistoryAndInvokeOnChangesHook (core.mjs:1526:14)
        at callHook (core.mjs:2508:18)
        at callHooks (core.mjs:2467:17)
        at executeInitAndCheckHooks (core.mjs:2418:9)
        at refreshView (core.mjs:12026:21)

    Solo guarda el Date, no guarda el School aunque se cambie el flag "isTeacher"

    El Botón de enviar se activa aunque no completemos la tabla de Date o la de School.


  */
    if (this.isTeacher) {
      this.user.addControl('school', new FormControl('Validators.required'));
    } else {
      this.user.addControl('date', new FormControl('Validators.required')); //TODO: mirar de hacer que comprueba una fecha razonable
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
