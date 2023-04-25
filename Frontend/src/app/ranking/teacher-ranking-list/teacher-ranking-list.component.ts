import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/inferfaces/User';
import { Ranking } from '../../inferfaces/RankingList';
import { TeachersRankingListService } from 'src/app/services/teacherRanking/teacher-rankings.service';
import { Router } from '@angular/router';
import { InputsService } from 'src/app/services/inputs.service';

@Component({
  selector: 'app-teacher-ranking-list',
  templateUrl: './teacher-ranking-list.component.html',
  styleUrls: ['./teacher-ranking-list.component.css']
})
export class TeacherRankingListComponent implements OnInit {

  rankingList!: Ranking[];
  rankingEmptyList!: Ranking[];


  constructor(private input: InputsService, private TeachersRankingListService: TeachersRankingListService, public router: Router,
  ) {

  }


  searchNewRanking() {
    //TODO hacer pedir un nuevo rankk al servidor dependiendo de la ip que le pasemos. y añadirlo al push o refrescar

  }

  ngOnInit(): void {
    this.TeachersRankingListService.getUserRankings().subscribe((response: Ranking[]) => {
      this.rankingList = response;
      console.log(response);

    });
  }

  takeObject(eq: Ranking) {
    localStorage.setItem('id', eq.id.toString());
    localStorage.setItem('id', eq.ranking_name.toString());
    this.input.sendMessage(eq);

    
  }



  deleteRanking(ranking: Ranking) {

    console.log(ranking.id)
    this.TeachersRankingListService.deleteUserRanking(ranking.id).subscribe();

  }

}
