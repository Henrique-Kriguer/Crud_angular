import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatCardModule,
    CoursesComponent
  ]
})
export class CoursesModule { }
