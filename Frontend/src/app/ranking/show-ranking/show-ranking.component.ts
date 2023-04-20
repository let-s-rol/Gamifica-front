import { Component, Inject, OnInit } from '@angular/core';
import { RankingUser } from 'src/app/inferfaces/Ranking';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/inferfaces/RankingList';
import { ShowUsersService } from '../../services/users/show-users.service';
import { InputsService } from 'src/app/services/inputs.service';




@Component({
  selector: 'app-show-ranking',
  templateUrl: './show-ranking.component.html',
  styleUrls: ['./show-ranking.component.css'],
})
export class ShowRankingComponent implements OnInit {
  ranking!: Ranking[];
  data: any[] = [];
  rankingName! :string;


  constructor(private input: InputsService, public router: Router, private ShowUsersService: ShowUsersService) {

  }


  

  ngOnInit(): void {

this.input.getRankingStudents().subscribe(
  (response: Ranking[]) => {
    this.ranking = response;
    console.log(response);
  }
);

this.rankingName = this.input.getRankingName();

}
}