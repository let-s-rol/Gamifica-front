import { Injectable } from '@angular/core';
import { PendentList } from '../../inferfaces/pendentList';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WaitingForRankingStudentsService {

  readonly Url = 'http://127.0.0.1:8000/api/';

  constructor(private _http: HttpClient) { }

  getPendentUsers() {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    });

    return this._http.get<PendentList[]>(this.Url + 'show_pending_users/', { headers, withCredentials: true }).pipe(
      tap(response => console.log('Response from back-end:', response))
    );
  }
}
