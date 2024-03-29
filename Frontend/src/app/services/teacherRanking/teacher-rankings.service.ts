import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../inferfaces/User';
import { Ranking } from '../../inferfaces/RankingList';
import { filter, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TeachersRankingListService {
  readonly Url = 'http://127.0.0.1:8000/api/';

  constructor(private _http: HttpClient) {}

  getUserRankings() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });

    return this._http
      .get<Ranking[]>(this.Url + 'show_rankings/', {
        headers,
        withCredentials: true,
      })
      .pipe(tap((rankings) => console.log(rankings)));
  }


  deleteUserRanking(id:Number) {

    const token = localStorage.getItem('access_token');
    const headers = { Authorization: `Bearer ${token}` };

    const body = {id:id};
    console.log(body)

    

    return this._http.delete<Ranking[]>(this.Url + 'delete_ranking', { headers, body:body }).pipe(
      tap (rankings => console.log(rankings))
    );
  }
}
