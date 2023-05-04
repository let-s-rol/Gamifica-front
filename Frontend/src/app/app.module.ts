import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './navbar/login/login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

import { RankingListComponent } from './ranking/student-ranking-list/ranking-list.component';
import { ShowRankingComponent } from './ranking/show-ranking/show-ranking.component';
import { TeacherRankingListComponent } from './ranking/teacher-ranking-list/teacher-ranking-list.component';
import { PendentUserComponent } from './pendent-user/pendent-user.component';
import { TareasAlumnosComponent } from './ranking/show-ranking/tareas-alumnos/tareas-alumnos.component';
import { TareasTeacherComponent } from './ranking/show-ranking/tareas-teacher/tareas-teacher.component';
import { NewRankingComponent } from './ranking/show-ranking/new-ranking/new-ranking.component';
import { SendTaskComponent } from './ranking/show-ranking/tareas-alumnos/send-task/send-task.component';
import { HistoryComponent } from './history/history.component';
import { FilterPipe } from './history/pipes/filter.pipe';

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
    TareasAlumnosComponent,
    TareasTeacherComponent,
    NewRankingComponent,
    SendTaskComponent,
    HistoryComponent,
    FilterPipe,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [UserPanelComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
