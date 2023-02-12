import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listas: string[] = [];
  tareas: UsersList[];
  flag: boolean = true;
  lastId: String = "";

  constructor() {
    const tareasJSON2: string = `{
      "tareas": [

      { "id": 0, 
      "img":"https://picsum.photos/300/200", 
      "titulo": "Tarea 1: Diseño UI tiene un usuaiio",
      "usuarios": [{
        "email": "lponts@ilerna.com", 
        "img":"https://picsum.photos/300/300",
        "nick": "Juan",
        "alt":"Usuario" },
      ]
      }`;

    const tareasDict: any = JSON.parse(tareasJSON2);
    this.tareas = tareasDict['tareas'];

    this.initializeInstance(tareasDict);
  }
  ngOnInit(): void {
    
  }

  // cose el json en forma de array conprueba cual es la ultima entrada y devuelve el valor del ultimo id para poderlo usar
  initializeInstance(array: String[]) {
    for (let index = 0; index < array.length; index++) {
      if (index + 1 == array.length) {
        this.lastId = this.split(array[index]);
      }
    }
    return 0;
  }

  // separa el String para conseguir el numero del id dentro del json
  split(str: String) {
    var newValue: String;
    var array: String[];

    array = str.split(',');
    newValue = array[0];

    array = newValue.split(':');
    return array[1];

  }
}
export interface UsersList {
  email: string;
  img: string;
  nick: string;
  alt: string;
  }