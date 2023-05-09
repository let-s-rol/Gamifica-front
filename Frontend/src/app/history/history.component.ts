/**
 * Componente que muestra el historial de notas
 * @class
 */
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterPipePuntuador } from './pipes/filter.piperpuntuador';
import { FilterPipeSkill } from './pipes/filter.pipeskill';
import { InputsService } from 'src/app/services/imput/inputs.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  /** Variable que almacena el filtro de búsqueda */

  public filtro!: any;
  public filtroApellido!: any;
  public filtroSkill!: any;
  public fechaInicio!: any;
  public fechaFin!: any;
  public filterDate!: any;

  /** Array que almacena las notas del historial */
  historialNotas!: any[];

  /** Función que se ejecuta al inicializar el componente */

  constructor(
    private input: InputsService,    
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {


        // Obtiene el ranking de estudiantes del servidor a través del servicio InputService/StudentRankingManagament
        this.route.params.subscribe((params) => {
          let id = Number.parseInt(params['id']);
          if (Number.isNaN(id)) {
            console.error('Invalid id:', params['id']);
            return;
          }
          console.log('ID from route params:', id);
          this.input.getHistory(id).subscribe((response: any[]) => {
            this.historialNotas = response[0];
          });
  });

  console.log("Array Historial: ", this.historialNotas);
  

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
