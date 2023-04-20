import { Injectable } from '@angular/core';
import {RankingUser} from '../../inferfaces/Ranking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ShowUsersService {

  readonly Url = 'http://127.0.0.1:8000/api/';

  constructor(private _http: HttpClient) { }

  getRankingStudents(id_ranking: number, token:string, laravelFunction:string) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    });





    return this._http.get<RankingUser[]>(this.Url + 'show_students',  { headers, withCredentials: true, }).pipe(
      tap(response => console.log('Response from back-end:', response))
    );
  }
}
