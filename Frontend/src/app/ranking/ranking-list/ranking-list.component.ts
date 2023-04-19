import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ranking } from 'src/app/inferfaces/RankingList';
import { User } from 'src/app/inferfaces/User';
import { WantToEnterRankingService } from 'src/app/services/want-to-enter/want-to-enter-ranking.service';
import { SharedService } from 'src/app/services/shared/shared.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css'],
})



export class RankingListComponent implements OnInit {
  rankingList!: Ranking[];
  rankingEmptyList!: Ranking[];
  saveID:number = 0;

  sendCode: FormGroup;

  @Input() userInput!: User[];
  constructor(@Inject(SharedService) private sharedService: SharedService, public router: Router, private WantToEnterRankingService:WantToEnterRankingService ) {
  
    this.sendCode = new FormGroup({

      code: new FormControl('', [])

    });

  
    const rankingListJSON: string = `{
      "users": [
        {
          "id":"0",
      "teacher":"rosa",
      "name":"sintesis",
      "points":"1",
      "teacherImg":"https://imgs.search.brave.com/Wt2sdEpSRr9rzDciZmT6BA3C5PkUg2sQSuAdemfr350/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy81NjctNTY3NzAy/MV9raW5nZG9tLWhl/YXJ0cy0xLWFydHdv/cmstY2xpcGFydC5w/bmc"

    },
        {
          "id":"1",
      "teacher":"Manolo",
      "name":"matematicas",
      "points":"1",
      "teacherImg":"def"

    },
        {
          "id":"2",
      "teacher":"Fonsi",
      "name":"daw1",
      "points":"1",
      "teacherImg":"def"

    },
        {
          "id":"3",
      "teacher":"antonio",
      "name":"daw2",
      "points":"1",
      "teacherImg":"https://c8.alamy.com/compes/2j31yj5/hormiga-linda-llevando-una-cebolla-fresca-2j31yj5.jpg"

    },
    {
      "id":"4",
      "teacher":"Ramon",
      "name":"smx1-M",
      "points":"111",
      "teacherImg":"data:image/jpeg;base64,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"

    }
    ]
      }`;

    const rankingListDict: any = JSON.parse(rankingListJSON);
    this.rankingList = rankingListDict['users'];
  }


  selectRanking(id:number) {

    this.saveID = id;
  }
  updateSharedText() {
    this.sharedService.sharedRankingID = this.saveID;
  }

  searchNewRanking() {
    //TODO hacer pedir un nuevo rankk al servidor dependiendo de la ip que le pasemos. y añadirlo al push o refrescar

    console.log(this.sendCode.value);

    
    const code = this.sendCode.value;
    this.WantToEnterRankingService.sendCode(this.sendCode.value)

  }

  ngOnInit(): void {}
}
