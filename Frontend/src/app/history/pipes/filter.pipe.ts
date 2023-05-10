/**
 * Este es el Pipe personalizado 'filter', utilizado para filtrar una lista de objetos en base a un valor de filtro proporcionado.
 * @param items - La lista de objetos a filtrar.
 * @param filtro - El valor de filtro utilizado para filtrar los objetos.
 * @returns Una nueva lista de objetos filtrados.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName',
})
export class FilterPipe implements PipeTransform {
  /**
   * Esta función se encarga de transformar la lista de objetos utilizando el valor de filtro proporcionado.
   * @param items - La lista de objetos a filtrar.
   * @param filtro - El valor de filtro utilizado para filtrar los objetos.
   * @returns Una nueva lista de objetos filtrados.
   */

  transform(items: any[], filtro: string): any[] {
    // Si la lista de objetos es null o undefined, retorna una lista vacía.

    if (!items) {
      return [];
    }
    // Si no hay valor de filtro, retorna la lista completa sin filtrar.

    if (!filtro) {
      return items;
    }
    // Convierte el valor de filtro a minúsculas para una búsqueda insensible a mayúsculas.
    filtro = filtro
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    // Filtra la lista de objetos en base al valor de filtro proporcionado.

    return items.filter(
      (item) =>
        item.receiver_name &&
        item.receiver_name 
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(filtro)
    );
  }
}
