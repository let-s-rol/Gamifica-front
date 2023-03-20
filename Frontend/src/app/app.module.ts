import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { ShowRankingComponent } from './show-ranking/show-ranking.component';
import { TeacherRankingListComponent } from './teacher-ranking-list/teacher-ranking-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    UserPanelComponent,
    ChangeInfoComponent,
    StudentMenuComponent,
    RankingListComponent,
    ShowRankingComponent,
    TeacherRankingListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
