import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PendentList } from '../inferfaces/pendentList';
import { WaitingForRankingStudentsService } from '../services/waiting-for-ranking-students.service';
import { SolicitudeManagementService } from '../services/solicitude-management.service';


@Component({
  selector: 'app-pendent-user',
  templateUrl: './pendent-user.component.html',
  styleUrls: ['./pendent-user.component.css'],
})
export class PendentUserComponent implements OnInit {
  pendentList!: PendentList[];

  /**
   * The constructor initializes variables and services for a TypeScript class.
   * @param {ChangeDetectorRef} cd - ChangeDetectorRef is a service provided by Angular that allows you
   * to manually trigger change detection in a component or directive.
   * @param {WaitingForRankingStudentsService} WaitingForRankingStudentsService - This is a service
   * that likely handles data related to students who are waiting for their ranking or evaluation.
   * @param {SolicitudeManagementService} solicitud - It is an instance of the
   * SolicitudeManagementService, which is a service used for managing requests or solicitations.
   */
  constructor( private cd: ChangeDetectorRef,
    private WaitingForRankingStudentsService: WaitingForRankingStudentsService,
    private solicitud: SolicitudeManagementService) {

  }
  ngOnInit(): void {
    this.WaitingForRankingStudentsService.getPendentUsers().subscribe((response: PendentList[]) => {
      this.pendentList = response;
      console.log(response);
    });


  }

  validarUsuario(usuario: PendentList) {

    let w = window as any;

    this.solicitud.validateUser(usuario.id_ranking, usuario.id_user).subscribe({
      next: (value: any) => console.log(value),
      error: (error: any) => console.log(error)

    });

    this.cd.detectChanges(); 
    console.log("enviado");

  }
}