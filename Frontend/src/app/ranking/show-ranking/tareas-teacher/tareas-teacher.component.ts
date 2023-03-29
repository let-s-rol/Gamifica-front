import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tareas-teacher',
  templateUrl: './tareas-teacher.component.html',
  styleUrls: ['./tareas-teacher.component.css'],
})
export class TareasTeacherComponent implements OnInit {
  user!: FormGroup;
  constructor() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      task: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  send() {
  // TODO Hacer enlace y que guarde el enunciado

  }

  ngOnInit(): void {}
}
