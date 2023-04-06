import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../inferfaces/User';
import { filter } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly Url = 'http://127.0.0.1:8000/api/';

  constructor(private _http: HttpClient) {}

  userData: any;

  getUser() {
    
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('acces_token')
  };
    return this._http.get<User[]>(this.Url + 'user', { headers, withCredentials: true }).pipe(

      filter((response: any) => {
        let found = false;
        if (response != null) {
          found = true;
        }
        this.userData = response;
        return found;
      })

    );
  }

  addUser(user: User) {

    console.log('Payload:', user);
   
    

    return this._http
    .post(this.Url + 'register', user)
    .subscribe ((response) => {
        let found = false;
        if (response != null) {
          found = true;
        }
        this.userData = response;
        return found;
      });
  }

  login(login: User) {

    return this._http.post(this.Url + 'login', login).pipe(
      filter((response) => {
        let found = false;
        if (response != null) {
          found = true;
        }
        this.userData = response;
        return found;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    // si existe un token, el usuario está autenticado
    //return token !== null;
    return false;
  }


}
