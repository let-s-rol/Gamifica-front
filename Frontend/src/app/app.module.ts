import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './navbar/login/login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';


import { RankingListComponent } from './ranking/ranking-list/ranking-list.component';
import { ShowRankingComponent } from './ranking/show-ranking/show-ranking.component';
import { TeacherRankingListComponent } from './ranking/teacher-ranking-list/teacher-ranking-list.component';
import { PendentUserComponent } from './pendent-user/pendent-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    UserPanelComponent,
    RankingListComponent,
    ShowRankingComponent,
    TeacherRankingListComponent,
    PendentUserComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
