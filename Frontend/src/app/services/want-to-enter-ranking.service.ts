import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ranking } from '../inferfaces/RankingList';

@Injectable({
  providedIn: 'root'
})
export class WantToEnterRankingService {
  CharactersServiceComponentFactory(EnterRanking: WantToEnterRankingService) {
    throw new Error('Method not implemented.');
  }

  readonly Url = 'http://127.0.0.1:8000/api/';


  constructor(private _http: HttpClient) { }

  CodeData: any;

  sendCode(code: Ranking) {
    console.log('Payload:', code); // Log the payload before making the request


    const token = localStorage.getItem('access_token');
    console.log('Token:', token); // Log token value
    const headers = { Authorization: `Bearer ${token}` };
    console.log(localStorage);




    return this._http.post(this.Url+ 'access_ranking/' + code, { headers })
      .toPromise()
      .then(response => {
        console.log(response);

        let found = false;
        if (response != null) {
          found = true;
        }

        this.CodeData = response;
        return found;
      })
      .catch(error => {
        console.log(error);
        return false;
      });

  }
}
