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

  constructor( private cd: ChangeDetectorRef,
    private WaitingForRankingStudentsService: WaitingForRankingStudentsService,
    private solicitud: SolicitudeManagementService
  ) {}
  ngOnInit(): void {
    this.WaitingForRankingStudentsService.getPendentUsers().subscribe(
      (response: PendentList[]) => {
        this.pendentList = response;
        console.log(response);
      }
    );
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

  denyStudent(usuario: PendentList) {

    console.log(usuario)
        this.solicitud.denyUser(usuario.id_ranking, usuario.id_user).subscribe({
          next: (value: any) => console.log(value),
          error: (error: any) => console.log(error)
    
        });
    
        this.cd.detectChanges(); 
        console.log("enviado");
    
      }
}
