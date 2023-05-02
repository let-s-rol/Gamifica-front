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
    this.historialNotas = [
      {
        fecha: '1/3/2025',
        nota1: {
          nombre: 'juan',
          Responsabilidad: 80,
          Cooperacion: 90,
          Iniciativa: 75,
        },
      },
      {
        fecha: '2/3/2025',
        nota1: {
          Emocional: 70,
        },
      },
    ];
  }
}
