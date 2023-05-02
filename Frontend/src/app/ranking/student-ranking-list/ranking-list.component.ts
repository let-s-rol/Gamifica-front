/**
 * Componente que muestra una lista de rankings y permite la búsqueda de un ranking por código.
 */
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ranking } from 'src/app/inferfaces/RankingList';
import { User } from 'src/app/inferfaces/User';
import { WantToEnterRankingService } from 'src/app/services/want-to-enter/want-to-enter-ranking.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Router } from '@angular/router';
import { StudentRankingManagamentService } from 'src/app/services/studend-ranking/student-ranking-managament.service';
import { InputsService } from 'src/app/services/imput/inputs.service';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})
export class RankingListComponent implements OnInit {
  /**
   * Lista de rankings disponibles.
   */
  rankingList!: Ranking[];

  /**
   * Identificador del ranking seleccionado.
   */
  saveID: number = 0;

  /**
   * Datos de usuario.
   */
  @Input() userInput!: User[];

  /**
   * Formulario para enviar código.
   */
  sendCode: FormGroup;

  /**
   * Crea una instancia del componente.
   * @param sharedService Servicio compartido.
   * @param router Enrutador.
   * @param wantToEnterRankingService Servicio de entrada a un ranking.
   * @param studentRankingManagament Servicio de gestión de ranking de estudiantes.
   * @param input Servicio de entrada.
   */
  constructor(
    @Inject(SharedService) private sharedService: SharedService,
    public router: Router,
    private wantToEnterRankingService: WantToEnterRankingService,
    private studentRankingManagament: StudentRankingManagamentService,
    private input: InputsService
  ) {
    // Definición del formulario con sus respectivas validaciones
    this.sendCode = new FormGroup({
      code: new FormControl('', [])
    });
  }

  /**
   * Guarda el objeto de ranking seleccionado en el servicio de entrada.
   * @param eq Objeto de ranking seleccionado.
   */
  takeObjectStudent(eq: Ranking) {
    this.input.sendMessage(eq);
  }

  /**
   * Actualiza el identificador del ranking seleccionado en el servicio compartido.
   */
  updateSharedText() {
    this.sharedService.sharedRankingID = this.saveID;
  }

  /**
   * Busca un nuevo ranking a partir del código ingresado.
   */
  searchNewRanking() {
    console.log(this.sendCode.value);
    const code = this.sendCode.value;
    this.wantToEnterRankingService.sendCode(this.sendCode.value);
  }

  /**
   * Se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.studentRankingManagament.getThisStudentsRanking().subscribe((response: Ranking[]) => {
      this.rankingList = response;
      console.log(response);
    });
  }
}
