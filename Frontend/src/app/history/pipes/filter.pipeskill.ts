/**
 * Este es el Pipe personalizado 'filter', utilizado para filtrar una lista de objetos en base a un valor de filtro proporcionado.
 * @param items - La lista de objetos a filtrar.
 * @param filtro - El valor de filtro utilizado para filtrar los objetos.
 * @returns Una nueva lista de objetos filtrados.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroSkill',
})
export class FilterPipeSkill implements PipeTransform {
  /**
   * Esta función se encarga de transformar la lista de objetos utilizando el valor de filtro proporcionado.
   * @param items - La lista de objetos a filtrar.
   * @param filtro - El valor de filtro utilizado para filtrar los objetos.
   * @returns Una nueva lista de objetos filtrados.
   */

  transform(historialNotas: any[], filtroSkill: string): any[] {
    if (!filtroSkill) {
      return historialNotas; // Devuelve el arreglo sin modificar
    }
  
    // Aplica el filtro en el arreglo
    return historialNotas.filter(item => {
      return Object.keys(item.pentabilities).includes(filtroSkill);
    });
  }
  

}
