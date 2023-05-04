/**
 * Componente que muestra el historial de notas
 * @class
 */
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  /** Variable que almacena el filtro de búsqueda */
  public filtro!: any;

  /** Array que almacena las notas del historial */
  historialNotas: any[] = [];

  /**
   * Función que realiza la transformación del array de notas según el filtro ingresado
   * @param items - Array de notas a filtrar
   * @param filtro - Cadena de texto a utilizar como filtro
   * @returns Array de notas filtradas
   */
  transform(items: any[], filtro: string): any[] {
    if (!items) {
      return [];
    }
    if (!filtro) {
      return items;
    }
    filtro = filtro.toLocaleLowerCase();
    return items.filter((nota) => {
      return nota.nombre.toLocaleLowerCase().includes(filtro);
    });
  }

  /** Función que se ejecuta al inicializar el componente */
  ngOnInit() {
    this.historialNotas = [
      {
        notaId: 1,
        userId: 1234,
        userName: 'Juan',
        userPuntuadorId: 5678,
        namePuntuador: 'Ana',
        pentabilities: {
          Responsabilidad: 8,
          Cooperacion: 7,
          Iniciativa: 9,
          Emocional: 10,
          Pensamiento: 8,
        },
        fecha: '2023-05-10',
        hora: '15:30:00',
      },
      {
        notaId: 2,
        userId: 5678,
        userName: 'María',
        userPuntuadorId: 9012,
        namePuntuador: 'Luis',
        pentabilities: {
          Responsabilidad: 9,
          Cooperacion: 8,
          Iniciativa: 7,
          Emocional: 9,
          Pensamiento: 9,
        },
        fecha: '2023-05-11',
        hora: '11:45:00',
      },
      {
        notaId: 3,
        userId: 9101,
        userName: 'Pedro',
        userPuntuadorId: 5678,
        namePuntuador: 'Ana',
        pentabilities: {
          Responsabilidad: 10,
          Cooperacion: 9,
          Iniciativa: 8,
          Emocional: 7,
          Pensamiento: 9,
        },
        fecha: '2023-05-12',
        hora: '09:15:00',
      },
      {
        notaId: 4,
        userId: 7891,
        userName: 'Luis',
        userPuntuadorId: 1234,
        namePuntuador: 'Juan',
        pentabilities: {
          Responsabilidad: 7,
          Cooperacion: 9,
          Iniciativa: 10,
          Emocional: 8,
          Pensamiento: 6,
        },
        fecha: '2023-05-13',
        hora: '14:00:00',
      },
      {
        notaId: 5,
        userId: 6789,
        userName: 'Ana',
        userPuntuadorId: 9012,
        namePuntuador: 'Luis',
        pentabilities: {
          Responsabilidad: 8,
          Cooperacion: 10,
          Iniciativa: 9,
          Emocional: 9,
          Pensamiento: 7,
        },
        fecha: '2023-05-14',
        hora: '17:20:00',
      },
    ];
  }

  /**
   * Decorador que define el componente HistoryComponent
   * @param arg0 - Objeto que define el selector, la plantilla y la hoja de estilos del componente
   * @returns Una función que define el componente o el propio componente HistoryComponent
   */
  Component(arg0: {
    selector: string;
    templateUrl: string;
    styleUrls: string[];
  }): (target: typeof HistoryComponent) => void | typeof HistoryComponent {
    throw new Error('Function not implemented.');
  }
}
