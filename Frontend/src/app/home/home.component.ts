/**
 * Se importa Component y OnInit desde el módulo @angular/core
 */
import { Component, OnInit } from '@angular/core';

/**
 * Se define el componente HomeComponent
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /**
   * Constructor del componente HomeComponent
   */
  constructor() { }

  /**
   * Método que se llama después de que se inicializa el componente
   */
  ngOnInit(): void {
  }
}
