import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { task } from 'src/app/inferfaces/task';
import { InputsService } from 'src/app/services/inputs.service';
import { UserPanelComponent } from 'src/app/user-panel/user-panel.component';

@Component({
  selector: 'app-tareas-alumnos',
  templateUrl: './tareas-alumnos.component.html',
  styleUrls: ['./tareas-alumnos.component.css'],
})
export class TareasAlumnosComponent implements OnInit {
  task!: task[];

  constructor(user: UserPanelComponent, private input: InputsService, public router: Router) {
 
  }

  deleteTask(task:task) {
    this.input.deleteTask(task.id).subscribe();

  }

  ngOnInit(): void {
    this.input.getTask().subscribe((response: task[]) => {
      this.task = response;
      console.log(response);
    });

  }
}
