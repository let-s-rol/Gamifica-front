// Importaciones de los módulos y servicios necesarios
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PendentList } from '../inferfaces/pendentList';
import { WaitingForRankingStudentsService } from '../services/waiting-for-rankings/waiting-for-ranking-students.service';
import { SolicitudeManagementService } from '../services/solicitude-managment/solicitude-management.service';

@Component({
  selector: 'app-pendent-user',
  templateUrl: './pendent-user.component.html',
  styleUrls: ['./pendent-user.component.css'],
})
// Clase PendentUserComponent que implementa OnInit
export class PendentUserComponent implements OnInit {
  // Atributo pendentList de tipo PendentList que contendrá la lista de usuarios pendientes
  pendentList!: PendentList[];

  // Constructor que recibe el servicio ChangeDetectorRef, el servicio WaitingForRankingStudentsService y el servicio SolicitudeManagementService
  constructor(
    private cd: ChangeDetectorRef,
    private WaitingForRankingStudentsService: WaitingForRankingStudentsService,
    private solicitud: SolicitudeManagementService
  ) {}

  // Método ngOnInit que se ejecuta al iniciar el componente
  ngOnInit(): void {
    
    // Se suscribe al servicio WaitingForRankingStudentsService y obtiene la lista de usuarios pendientes
    this.WaitingForRankingStudentsService.getPendentUsers().subscribe(
      (response: PendentList[]) => {
        this.pendentList = response;
        console.log(response);
      }
    );
  }

  // Método que se ejecuta cuando se valida a un usuario pendiente
  validarUsuario(usuario: PendentList) {
    // Se utiliza el servicio SolicitudeManagementService para validar al usuario
    this.solicitud.validateUser(usuario.id_ranking, usuario.id_user).subscribe({
      next: (value: any) => console.log(value),
      error: (error: any) => console.log(error),
    });

    // Se detectan los cambios y se muestra un mensaje en la consola
    this.cd.detectChanges();
    console.log('enviado');
  }

  // Método que se ejecuta cuando se niega el acceso a un usuario pendiente
  denyStudent(usuario: PendentList) {
    console.log(usuario);

    // Se utiliza el servicio SolicitudeManagementService para negar el acceso al usuario
    this.solicitud.denyUser(usuario.id_ranking, usuario.id_user).subscribe({
      next: (value: any) => console.log(value),
      error: (error: any) => console.log(error),
    });

    // Se detectan los cambios y se muestra un mensaje en la consola
    this.cd.detectChanges();
    console.log('enviado');
  }
}
