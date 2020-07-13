import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateEmployedComponent } from './create-employed/create-employed.component';
import { EmployedListComponent } from './employed-list/employed-list.component';
import { GestionComponent } from './gestion/gestion.component';


const routes: Routes = [
  { path:'', redirectTo: 'Login', pathMatch: 'full'},
  { path: 'Login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'employedList', component: EmployedListComponent},
  { path: 'createEmployed', component: CreateEmployedComponent},
  { path: 'gestion', component: GestionComponent},

  //{ path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
