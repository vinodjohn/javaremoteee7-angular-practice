import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginSignupComponent} from './login-signup/login-signup.component';
import {FormsModule} from "@angular/forms";
import {TeacherModule} from "./teacher/teacher.module";
import {RouterModule, Routes} from "@angular/router";
import {TeacherDashboardComponent} from "./teacher/teacher-dashboard/teacher-dashboard.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppInterceptor} from "./shared/interceptor/app.interceptor";
import {MatMenuModule} from "@angular/material/menu";

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
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        MatMenuModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AppInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
