import { Injectable } from '@angular/core';
import { Ranking } from '../../inferfaces/RankingList';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { task } from '../../inferfaces/task';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentRankingManagamentService {

  readonly Url = 'http://127.0.0.1:8000/api/';

  constructor(private _http: HttpClient) { }

  object!: Ranking;

  sendMessage(object: Ranking) {
    this.object = object;
    console.log(this.object);
    
  }

  getRankingName() {

    return this.object.ranking_name;
  
  }

  //Esta función es para mostrar la lista de Rankings en que este Estudiante está inscrito/validado
    getThisStudentsRanking() {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      });
  
      return this._http.get<Ranking[]>(this.Url + 'show_rankings_students', {headers, withCredentials: true,})
      .pipe(tap((rankings) => console.log(rankings)));
    }

    //Esto es para mostrar el interior de cada Ranking
    getInsideRanking() {

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      });
  
       const params = new HttpParams().set('id', this.object.id);
       console.log(params);
       
      return this._http.get<Ranking[]>(this.Url + 'show_students',  { headers, withCredentials: true, params  }).pipe(
        tap(response => console.log('Response from back-end:', response))
      );
    }
  

  
}
