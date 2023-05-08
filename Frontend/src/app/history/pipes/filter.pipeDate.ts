/**
 * Este es el Pipe personalizado 'filter', utilizado para filtrar una lista de objetos en base a un valor de filtro proporcionado.
 * @param items - La lista de objetos a filtrar.
 * @param filtro - El valor de filtro utilizado para filtrar los objetos.
 * @returns Una nueva lista de objetos filtrados.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterDate' })
export class FilterPipeDate implements PipeTransform {
  /**
   * Esta función se encarga de transformar la lista de objetos utilizando el valor de filtro proporcionado.
   * @param items - La lista de objetos a filtrar.
   * @param filtro - El valor de filtro utilizado para filtrar los objetos.
   * @returns Una nueva lista de objetos filtrados.
   */

  transform(items: any[], fechaInicio: Date, fechaFin: Date): any[] {
    debugger;
    if (!items) {
      return [];
    }
    if (!fechaInicio && !fechaFin) {
      return items;
    }

    return items.filter((item) => {
      console.log(item.fecha, fechaInicio);
      console.log(fechaFin, fechaInicio, item.fecha);
      return (
        (!fechaInicio || item.fecha >= fechaInicio) &&
        (!fechaFin || item.fecha <= fechaFin)
      );
    });
  }
}
