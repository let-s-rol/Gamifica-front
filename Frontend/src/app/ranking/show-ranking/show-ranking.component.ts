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

import { Component, ChangeDetectorRef, Inject, OnInit } from '@angular/core';
import { RankingUser } from 'src/app/inferfaces/Ranking';
import { ActivatedRoute, Router } from '@angular/router';
import { Ranking } from 'src/app/inferfaces/RankingList';
import { ShowUsersService } from '../../services/users/show-users.service';
import { InputsService } from 'src/app/services/imput/inputs.service';
import { StudentRankingManagamentService } from 'src/app/services/studend-ranking/student-ranking-managament.service';
import { HttpHeaders } from '@angular/common/http';
import { SkillsService } from 'src/app/skills.service';
import { HttpClient } from '@angular/common/http';
import { integratePoints } from 'src/app/inferfaces/integratePoints';

@Component({
  selector: 'app-show-ranking',
  templateUrl: './show-ranking.component.html',
  styleUrls: ['./show-ranking.component.css'],
})
export class ShowRankingComponent implements OnInit {
  maxPuntos: number = 1000; // Puntos máximos permitidos
  valorInput: number = 0; // Valor inicial del input
  puntosDisponibles: number = 1000; // Puntos disponibles para asignar

  /**
   * Listado de rankings de estudiantes.
   */
  ranking!: Ranking[];

  skillArray! : any[];

  points: number = 1000;

  elIdRanking! :number;

  inputValues: any = {};
  jsonValor: string = '';

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
    private skillsService: SkillsService,
    private input: InputsService,
    public router: Router,
    private StudentRankingManagament: StudentRankingManagamentService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Obtiene el ranking de estudiantes del servidor a través del servicio InputService/StudentRankingManagament
    this.route.params.subscribe((params) => {
      let id = Number.parseInt(params['id']);
      if (Number.isNaN(id)) {
        console.error('Invalid id:', params['id']);
        return;
      }
      console.log('ID from route params:', id);
      this.input.getRankingStudents(id).subscribe((response: Ranking[]) => {
        this.ranking = response;
      });

      //ESTE ES EL GET DE LAS MEDALLAS
      this.route.params.subscribe((params) => {
        let id = Number.parseInt(params['id']);
        if (Number.isNaN(id)) {
          console.error('Invalid id:', params['id']);
          return;
        }
        console.log('ID from route params:', id);
        this.input.getSkills(id).subscribe((response: any[]) => {
          this.skillArray = response;
        });
        console.log(this.skillArray);
      });

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
  skill(skill: string) {


return '../../../assets/medals/Cooperacion1.png'   


}

getSkills() {

}
  


  getIdRank(eq:any){
   this.elIdRanking= eq.id_ranking;
   console.log( "El Id: " + this.elIdRanking);
   
   
  }

  /**
   * Obtiene la suma de los valores de los inputs numéricos presentes en el documento.
   *
   * @returns La suma de los valores numéricos de los inputs.
   */
  obtenerSumaInputs(): number {
    const numInput: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      "input[type='number']"
    );
    let sumaInputs: number = 0;
    const arrayInputs: Array<HTMLInputElement> = Array.from(numInput); // Convierte la lista de nodos en un array
    for (const input of arrayInputs) {
      sumaInputs += parseInt(input.value);
    }
    console.log(`La suma de los inputs es: ${sumaInputs}`);

    return sumaInputs;
  }

  /**
   * Actualiza el valor de un campo de un usuario en el ranking.
   *
   * @param {number} ranking_id - El ID del ranking.
   * @param {number} user_id - El ID del usuario.
   * @param {string} key - La clave del campo a actualizar.
   * @param {number} value - El nuevo valor del campo.
   * @returns {void}
   */
  onInputChange(
    id_user: number,
    id_ranking: number,
  
    key: string,
    value: string
  ) {
    // Create the input value object if it doesn't exist
    if (!this.inputValues[id_ranking]) {
      this.inputValues[id_ranking] = {};
    }
    if (!this.inputValues[id_ranking][id_user]) {
      this.inputValues[id_ranking][id_user] = {};
    }

    // Create the integratePointsObject and add it to the input value object
    const integratePointsObject: integratePoints = {
      id_user: id_user,
      id_ranking: id_ranking,
      Responsabilidad: parseInt(
        this.inputValues[id_ranking][id_user]['Responsabilidad']
      ),
      Emocional: parseInt(this.inputValues[id_ranking][id_user]['Emocional']),
      Cooperacion: parseInt(
        this.inputValues[id_ranking][id_user]['Cooperacion']
      ),
      Iniciativa: parseInt(this.inputValues[id_ranking][id_user]['Iniciativa']),
      Pensamiento: parseInt(
        this.inputValues[id_ranking][id_user]['Pensamiento']
      ),
    };

    this.inputValues[id_ranking][id_user] = Object.assign(
      {},
      this.inputValues[id_ranking][id_user],
      { [key]: value }
    );

    // Send the JSON to the backend

    this.jsonValor = JSON.stringify(integratePointsObject);
    console.log(this.jsonValor);

    //this.actualizarMaximos();
  }

  sendJsonToBackend(json: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });

