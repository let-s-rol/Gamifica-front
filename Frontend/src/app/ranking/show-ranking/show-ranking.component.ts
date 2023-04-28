/**
 * Este componente muestra el ranking de los usuarios.
 * El ranking se recibe desde el servidor a través del servicio ShowUsersService.
 * Además, se recibe el nombre del ranking a través del servicio InputsService.
 *
 * @typedef {Object} Ranking
 * @property {string} id - El id del ranking.
 * @property {string} name - El nombre del ranking.
 * @property {Array<RankingUser>} users - Los usuarios que pertenecen al ranking.
 *
 * @typedef {Object} RankingUser
 * @property {string} id - El id del usuario.
 * @property {string} name - El nombre del usuario.
 * @property {number} score - El puntaje del usuario en el ranking.
 * 
 * @typedef {Object} RankingList
 * @property {Array<Ranking>} rankings - Una lista de rankings.
 *
 * @typedef {Object} ShowUsersService
 * @property {function(): Observable<RankingList>} getRankings - Retorna una lista de rankings.
 *
 * @typedef {Object} InputsService
 * @property {function(): Observable<RankingList>} getRankingStudents - Retorna una lista de rankings de estudiantes.
 * @property {function(): string} getRankingName - Retorna el nombre del ranking.
 * @property {function(): Observable<any>} regenerateCode - Regenera el código del usuario actual.
 *
 * @typedef {Object} StudentRankingManagamentService
 * @property {function(): string} getRankingName - Retorna el nombre del ranking.
 *
 * @class
 * @classdesc Este componente se encarga de mostrar el ranking de los usuarios y el nombre del ranking. También maneja la regeneración de código de usuario.
 * @implements {OnInit}
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

  /**
   * Listado de rankings de estudiantes.
   */
  ranking!: Ranking[];

  /**
   * Datos a mostrar en la tabla.
   */
  data: any[] = [];

  /**
   * Nombre del ranking actual.
   */
  rankingName!: string;

  /**
   * Código de identificación del ranking.
   * TODO: crear un servicio que obtenga el código.
   */
  code!: number;

  constructor(
    private input: InputsService,
    public router: Router,
    private StudentRankingManagament: StudentRankingManagamentService
  ) {}

  ngOnInit(): void {

    // Obtiene el ranking de estudiantes del servidor a través del servicio InputService/StudentRankingManagament
    this.input.getRankingStudents().subscribe((response: Ranking[]) => {
      this.ranking = response;
      console.log(response);
    });

    // Obtiene el nombre del ranking del servicio InputService
    this.rankingName = this.input.getRankingName();

    /*
    // Obtiene el nombre del ranking del servicio StudentRankingName
    this.rankingName = this.StudentRankingManagament.getRankingName();
    */

  }

  /**
   * Obtiene la ruta de la imagen de una habilidad.
   * TODO: hacer llamada al servicio que retorna la ruta de la imagen.
   * @param skill - Habilidad a buscar.
   * @returns La ruta de la imagen correspondiente a la habilidad.
   */
  skill(skill: string): string {
    return '../../../assets/medals/Cooperacion1.png';
  }

  /*
  regenerateCode() {
    this.input.regenerateCode().subscribe();
  }
  */

}