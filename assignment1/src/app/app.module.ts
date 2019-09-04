import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './auth/admin/admin.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { UserComponent } from './auth/user/user.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    LogoutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
