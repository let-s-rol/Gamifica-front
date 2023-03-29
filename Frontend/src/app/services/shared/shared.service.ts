import { Injectable } from '@angular/core';
import { RankingList } from 'src/app/inferfaces/RankingList';
import { User } from 'src/app/inferfaces/User';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  sharedRankingID: number= 0; //TODO borrar iniciación después
}
