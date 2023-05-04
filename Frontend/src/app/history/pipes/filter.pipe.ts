import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], filtro: string): any[] {
    if (!items) {
      return [];
    }
    if (!filtro) {
      return items;
    }
    filtro = filtro.toLowerCase();
    return items.filter(item => item.nombre.toLowerCase().includes(filtro));
  }
}
