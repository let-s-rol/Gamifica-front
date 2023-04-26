import { Injectable } from '@angular/core';
import { Ranking } from 'src/app/inferfaces/RankingList';
import { User } from 'src/app/inferfaces/User';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  sharedRankingID: number= 0; 
}
