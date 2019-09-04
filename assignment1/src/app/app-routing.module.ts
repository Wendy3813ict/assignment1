import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {AdminComponent} from './auth/admin/admin.component';
import {LogoutComponent} from './auth/logout/logout.component';

import {UserComponent} from './auth/user/user.component';
import {CreateUserComponent} from './auth/create-user/create-user.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'user', component: UserComponent },
  { path: 'createUser', component: CreateUserComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, AdminComponent, LogoutComponent, UserComponent, CreateUserComponent]