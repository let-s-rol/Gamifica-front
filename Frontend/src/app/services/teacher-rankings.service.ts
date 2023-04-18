import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../inferfaces/User';
import { Ranking } from '../inferfaces/RankingList';
import { filter } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeachersRankingListService {

  readonly Url = 'http://127.0.0.1:8000/api/';

  constructor(private _http: HttpClient) {}




  getUserRankings() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    });

    return this._http.get<Ranking[]>(this.Url + 'show_rankings/', { headers, withCredentials: true }).pipe(
      tap (rankings => console.log(rankings))
    );
  }
}
