import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './auth/admin/admin.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { UserComponent } from './auth/user/user.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './auth/create-user/create-user.component';

const appRoutes: Routes = [
  { path: 'login', component : LoginComponent}
];

@NgModule({

  

  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    LogoutComponent,
    UserComponent,
    routingComponents,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

   
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
