import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RegisterStudentComponent } from '../register-student/register-student.component';
import { RegisterTeacherComponent } from '../register-teacher/register-teacher.component';
import { LoginComponent } from '../login/login.component';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register/teacher', component: RegisterTeacherComponent },
  { path: 'register/student', component: RegisterStudentComponent },
  { path: 'user', component: UserPanelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
