/**
 * Componente para crear un nuevo ranking
 * @remarks
 * Este componente permite crear un nuevo ranking y enviar la información a través de un formulario.
 * @example
 * <app-new-ranking></app-new-ranking>
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewRankingServiceService } from 'src/app/services/new-ranking/new-ranking-service.service';

@Component({
  /**
   * Selector del componente
   */
  selector: 'app-new-ranking',
  /**
   * Plantilla del componente
   */
  templateUrl: './new-ranking.component.html',
  /**
   * Estilos del componente
   */
  styleUrls: ['./new-ranking.component.css'],
})
export class NewRankingComponent implements OnInit {
  /**
   * Formulario para la creación de un nuevo ranking
   */
  newRanking!: FormGroup;

  /**
   * Constructor del componente
   * @param router - Servicio para manejar las rutas
   * @param newRankingService - Servicio para agregar un nuevo ranking
   */
  constructor(
    public router: Router,
    private newRankingService: NewRankingServiceService
  ) {
    this.newRanking = new FormGroup({
      /**
       * Campo para ingresar el nombre del nuevo ranking
       */
      ranking_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  /**
   * Función para enviar la información del nuevo ranking al servicio
   */
  send() {
    console.log(this.newRanking.value);
    this.newRankingService.addNewRanking(this.newRanking.value);
  }

  ngOnInit(): void {}
}
