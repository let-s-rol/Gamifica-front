import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RankingUser } from '../../inferfaces/Ranking';

@Injectable({
  providedIn: 'root'
})
export class NewRankingServiceService {
  CharactersServiceComponentFactory(NewRankingService: NewRankingServiceService) {
    throw new Error('Method not implemented.');
  }

  readonly Url = 'http://127.0.0.1:8000/api/';



  constructor(private _http: HttpClient) { }

  newRankingData: any;

  addNewRanking(newRanking: RankingUser) {
    console.log('Payload:', newRanking); // Log the payload before making the request


    const token = localStorage.getItem('access_token');
    console.log('Token:', token); // Log token value
    const headers = { Authorization: `Bearer ${token}` };
    console.log(localStorage);




    return this._http.post(this.Url+ 'create_ranking', newRanking, { headers })
      .toPromise()
      .then(response => {
        console.log(response);

        let found = false;
        if (response != null) {
          found = true;
        }

        this.newRankingData = response;
        return found;
      })
      .catch(error => {
        console.log(error);
        return false;
      });

  }





}
