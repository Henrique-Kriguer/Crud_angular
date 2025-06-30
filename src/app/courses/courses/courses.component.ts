import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  imports: [
  AppMaterialModule
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
