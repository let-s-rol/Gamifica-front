import { Injectable } from '@angular/core';
import { Ranking } from '../inferfaces/RankingList';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskManagamentService {

  constructor(private _http: HttpClient) { }

  readonly Url = 'http://127.0.0.1:8000/api/';

  createTask () {}

  getTasks () {}

  deleteTask () {}
  
}
