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
 
 
  Login!: FormGroup;
  token: any = "token";
  constructor(public router: Router, private UsersService: UsersService) {

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

  login(): any {

    console.log(JSON.stringify(this.Login.value));
    this.UsersService.login(this.Login.value).subscribe((resp: any) => {
      console.log(resp);

      // Almacena el Acces Token en el Local Storage
      localStorage.setItem('access_token', resp.access_token);
      this.token = resp.access_token;
      console.log('access_token');
      

      this.router.navigate(['/user']);

    });
  }

  validateData(){
    //TODO llamar una funcion de register que compruebba que las cosas existan
  }
}


