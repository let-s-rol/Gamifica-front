import { Component, OnInit } from '@angular/core';
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

  constructor(
    private WaitingForRankingStudentsService:WaitingForRankingStudentsService,
    private solicitud: SolicitudeManagementService ) {
  
    /*
    const pendentListJSON: string = `{
      "users": [
        {

      "ranking":"smx",
      "name":"wiktor",
      "lastName":"calderon",
      "img":"https://imgs.search.brave.com/Wt2sdEpSRr9rzDciZmT6BA3C5PkUg2sQSuAdemfr350/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy81NjctNTY3NzAy/MV9raW5nZG9tLWhl/YXJ0cy0xLWFydHdv/cmstY2xpcGFydC5w/bmc"

    },
        {
      "ranking":"daw",
      "name":"manuel",
      "lastName":"dolepki",
      "img":"https://imgs.search.brave.com/Wt2sdEpSRr9rzDciZmT6BA3C5PkUg2sQSuAdemfr350/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy81NjctNTY3NzAy/MV9raW5nZG9tLWhl/YXJ0cy0xLWFydHdv/cmstY2xpcGFydC5w/bmc"

    }
    ]
      }`;

    const pendentListDict: any = JSON.parse(pendentListJSON);
    this.pendentList = pendentListDict['users']; */
  }
  ngOnInit(): void {
    this.WaitingForRankingStudentsService.getPendentUsers().subscribe((response: PendentList[]) => { 
      this.pendentList = response;
      console.log(response);
    });


  }

  validarUsuario(usuario: PendentList) {
    this.solicitud.validateUser(usuario.id_ranking, usuario.id_user).subscribe({
      next: (value: any) => console.log(value),
      error: (error: any) => console.log(error)
      
    });
    console.log("enviado");
    
  }
}