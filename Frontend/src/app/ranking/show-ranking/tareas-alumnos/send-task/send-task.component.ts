import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-send-task',
  templateUrl: './send-task.component.html',
  styleUrls: ['./send-task.component.css'],
})
export class SendTaskComponent implements OnInit {
  task!: FormGroup;
  token: any = 'token';
  name: string = "hola que haces";
  taskDescription: string = 'información del enunciado';

  constructor(public router: Router, private UsersService: UsersService, private http: HttpClient) { }

  ngOnInit(): void {
    //TODO hacer service para pedir GET del nombre de la tarea y enunciado

  }



  onFileSelected(event: any) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64 = reader.result!.toString().split(',')[1];
      console.log(base64); // Aquí se muestra el archivo en formato base64 en la consola
      this.sendToBackend(base64,1);
    };
  }

  sendToBackend(base64: string, id: number) {
    const url = environment.server_url + 'pdf/upload';
    const data = {
      pdf: base64,
      id_task: id // Agrega el ID de la tarea aquí
    };
  
    this.http.post(url, data).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  
}
