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
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      sentence: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }




  send() {
  // TODO Hacer enlace y que guarde el enunciado

  

  this.input.createTask(this.user.value).subscribe();

  }

  ngOnInit(): void {}
}
