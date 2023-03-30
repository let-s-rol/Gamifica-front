import { Component, OnInit } from '@angular/core';
import { Ranking } from 'src/app/inferfaces/Ranking';
import { task } from 'src/app/inferfaces/task';
import { UserPanelComponent } from 'src/app/user-panel/user-panel.component';


@Component({
  selector: 'app-tareas-alumnos',
  templateUrl: './tareas-alumnos.component.html',
  styleUrls: ['./tareas-alumnos.component.css'],
})
export class TareasAlumnosComponent implements OnInit {
  task!: task[];
  // rol!:string;
  constructor(user:UserPanelComponent) {
    const taskListJSON: string = `{
      "task": [
        {

      "name":"practica 1",
      "description":"rosa",
      "idRanking":"sintesis",
      "id":"14",
      "idUser":"https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;h=220"
    },
        {

      "name":"practica 2",
      "description":"rosa",
      "idRanking":"sintesis",
      "id":"14",
      "idUser":"https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;h=220"
    }


    ]
      }`;

    const taskListDict: any = JSON.parse(taskListJSON);
    this.task = taskListDict['task'];
    // this.rol = user.rol;
  }

  ngOnInit(): void {}
}
