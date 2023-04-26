import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-task',
  templateUrl: './send-task.component.html',
  styleUrls: ['./send-task.component.css'],
})
export class SendTaskComponent implements OnInit {
  task!: FormGroup;
  token: any = 'token';
  name: string = 'name';
  taskDescription: string = 'información del enunciado';

  constructor(public router: Router, private UsersService: UsersService) {}

  ngOnInit(): void {
    //TODO hacer service para pedir GET del nombre de la tarea y enunciado
    throw new Error('Method not implemented.');
  }

  login(): any {
    console.log(JSON.stringify(this.task.value));

    // TODO hacer service para el POST de  la tarea

    /*// Llamada al servicio de usuarios para hacer login
    this.UsersService.login(this.Login.value).subscribe((resp: any) => {
      console.log(resp);

      // Almacena el Access Token en el Local Storage
      localStorage.setItem('access_token', resp.access_token);
      this.token = resp.access_token;
      console.log('access_token');

      // Redirige al usuario a la página de usuario
      this.router.navigate(['/user']);
    });*/
  }
}
