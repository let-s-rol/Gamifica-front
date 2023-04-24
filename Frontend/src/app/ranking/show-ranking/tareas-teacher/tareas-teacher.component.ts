import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ranking } from 'src/app/inferfaces/RankingList';
import { Router } from '@angular/router';
import { InputsService } from 'src/app/services/inputs.service';

@Component({
  selector: 'app-tareas-teacher',
  templateUrl: './tareas-teacher.component.html',
  styleUrls: ['./tareas-teacher.component.css'],
})
export class TareasTeacherComponent implements OnInit {
  user!: FormGroup;

  constructor(private input: InputsService, public router: Router) {
    // Creamos un FormGroup con dos FormControl, uno para el nombre y otro para la descripción de la tarea
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      sentence: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  send() {
    // TODO: Hacer enlace y que guarde el enunciado de la tarea

    // Llamamos al método "createTask" del servicio "InputsService" y le pasamos el valor del FormGroup "user"
    // A través del método "subscribe" nos suscribimos al observable que retorna "createTask"
    // No hacemos nada con la respuesta porque no es necesaria
    this.input.createTask(this.user.value).subscribe();
  }

  ngOnInit(): void {}
}
