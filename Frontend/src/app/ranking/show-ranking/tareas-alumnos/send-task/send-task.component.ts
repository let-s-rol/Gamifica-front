/**
 * Componente para enviar tareas a través de un archivo PDF
 * @component SendTaskComponent
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-send-task',
  templateUrl: './send-task.component.html',
  styleUrls: ['./send-task.component.css'],
})
export class SendTaskComponent implements OnInit {

  /**
   * Formulario de la tarea a enviar
   * @type {FormGroup}
   */
  task!: FormGroup;

  /**
   * Token del usuario
   * @type {any}
   */
  token: any = 'token';

  /**
   * Nombre de la tarea
   * @type {string}
   */
  name: string = 'hola que haces';

  /**
   * Descripción de la tarea
   * @type {string}
   */
  taskDescription: string = 'información del enunciado';

  /**
   * Constructor del componente
   * @constructor
   * @param {Router} router - Router de Angular
   * @param {UsersService} UsersService - Servicio de usuarios
   * @param {HttpClient} http - Cliente HTTP de Angular
   */
  constructor(
    public router: Router,
    private UsersService: UsersService,
    private http: HttpClient
  ) {}

  /**
   * Método que se ejecuta al iniciar el componente
   * @method ngOnInit
   */
  ngOnInit(): void {
    //TODO hacer service para pedir GET del nombre de la tarea y enunciado

  }

  /**
   * Método que se ejecuta cuando se selecciona un archivo
   * @method onFileSelected
   * @param {any} event - Evento de selección de archivo
   */
  onFileSelected(event: any) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64 = reader.result!.toString().split(',')[1];
      console.log(base64); // Aquí se muestra el archivo en formato base64 en la consola
      this.sendToBackend(base64);
    };
  }

  /**
   * Método que envía la tarea al backend
   * @method sendToBackend
   * @param {string} base64 - Tarea en formato base64
   */
  sendToBackend(base64: string) {
    const url = 'http://127.0.0.1:8000/api/pdf/upload';

    const data = { pdf: base64 };
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