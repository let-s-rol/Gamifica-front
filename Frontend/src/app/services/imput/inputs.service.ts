import { Injectable } from '@angular/core';
import { Ranking } from 'src/app/inferfaces/RankingList';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { task } from 'src/app/inferfaces/task';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InputsService {
  readonly Url = 'http://127.0.0.1:8000/api/';

  constructor(private _http: HttpClient) {}
  object!: Ranking;

  sendMessage(object: Ranking) {
    this.object = object;
    console.log(this.object);
  }

  getRankingName() {
    return this.object.ranking_name;
  }

  //Esta función muestra el interior del ranking, específicamente, es la lista de Estudiantes que hay en él
  getRankingStudents(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });
  
    const options = {
      headers,
      withCredentials: true
    };
    console.log('ID:', id);
  
    return this._http
    .get<Ranking[]>(`${this.Url}show_students/${id}`, options)
    .pipe (
      tap((response) => console.log('Response from back-end:', response))
    );
  }
  
  //Esta función permite crear una Tarea Nueva para el Ranking
  createTask(task: task) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });

    const body = {
      id_ranking: this.object.id,
      ranking_name: this.object.ranking_name,
      name: task.name,
      sentence: task.sentence,
    };

    console.log(body);

    return this._http.post(this.Url + 'createTask', body, { headers });
  }

  getTask(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });
  
    const params = new HttpParams().set('id', id.toString());
    console.log('Get Task Id_Ranking: ' + id);
  
    return this._http
      .get<task[]>(this.Url + 'ShowTasks', { headers, params })
      .pipe(
        tap((response) => console.log('Response from back-end TASK:', response))
      );
  }
  


  deleteTask(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });

    const body = { id: id };

    const params = new HttpParams().set('id', this.object.id);
    console.log('Get Task Id_Ranking' + params);

    return this._http
      .delete<task[]>(this.Url + 'deleteRankingTask', { headers, body })
      .pipe(
        tap((response) => console.log('Response from back-end TASK:', response))
      );
  }


  getHistory (id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });
  
    const options = {
      headers,
      withCredentials: true
    };
    console.log('ID:', id);
  
    return this._http
    .get<any[]>(`${this.Url}showHistorial/${id}`, options)
    .pipe (
      tap((response) => console.log('Response from back-end:', response))
    );
  }

  getSkills(id: number, el_id_user: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });

    const id_ranking = id;
    const id_user = el_id_user;

    const params = new HttpParams()
    .set('id_ranking', id_ranking.toString())
    .set('id_user', id_user.toString());

  
    return this._http
      .get<task[]>(this.Url + 'showSkills', { headers, params })
      .pipe(
        tap((response) => console.log('Response from back-end TASK:', response))
      );
  }

  regenerateCode(id: number) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });

    const body = {
      id: id,
    };

    console.log(body);

    return this._http.post(this.Url + 'regenerate_code', body, { headers });



  }


  


}
