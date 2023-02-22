import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../inferfaces/User';
import { UsersList } from '../inferfaces/UsersList';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
})
export class UserPanelComponent implements OnInit {
  userId: number = 1;
  user: FormGroup;
  usersList!: User[];
  isTeacher: boolean = false;

    constructor(public router: Router) {
      this.user = new FormGroup({
        name: new FormControl("asd", [Validators.required, Validators.minLength(3)]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        nick: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        passwordRepeat: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        img: new FormControl('', [
          Validators.required,
        ]),
      });
// TODO hacer que coja los balores por defecto del json
    
    // TODO:recoger usuario desde el Laravel al logear
    const UserJSON: string = `{
      "users": [{
      "id":"1",
      "name":"Manolo",
      "lastName":"Rodriguez",
      "email":"manolor@correo.com",
      "date":"14/12/1999",
      "rol":"student",
      "img":"https://imgs.search.brave.com/Wt2sdEpSRr9rzDciZmT6BA3C5PkUg2sQSuAdemfr350/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy81NjctNTY3NzAy/MV9raW5nZG9tLWhl/YXJ0cy0xLWFydHdv/cmstY2xpcGFydC5w/bmc"
      } 
    ]
      }`;

    const userDict: any = JSON.parse(UserJSON);
    this.usersList = userDict['users'];
  }
  send(): any {
   
   
      console.log(this.user.value);
    
  }

  ngOnInit(): void {
    console.log(this.usersList);
  }
}
