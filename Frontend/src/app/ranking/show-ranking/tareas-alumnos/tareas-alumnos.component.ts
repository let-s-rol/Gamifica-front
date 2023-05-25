/**
 * Componente que muestra las tareas asignadas a los alumnos.
 *
 * @class TareasAlumnosComponent
 * @implements {OnInit}
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/inferfaces/User';
import { task } from 'src/app/inferfaces/task';
import { InputsService } from 'src/app/services/imput/inputs.service';
import { UsersService } from 'src/app/services/users/users.service';
import { UserPanelComponent } from 'src/app/user-panel/user-panel.component';

@Component({
  selector: 'app-tareas-alumnos',
  templateUrl: './tareas-alumnos.component.html',
  styleUrls: ['./tareas-alumnos.component.css'],
})
export class TareasAlumnosComponent implements OnInit {
  /**
   * Arreglo de tareas
   *
   * @type {task[]}
   */
  task!: task[];

  id!: number;
  usersListX: any;
  isTeacher!: boolean;

  /**
   * Constructor de la clase.
   *
   * @param {UserPanelComponent} user Panel de usuario.
   * @param {InputsService} input Servicio de entrada.
   * @param {Router} router Enrutador de Angular.
   */
  constructor(
    user: UserPanelComponent,
    private input: InputsService,
    public router: Router,
    private route: ActivatedRoute,
    private userService: UsersService,

  ) {}

  /**
   * Método que elimina una tarea.
   *
   * @param {task} task Tarea a eliminar.
   */
  deleteTask(task: task) {
    this.input.deleteTask(task.id).subscribe();
  }

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      if (Number.isNaN(id)) {
        console.error('Invalid id:', params['id']);
        return;
      }
      console.log('ID from route params:', id);
      this.input.getTask(id).subscribe((response: task[]) => {
        this.task = response;
        console.log(response);
      });
    });

    this.usersListX = []; // Initialize the usersListX array


    this.userService.getUser().subscribe({
      next: (user: User) => {
        this.usersListX.push(user);
        console.log(this.usersListX);
    
        if (this.usersListX[0].rol === "teacher") {
          this.isTeacher = true;
          console.log(this.isTeacher);
          
        } else {
          this.isTeacher = false;
        }
      },
      error: (error) => {
        window.alert(error);
        this.isTeacher = false; // Set isTeacher to false in case of error
      }
    });
  }
  
}
