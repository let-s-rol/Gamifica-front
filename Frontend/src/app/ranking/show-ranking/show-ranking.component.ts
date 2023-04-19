import { Component, Inject, OnInit } from '@angular/core';
import { RankingUser } from 'src/app/inferfaces/Ranking';
import { Router } from '@angular/router';
import { Ranking } from 'src/app/inferfaces/RankingList';
import {ShowUsersService} from '../../services/users/show-users.service';




@Component({
  selector: 'app-show-ranking',
  templateUrl: './show-ranking.component.html',
  styleUrls: ['./show-ranking.component.css'],
})
export class ShowRankingComponent implements OnInit {
  ranking!: RankingUser[];
  rankingName:string= "Daw2";

  constructor(public router: Router, private ShowUsersService: ShowUsersService) {
    
    /*
    const rankingListJSON: string = `{
      "users": [
        {

      "lastName":"rosa",
      "nick":"rosa",
      "name":"sintesis",
      "points":"14",
      "img":"https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;h=220"
    },
        {

      "lastName":"Miller ",
      "nick":"asd",
      "name":"casandra",
      "points":"12",
      "img":"https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;h=223"

    },
        {

      "lastName":"John",
      "nick":"pedro",
      "name":"juan",
      "points":"11",
      "img":"https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;h=221"

    },
        {

      "lastName":"ruano",
      "nick":"lauru",
      "name":"laura",
      "points":"10",
      "img":"https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;h=222"

    }

    ]
      }`;

    const rankingListDict: any = JSON.parse(rankingListJSON);
    this.ranking = rankingListDict['users'];
    */

  }
  

  ngOnInit(): void {

    const id_ranking = 1;

    this.ShowUsersService.getRankingStudents(id_ranking).subscribe((response: RankingUser[]) => { 
      this.ranking = response;
      console.log(response);
          
    });
  }

  
  }