import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/inferfaces/task';
import { UserPanelComponent } from 'src/app/user-panel/user-panel.component';


@Component({
  selector: 'app-tareas-alumnos',
  templateUrl: './tareas-alumnos.component.html',
  styleUrls: ['./tareas-alumnos.component.css'],
})
export class TareasAlumnosComponent implements OnInit {
  task!: task[];

  constructor() {
    const taskListJSON: string = `{
      "task": [
        {

      "name":"practica 1",
      "description":"rosa",
      "idRanking":"001",
      "id":"14"

    },
        {

      "name":"practica 2",
      "description":"rosa",
      "idRanking":"001",
      "id":"14"
    }


    ]
      }`;

    const taskListDict: any = JSON.parse(taskListJSON);
    this.task = taskListDict['task'];

  }

  deleteTask(){
    
  
  }

  ngOnInit(): void {}
}
