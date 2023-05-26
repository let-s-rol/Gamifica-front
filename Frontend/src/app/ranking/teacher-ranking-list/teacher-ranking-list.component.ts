/**
 * Componente que muestra la lista de rankings creados por un profesor
 *
 * @remarks
 * Este componente se encarga de mostrar la lista de rankings creados por un profesor,
 * permitiendo al usuario visualizarlos y acceder a ellos para su edición o eliminación.
 *
 * @example
 * ```html
 * <app-teacher-ranking-list></app-teacher-ranking-list>
 * ```
 *
 * @packageDocumentation
 */

import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/inferfaces/User';
import { Ranking } from '../../inferfaces/RankingList';
import { TeachersRankingListService } from 'src/app/services/teacherRanking/teacher-rankings.service';
import { Router } from '@angular/router';
import { InputsService } from 'src/app/services/imput/inputs.service';

/**
 * Componente que muestra la lista de rankings creados por un profesor
 */
@Component({
  selector: 'app-teacher-ranking-list',
  templateUrl: './teacher-ranking-list.component.html',
  styleUrls: ['./teacher-ranking-list.component.css'],
})
export class TeacherRankingListComponent implements OnInit {
  /**
   * Lista de rankings
   */
  rankingList!: Ranking[];
  isCreate: boolean = false;
  /**
   * Lista vacía de rankings
   */
  rankingEmptyList!: Ranking[];

  /**
   * Crea una instancia del componente.
   *
   * @param input - Servicio de mensajes compartidos.
   * @param TeachersRankingListService - Servicio que maneja la lista de rankings del profesor.
   * @param router - Enrutador de la aplicación.
   */
  constructor(
    private input: InputsService,
    private TeachersRankingListService: TeachersRankingListService,
    public router: Router
  ) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   *
   * Obtiene la lista de rankings creados por el profesor y la asigna a la propiedad rankingList.
   */
  ngOnInit(): void {
    this.TeachersRankingListService.getUserRankings().subscribe(
      (response: Ranking[]) => {
        this.rankingList = response;
        console.log(response);
      }
    );
  }

  /**
   * Método que envía un objeto ranking seleccionado al servicio de mensajes compartidos.
   *
   * @param eq - Ranking seleccionado.
   */
  takeObject(eq: Ranking) {
    localStorage.setItem('id', eq.id.toString());
    localStorage.setItem('id', eq.ranking_name.toString());
    this.input.sendMessage(eq);
  }

  /**
   * Método que elimina un ranking de la lista de rankings del profesor.
   *
   * @param ranking - Ranking a eliminar.
   */
  deleteRanking(ranking: Ranking) {
    console.log(ranking.id);
    this,this.isCreate = true
    this.TeachersRankingListService.deleteUserRanking(ranking.id).subscribe();
  }
}
