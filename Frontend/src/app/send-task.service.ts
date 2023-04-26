import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendTaskService {

  constructor(private http: HttpClient) { }

  onFileSelected(event:any) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64 = reader.result!.toString().split(',')[1];
      this.sendToBackend(base64);
    };
  }

  sendToBackend(base64: string) {
    const url = 'http://tu-url-backend.com/api/pdf';
    const data = { pdf: base64 };

    this.http.post(url, data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}


// En el componente de Angular





