import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-ranking',
  templateUrl: './new-ranking.component.html',
  styleUrls: ['./new-ranking.component.css']
})
export class NewRankingComponent implements OnInit {

  user!: FormGroup;
  constructor() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      task: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  send() {
    // TODO Hacer enlace y que guarde el enunciado

  }

  ngOnInit(): void { }
}
