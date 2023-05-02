import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PentabilitiesService {
  url = 'http://tu-url-backend.com/api/pdf';

  constructor(private http: HttpClient) {}

  sendJsonToBackend(json: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const groupedJson = Object.entries(json).reduce((acc, [key, value]) => {
      const [userId, attribute] = key.split('_');
      if (!acc[userId]) {
        acc[userId] = {};
      }
      acc[userId][attribute] = value;
      return acc;
    }, {});

    return this.http.post(`${this.apiUrl}/users`, groupedJson, { headers });
  }
}
