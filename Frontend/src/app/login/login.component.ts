import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 
 
  Login!: FormGroup;
  constructor() {

    this.Login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }


  ngOnInit() {
   
  }

  send(): any {
    console.log(this.Login.value);
  }

  validateData(){
    //TODO llamar una funcion de register que compruebba que las cosas existan
  }
}


