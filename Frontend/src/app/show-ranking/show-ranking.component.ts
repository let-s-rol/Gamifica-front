import { Component, OnInit } from '@angular/core';
import { Ranking } from '../inferfaces/Ranking';

@Component({
  selector: 'app-show-ranking',
  templateUrl: './show-ranking.component.html',
  styleUrls: ['./show-ranking.component.css'],
})
export class ShowRankingComponent implements OnInit {
  ranking!: Ranking[];
  rankingName:string= "Daw2";

  constructor() {
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
  }

  ngOnInit(): void {}
}
