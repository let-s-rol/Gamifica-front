import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-send-task',
  templateUrl: './send-task.component.html',
  styleUrls: ['./send-task.component.css'],
})
export class SendTaskComponent implements OnInit {
  task!: FormGroup;
  token: any = 'token';
  name: string = 'hola que haces';
  taskDescription: string = 'información del enunciado';

  constructor(
    public router: Router,
    private UsersService: UsersService,
    private http: HttpClient
  ) {}

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
      // this.sendToBackend(base64, 1); //TODO pasar id verdadero
      this.uploadPdf(base64, 1); //TODO pasar id verdadero
    };
  }

  uploadPdf(pdf: string, id_task: number) {
    const token = localStorage.getItem('access_token');
    const headers = { Authorization: `Bearer ${token}` };

    const url = 'http://127.0.0.1:8000/api/pdf/upload'; // Reemplaza esto con la URL correcta de tu backend
    const data = {
      pdf,
      id_task,
    };
    console.log(data, headers);
  
    return this.http.post(url, data, { headers }).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );

    


      
  }

  sendToBackend(base64: string, idUser: number) {
    const url = 'http://127.0.0.1:8000/api/pdf/upload';

    console.log(base64 + ' ' + idUser);

    const data = { pdf: base64, id_task: idUser };
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
