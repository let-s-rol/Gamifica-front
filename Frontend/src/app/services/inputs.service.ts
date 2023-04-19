import { Injectable } from '@angular/core';
import { Ranking } from '../inferfaces/RankingList';

@Injectable({
  providedIn: 'root'
})
export class InputsService {
  object!: Ranking;

  sendMessage(object: Ranking) {
    this.object = object;
  }
  constructor() { }
}
