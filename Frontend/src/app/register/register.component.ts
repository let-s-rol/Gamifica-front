import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  
  
  studentFlag: boolean = true;
  constructor() {}

  ngOnInit() {}

  student_flag() {
    return this.studentFlag;
  }
}
