// Importaciones de los módulos y servicios necesarios
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ranking } from 'src/app/inferfaces/RankingList';
import { User } from 'src/app/inferfaces/User';
import { WantToEnterRankingService } from 'src/app/services/want-to-enter/want-to-enter-ranking.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Router } from '@angular/router';
import { StudentRankingManagamentService } from 'src/app/services/student-ranking-managament.service';
import { InputsService } from 'src/app/services/inputs.service';

// Decorador que define la estructura y funcionalidad del componente
@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css'],
})

// Clase que implementa la lógica del componente
export class RankingListComponent implements OnInit {
  rankingList!: Ranking[]; // Lista de rankings
  saveID: number = 0; // Identificador del ranking seleccionado
  sendCode: FormGroup; // Formulario para enviar código

  @Input() userInput!: User[]; // Datos de usuario

  constructor(
    @Inject(SharedService) private sharedService: SharedService, // Servicio compartido
    public router: Router, // Enrutador
    private WantToEnterRankingService: WantToEnterRankingService, // Servicio de entrada a un ranking
    private StudentRankingManagament : StudentRankingManagamentService,
    private input: InputsService
  ) {
    // Definición del formulario con sus respectivas validaciones
    this.sendCode = new FormGroup({
      code: new FormControl('', []),
    });
  }

  /* Método que guarda el identificador del ranking seleccionado
  selectRanking(id: number) {
    this.saveID = id;
  }
*/
takeObjectStudent(eq: Ranking) {
  this.input.sendMessage(eq);
}
  

  // Método que actualiza el servicio compartido con el identificador del ranking seleccionado
  updateSharedText() {
    this.sharedService.sharedRankingID = this.saveID;
  }

  // Método que busca un nuevo ranking a partir del código ingresado
  searchNewRanking() {
    console.log(this.sendCode.value);
    const code = this.sendCode.value;
    this.WantToEnterRankingService.sendCode(this.sendCode.value);
  }

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.StudentRankingManagament.getThisStudentsRanking().subscribe((response: Ranking[]) => {
      this.rankingList = response;
      console.log(response);

    });


  }
}
