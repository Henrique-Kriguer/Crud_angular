import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses: Course[] = [
    {_id:'1',name:'Angular',category: 'front-end'},
    {_id:'2',name:'Spring Boot',category: 'back-end'},
    {_id:'3',name:'Java',category: 'back-end'},
    {_id:'4',name:'JavaScript',category: 'front-end'},
    {_id:'5',name:'TypeScript',category: 'front-end'}

  ];
  displayedColumns: string[] = ['name', 'category'];
}
