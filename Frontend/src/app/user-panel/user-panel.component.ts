import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../inferfaces/User';
import { SharedService } from 'src/app/services/shared/shared.service';
import { UsersService } from '../services/users/users.service';
import { RankingListComponent } from '../ranking/student-ranking-list/ranking-list.component';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
})
export class UserPanelComponent implements OnInit {
  userId: number = 1;
  user: FormGroup;
  usersList: User[] = [];
  usersListX: User[] = [];
  isTeacher: boolean = false;
  editMode: boolean = false;
  constructor(
    public router: Router,
    @Inject(SharedService) private sharedService: SharedService,
    private userService: UsersService,
    
  ) {
    this.user = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),

      email: new FormControl('', [Validators.required, Validators.email]),

      school: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

    // TODO arreglar foto
    const UserJSON: string = `{
        "users": [{
        "id":"1",
        "name":"Manolo",
        "lastname":"Rodriguez",
        "email":"manolor@correo.com",
        "date":"14/12/1999",
        "school":"escuela de sepso",
        "rol":"teacher",
        "img":"../../assets/default.png"
        }
      ]
        }`;

    const userDict: any = JSON.parse(UserJSON);
    this.usersList = userDict['users'];
    // this.rol = this.usersList[0].rol;
  }

  send(): any {
    console.log(this.user.value);
    this.userService.editUser(this.user.value);
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (user: User) => {
        this.usersListX.push(user);

        console.log(this.usersListX);
      },
      error: (error) => window.alert(error),
    });

    //TODO pasar rol a show ranking
  }

  logout() {
    let w = window as any;
    localStorage.removeItem('access_token');
    // w.location.reload();
  }
}
