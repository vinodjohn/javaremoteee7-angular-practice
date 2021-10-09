import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';



@NgModule({
  declarations: [
    TeacherDashboardComponent
  ],
  exports: [
    TeacherDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeacherModule { }
