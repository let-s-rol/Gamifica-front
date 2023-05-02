/**
 * Se importa NgModule desde el módulo @angular/core
 * Se importa CommonModule desde el módulo @angular/common
 * Se importa Routes y RouterModule desde el módulo @angular/router
 * Se importan los componentes necesarios para las rutas
 */
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
import { SendTaskComponent } from '../ranking/show-ranking/tareas-alumnos/send-task/send-task.component';

/**
 * Se define un array de rutas, donde se asocia cada ruta con su respectivo componente
 */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tarea', component: TareasTeacherComponent },
  { path: 'edit/:id', component: ShowRankingComponent },
  { path: 'user', component: UserPanelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'pendentList', component: PendentUserComponent},
  { path: 'newRanking', component: NewRankingComponent},
  { path: 'sendTask', component:SendTaskComponent},
  //{ path: '**', redirectTo: '/', pathMatch: 'full' }, // Redirecciona cualquier ruta no definida al componente HomeComponent
];

/**
 * Se define un NgModule llamado AppRoutingModule
 */
@NgModule({
  /**
   * Se declaran los componentes que se usen en el módulo
   */
  declarations: [],
  /**
   * Se importan CommonModule y RouterModule y se configura las rutas definidas en el array de rutas
   */
  imports: [CommonModule, RouterModule.forRoot(routes)],
  /**
   * Se exporta el módulo RouterModule
   */
  exports: [RouterModule],
})
export class AppRoutingModule {

}
