import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import {FormsModule} from "@angular/forms";
import {TeacherModule} from "./teacher/teacher.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        TeacherModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
