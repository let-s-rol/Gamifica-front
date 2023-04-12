import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../navbar/login/login.component';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { RegisterComponent } from '../register/register.component';
import { PendentUserComponent } from '../pendent-user/pendent-user.component';
import { ShowRankingComponent } from '../ranking/show-ranking/show-ranking.component';
import { TareasTeacherComponent } from '../ranking/show-ranking/tareas-teacher/tareas-teacher.component';
import { NewRankingComponent } from '../ranking/show-ranking/new-ranking/new-ranking.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tarea', component: TareasTeacherComponent },
  { path: 'edit', component: ShowRankingComponent },
  { path: 'user', component: UserPanelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'pendentList', component: PendentUserComponent},
  { path: 'newRanking', component: NewRankingComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}


