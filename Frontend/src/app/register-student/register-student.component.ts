import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  constructor() {}



  Student!: FormGroup;

  ngOnInit() {
    this.Student = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      nick: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      passwordRepeat: new FormControl('',[Validators.required, Validators.minLength(3)]), //TODO hacer que se comprueben que las contraseñas son iguales
      date:new FormControl('',Validators.required) //TODO: mirar de hacer que comprueba una fecha razonable
    });
    
  }

  

  send(): any {
    console.log(this.Student.value);
  }


  
 
}


