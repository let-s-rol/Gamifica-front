import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewRankingServiceService } from 'src/app/app-routing/new-ranking-service.service';

@Component({
  selector: 'app-new-ranking',
  templateUrl: './new-ranking.component.html',
  styleUrls: ['./new-ranking.component.css']
})
export class NewRankingComponent implements OnInit {

  user!: FormGroup;
  constructor(public router: Router, private newRankingService: NewRankingServiceService) {
    this.user = new FormGroup({
      ranking_name: new FormControl('', [Validators.required, Validators.minLength(3)]),

    });
  }

  send() {
    // TODO Hacer enlace y que guarde el enunciado
  
    console.log(this.user.value);

    const gameId = 1;
    this.newRankingService.addNewRanking(this.user.value)
 
    

  }

  ngOnInit(): void { }
}
