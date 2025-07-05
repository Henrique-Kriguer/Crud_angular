import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  list(): Course[] {
    return  [
      {_id:'1',name:'Angular',category: 'front-end'},
      {_id:'2',name:'Spring Boot',category: 'back-end'},
      {_id:'3',name:'Java',category: 'back-end'},
      {_id:'4',name:'JavaScript',category: 'front-end'},
      {_id:'5',name:'TypeScript',category: 'front-end'}
      ];
  }
}