    console.log(this.jsonValor);
    this.http
      .put(`http://127.0.0.1:8000/api/insertSkillsPoints`, this.jsonValor, { headers })
      .subscribe({
        next: (resp: any) => {
          console.log(resp);
        },
        error: (error) => window.alert('' + error.toString()),
      });
  }

  actualizarMaximos(): void {
    const puntosResponsabilidad = document.getElementById(
      'puntosResponsabilidad'
    ) as HTMLInputElement;
    const puntosCooperacion = document.getElementById(
      'puntosCooperacion'
    ) as HTMLInputElement;
    const puntosIniciativa = document.getElementById(
      'puntosIniciativa'
    ) as HTMLInputElement;
    const puntosEmocional = document.getElementById(
      'puntosEmocional'
    ) as HTMLInputElement;
    const puntosPensamiento = document.getElementById(
      'puntosPensamiento'
    ) as HTMLInputElement;

    const total: number =
      parseInt(puntosResponsabilidad.value) +
      parseInt(puntosCooperacion.value) +
      parseInt(puntosIniciativa.value) +
      parseInt(puntosEmocional.value) +
      parseInt(puntosPensamiento.value);
    const max: number = this.points - total;

    puntosResponsabilidad.max = (
      max + parseInt(puntosResponsabilidad.value)
    ).toString();
    puntosCooperacion.max = (
      max + parseInt(puntosCooperacion.value)
    ).toString();
    puntosIniciativa.max = (max + parseInt(puntosIniciativa.value)).toString();
    puntosEmocional.max = (max + parseInt(puntosEmocional.value)).toString();
    puntosPensamiento.max = (
      max + parseInt(puntosPensamiento.value)
    ).toString();

    if (
      parseInt(puntosResponsabilidad.value) >
      parseInt(puntosResponsabilidad.max)
    ) {
      puntosResponsabilidad.value = puntosResponsabilidad.max;
    }
    if (parseInt(puntosCooperacion.value) > parseInt(puntosCooperacion.max)) {
      puntosCooperacion.value = puntosCooperacion.max;
    }
    if (parseInt(puntosIniciativa.value) > parseInt(puntosIniciativa.max)) {
      puntosIniciativa.value = puntosEmocional.max;
    }
    if (parseInt(puntosEmocional.value) > parseInt(puntosEmocional.max)) {
      puntosIniciativa.value = puntosIniciativa.max;
    }
    if (parseInt(puntosPensamiento.value) > parseInt(puntosPensamiento.max)) {
      puntosPensamiento.value = puntosPensamiento.max;
    }
  }
}
