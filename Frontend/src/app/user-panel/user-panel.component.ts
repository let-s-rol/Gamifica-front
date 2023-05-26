import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../inferfaces/User';
import { SharedService } from 'src/app/services/shared/shared.service';
import { UsersService } from '../services/users/users.service';
import { RankingListComponent } from '../ranking/student-ranking-list/ranking-list.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  private selectedFile: File | null = null;
  safeImageUrl: SafeResourceUrl | undefined;
  defaultImage = '';


  constructor(
    public router: Router,
    @Inject(SharedService) private sharedService: SharedService,
    private userService: UsersService,
    private sanitizer: DomSanitizer
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
        if (this.usersListX[0].img === "") {
          this.defaultImage = '../../assets/default.png';
        } else {
        this.safeImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + user.img);
        console.log(this.usersListX);
        }
      },
      error: (error) => window.alert(error),
    });
  
    // TODO: Pass role to show ranking
  }

  logout() {
    let w = window as any;
    localStorage.removeItem('access_token');
    // w.location.reload();
  }

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    } else {
      this.selectedFile = null;
    }
  }

  uploadProfilePicture() {
    if (this.selectedFile) {
      this.userService.updateProfilePicture(this.selectedFile).subscribe(
        (response) => {
          // Handle success response
          console.log(response);
        },
        (error) => {
          // Handle error response
          console.error(error);
        }
      );
    } else {
      // Handle no file selected
      console.log('No file selected.');
    }
  }

  getSafeImageUrl(base64Image: string): SafeResourceUrl {
    const imageUrl = 'data:image/png;base64,' + base64Image;
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  }
}
