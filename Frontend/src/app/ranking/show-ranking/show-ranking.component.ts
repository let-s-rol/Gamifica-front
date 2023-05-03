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
import { ActivatedRoute, Router } from '@angular/router';
import { Ranking } from 'src/app/inferfaces/RankingList';
import { ShowUsersService } from '../../services/users/show-users.service';
import { InputsService } from 'src/app/services/imput/inputs.service';
import { StudentRankingManagamentService } from 'src/app/services/studend-ranking/student-ranking-managament.service';
import { HttpHeaders } from '@angular/common/http';
import { SkillsService } from 'src/app/skills.service';

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

  points: number = 1000;

  inputValues: Record<string, any> = {};

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

  id!: number;
  http: any;
  apiUrl: any;

  constructor(
    private skillsService: SkillsService,
    private input: InputsService,
    public router: Router,
    private StudentRankingManagament: StudentRankingManagamentService,
    private route: ActivatedRoute
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

  totalPoints() {
    this.points = this.points - this.obtenerSumaInputs();
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
    ranking_id: number,
    user_id: number,
    key: string,
    value: string
  ) {
    // Crear un objeto que mapea los ids a nombres
    const idNames: { [key: string]: string } = {
      id_ranking: 'ranking',
      id_user: 'user',
    };

    // Crear la entrada del objeto inputValues correspondiente al ranking y usuario actual
    if (!this.inputValues[ranking_id]) {
      this.inputValues[ranking_id] = {};
    }
    if (!this.inputValues[ranking_id][user_id]) {
      this.inputValues[ranking_id][user_id] = {};
    }

    // Agregar la entrada correspondiente al valor actual
    this.inputValues[ranking_id][user_id][idNames[key] || key] = value;

    // Enviar el JSON al backend
    const json = JSON.stringify(this.inputValues);
    this.sendJsonToBackend(json);
  }

  sendJsonToBackend(json: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const groupedJson = Object.entries(json).reduce(
      (acc: { [key: string]: any }, [key, value]) => {
        const [userId, attribute] = key.split('_');
        if (!acc[userId]) {
          acc[userId] = {};
        }
        acc[userId][attribute] = value;
        return acc;
      },
      {}
    );
    // Llamar a la función correspondiente para enviar el JSON al backend
    this.skillsService.sendJsonToBackend(groupedJson).subscribe((response) => {
      console.log(response);
    });
  }
}
