import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { RegisterComponent } from '../register/register.component';
import { ShowRankingComponent } from '../show-ranking/show-ranking.component';
import { PendentUserComponent } from '../pendent-user/pendent-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit', component: ShowRankingComponent },
  { path: 'user', component: UserPanelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'pendentList', component: PendentUserComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}


