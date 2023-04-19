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
  ranking!: RankingUser[];
  rankingName: string = "Daw2";
  laravelFunction: string = "";
  objectRankingTeacher!: Ranking;

  constructor(private input: InputsService, public router: Router, private ShowUsersService: ShowUsersService) {

  }




  ngOnInit(): void {

    this.objectRankingTeacher = this.input.object;

    const token = localStorage.getItem('access_token');
    this.laravelFunction = 'show_students/';


    this.ShowUsersService.getRankingStudents(this.objectRankingTeacher.id , token!, this.laravelFunction).subscribe()


  }

}