import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  uploadPdf(pdf: File, id_task: number): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const formData = new FormData();
    formData.append('pdf', pdf, pdf.name);
    formData.append('id_task', id_task.toString());

    const url = 'http://127.0.0.1:8000/api/pdf/upload'; // Reemplaza esto con la URL correcta de tu backend

    return this.http.post(url, formData, { headers }).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.uploadPdf(file, 1).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
  }
}
