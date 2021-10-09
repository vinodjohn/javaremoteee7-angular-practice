import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginSignupComponent} from './login-signup/login-signup.component';
import {FormsModule} from "@angular/forms";
import {TeacherModule} from "./teacher/teacher.module";
import {RouterModule, Routes} from "@angular/router";
import {TeacherDashboardComponent} from "./teacher/teacher-dashboard/teacher-dashboard.component";

const appRoutes: Routes =
    [
        {
            path: 'login-signup',
            component: LoginSignupComponent
        },
        {
            path: 'teacher',
            component: TeacherDashboardComponent
        }
    ];

@NgModule({
    declarations: [
        AppComponent,
        LoginSignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        TeacherModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
