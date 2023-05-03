import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})



export class HistoryComponent implements OnInit {
  historialNotas: any[] = [];
  constructor() {}

  ngOnInit() {

    this.historialNotas =  [
        {
          "notaId": 1,
          "userId": 1234,
          "userName": "Juan",
          "userPuntuadorId": 5678,
          "namePuntuador": "Ana",
          "pentabilities": {
            "Responsabilidad": 8,
            "Cooperacion": 7,
            "Iniciativa": 9,
            "Emocional": 10,
            "Pensamiento": 8
          },
          "fecha": "2023-05-10",
          "hora": "15:30:00"
        },
        {
          "notaId": 2,
          "userId": 5678,
          "userName": "María",
          "userPuntuadorId": 9012,
          "namePuntuador": "Luis",
          "pentabilities": {
            "Responsabilidad": 9,
            "Cooperacion": 8,
            "Iniciativa": 7,
            "Emocional": 9,
            "Pensamiento": 9
          },
          "fecha": "2023-05-11",
          "hora": "11:45:00"
        },
        {
          "notaId": 3,
          "userId": 9101,
          "userName": "Pedro",
          "userPuntuadorId": 5678,
          "namePuntuador": "Ana",
          "pentabilities": {
            "Responsabilidad": 10,
            "Cooperacion": 9,
            "Iniciativa": 8,
            "Emocional": 7,
            "Pensamiento": 9
          },
          "fecha": "2023-05-12",
          "hora": "09:15:00"
        },
        {
          "notaId": 4,
          "userId": 7891,
          "userName": "Luis",
          "userPuntuadorId": 1234,
          "namePuntuador": "Juan",
          "pentabilities": {
            "Responsabilidad": 7,
            "Cooperacion": 9,
            "Iniciativa": 10,
            "Emocional": 8,
            "Pensamiento": 6
          },
          "fecha": "2023-05-13",
          "hora": "14:00:00"
        },
        {
          "notaId": 5,
          "userId": 6789,
          "userName": "Ana",
          "userPuntuadorId": 9012,
          "namePuntuador": "Luis",
          "pentabilities": {
            "Responsabilidad": 8,
            "Cooperacion": 10,
            "Iniciativa": 9,
            "Emocional": 9,
            "Pensamiento": 7
          },
          "fecha": "2023-05-14",
          "hora": "17:20:00"
        }
      ]
    }
    ;
  }

