/**
 * Importaciones de los módulos y servicios necesarios
 */
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PendentList } from '../inferfaces/pendentList';
import { WaitingForRankingStudentsService } from '../services/waiting-for-rankings/waiting-for-ranking-students.service';
import { SolicitudeManagementService } from '../services/solicitude-managment/solicitude-management.service';

/**
 * Componente que muestra la lista de usuarios pendientes
 * @class
 * @implements {OnInit}
 */
@Component({
  selector: 'app-pendent-user',
  templateUrl: './pendent-user.component.html',
  styleUrls: ['./pendent-user.component.css'],
})
export class PendentUserComponent implements OnInit {
  /**
   * Lista de usuarios pendientes
   * @type {PendentList[]}
   */
  pendentList!: PendentList[];

  /**
   * Constructor de la clase PendentUserComponent
   * @param {ChangeDetectorRef} cd - Servicio para detectar cambios en la vista
   * @param {WaitingForRankingStudentsService} WaitingForRankingStudentsService - Servicio para obtener la lista de usuarios pendientes
   * @param {SolicitudeManagementService} solicitud - Servicio para validar y negar el acceso a los usuarios pendientes
   */
  constructor(
    private cd: ChangeDetectorRef,
    private WaitingForRankingStudentsService: WaitingForRankingStudentsService,
    private solicitud: SolicitudeManagementService
  ) {}

  /**
   * Método que se ejecuta al iniciar el componente
   */
  ngOnInit(): void {
    // Se suscribe al servicio WaitingForRankingStudentsService y obtiene la lista de usuarios pendientes
    this.WaitingForRankingStudentsService.getPendentUsers().subscribe(
      (response: PendentList[]) => {
        this.pendentList = response;
        console.log(response);
      }
    );
  }

  /**
   * Método que se ejecuta cuando se valida a un usuario pendiente
   * @param {PendentList} usuario - Usuario pendiente a validar
   */
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

  /**
   * Método que se ejecuta cuando se niega el acceso a un usuario pendiente
   * @param {PendentList} usuario - Usuario pendiente al que se le niega el acceso
   */
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