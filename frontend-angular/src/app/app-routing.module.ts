import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PaymentsComponent} from "./payments/payments.component";
import {StudentsComponent} from "./students/students.component";
import {LoadStudentsComponent} from "./load-students/load-students.component";
import {LoadPaymentsComponent} from "./load-payments/load-payments.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {authenticationGuard} from "./guards/authentication.guard";
import {authorizationGuard} from "./guards/authorization.guard";
import {UnauthorizedComponent} from "./unauthorized/unauthorized.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: 'admin', component: AdminTemplateComponent, canActivate:[authenticationGuard], children:[
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'payments', component: PaymentsComponent},
      {path: 'students', component: StudentsComponent},
      {path: 'loadStudents', component: LoadStudentsComponent, canActivate: [authorizationGuard], data :{roles:  ['ADMIN']}},
      {path: 'loadPayments', component: LoadPaymentsComponent, canActivate: [authorizationGuard], data : {roles: ['ADMIN']}},
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
