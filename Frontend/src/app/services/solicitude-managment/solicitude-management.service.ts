import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudeManagementService {

  constructor(
    private _http: HttpClient
  ) { }

  validateUser(id_ranking: number, id_user: number): Observable<any> {

    
    const token = localStorage.getItem('access_token');
    const headers = { Authorization: `Bearer ${token}` };
    const bodyJSON = { id_ranking, id_user};
    console.log(bodyJSON)

    return this._http.put<any>(environment.server_url + 'validate_student', bodyJSON, { headers });
  }

  denyUser(id_ranking: number, id_user: number): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = { Authorization: `Bearer ${token}` };
    const bodyJSON = { id_ranking, id_user };
    console.log(bodyJSON);
  
    return this._http
      .delete<any>(environment.server_url + 'kick_student', { headers, body: bodyJSON })
      .pipe(
        tap((response) => {
          console.log(response); // Capture and handle the response here
        })
      );

  }

}
