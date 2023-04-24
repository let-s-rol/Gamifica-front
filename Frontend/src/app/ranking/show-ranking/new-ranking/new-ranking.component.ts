// Importaciones de los módulos y servicios necesarios
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewRankingServiceService } from 'src/app/services/new-ranking/new-ranking-service.service';

// Decorador que define la estructura y funcionalidad del componente
@Component({
  selector: 'app-new-ranking',
  templateUrl: './new-ranking.component.html',
  styleUrls: ['./new-ranking.component.css'],
})
// Clase que implementa la lógica del componente
export class NewRankingComponent implements OnInit {
  newRanking!: FormGroup; // información del nuevo ranking
  constructor(
    public router: Router,
    private newRankingService: NewRankingServiceService
  ) {
    this.newRanking = new FormGroup({
      ranking_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  //llama el services para enviar la información del ranking.
  send() {
    console.log(this.newRanking.value);
    this.newRankingService.addNewRanking(this.newRanking.value);
  }

  ngOnInit(): void {}
}
