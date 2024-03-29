import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseViewComponent } from './components/course-view/course-view.component';
import { MaterialCardComponent } from './components/material-card/material-card.component';
import { MaterialViewComponent } from './components/material-view/material-view.component';
import { EnrollFormComponent } from './components/enroll-form/enroll-form.component';


@NgModule({
  declarations: [
    CourseCardComponent,
    CourseViewComponent,
    MaterialCardComponent,
    MaterialViewComponent,
    EnrollFormComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
