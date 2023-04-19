import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/inferfaces/User';
import { Ranking } from '../../inferfaces/RankingList';
import { TeachersRankingListService } from 'src/app/services/teacher-rankings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-ranking-list',
  templateUrl: './teacher-ranking-list.component.html',
  styleUrls: ['./teacher-ranking-list.component.css']
})
export class TeacherRankingListComponent implements OnInit {

  rankingList!: Ranking[];
  rankingEmptyList!:Ranking[];


  constructor(private TeachersRankingListService: TeachersRankingListService, public router: Router,
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

  deleteRanking(ranking: Ranking) {

    console.log(ranking.id)
    this.TeachersRankingListService.deleteUserRanking(ranking.id).subscribe();

  }

}
