import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {

  constructor() {}



  Student!: FormGroup;
  Teacher!: FormGroup;

  ngOnInit() {
    this.Student = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      nick: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      passwordRepeat: new FormControl('', Validators.required),
      school:new FormControl('',Validators.required)
    });
    
  }

  

  send(): any {
    console.log(this.Student.value);
  }


  
 
}


export interface Student {
  name: string;
  password: string;
  passwordRepeat: string;
  lastName: string;
  nick: string;
  email: string;
  school:string;
}