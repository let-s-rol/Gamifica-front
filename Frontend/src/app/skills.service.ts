import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private apiUrl = 'http://127.0.0.1:8000/api/insertSkillsPoints'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  sendJsonToBackend(json: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });
    const groupedJson = Object.entries(json).reduce(
      (acc: { [key: string]: any }, [key, value]) => {
        const [userId, attribute] = key.split('_');
        if (!acc[userId]) {
          acc[userId] = {};
        }
        acc[userId][attribute] = value;
        return acc;
      },
      {}
    );
    return this.http.post(this.apiUrl, groupedJson, { headers });
  }
}
