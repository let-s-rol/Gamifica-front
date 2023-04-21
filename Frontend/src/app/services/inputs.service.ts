import { Injectable } from '@angular/core';
import { Ranking } from '../inferfaces/RankingList';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { task } from '../inferfaces/task';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InputsService {

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

  getRankingStudents() {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    });

   

     const params = new HttpParams().set('id', this.object.id);
     

    

    return this._http.get<Ranking[]>(this.Url + 'show_students',  { headers, withCredentials: true, params  }).pipe(
      tap(response => console.log('Response from back-end:', response))
    );
  }



  createTask( /*ranking_name: task, sentence: task*/ task: task ) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    });


   
    const body = {
    
        id_ranking: this.object.id,
        ranking_name: this.object.ranking_name,
        name:task.name,
        sentence:task.sentence
        
      }

      console.log(body)

    return this._http.post(this.Url + 'createTask', body, { headers })  
  
  };




  }

  
