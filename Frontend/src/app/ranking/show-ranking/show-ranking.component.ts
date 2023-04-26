/**
 * Este componente muestra el ranking de los usuarios.
 * El ranking se recibe desde el servidor a través del servicio ShowUsersService.
 * Además, se recibe el nombre del ranking a través del servicio InputsService.
 */

import { Component, Inject, OnInit } from '@angular/core';
import { RankingUser } from 'src/app/inferfaces/Ranking';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/inferfaces/RankingList';
import { ShowUsersService } from '../../services/users/show-users.service';
import { InputsService } from 'src/app/services/inputs.service';
import { StudentRankingManagamentService } from 'src/app/services/student-ranking-managament.service';


@Component({
  selector: 'app-show-ranking',
  templateUrl: './show-ranking.component.html',
  styleUrls: ['./show-ranking.component.css'],
})
export class ShowRankingComponent implements OnInit {
  ranking!: Ranking[];
  data: any[] = [];
  rankingName!: string;
  code!: number; //TODO joel haz service que coje el codigo

  constructor(private input: InputsService, public router: Router, private StudentRankingManagament : StudentRankingManagamentService
    ) {}


  ngOnInit(): void {
    // Obtiene el ranking de estudiantes del servidor a través del servicio InputService/StudentRankingManagament
    this.input.getRankingStudents().subscribe((response: Ranking[]) => {
      this.ranking = response;
      console.log(response);
    });



    // Obtiene el nombre del ranking del servicio InputService
    this.rankingName = this.input.getRankingName();

  /*  // Obtiene el nombre del ranking del servicio StudentRankingName
    this.rankingName = this.StudentRankingManagament.getRankingName();   */
  }

  // TODO hacer llamada al services que retorne la ruta de la imagen
  skill(skill:string):string {
    return "../../../assets/medals/Cooperacion1.png"
  }

}
