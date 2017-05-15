import { Routes } from '@angular/router';
import { CoursesContainerComponent, CourseDetailsComponent, CourseFormComponent } from './index';

export const COURSES_ROUTES: Routes = [
    { path: 'courses', component: CoursesContainerComponent },
    { path: 'courses/new', component: CourseFormComponent },
    { path: 'courses/:id', component: CourseDetailsComponent }
];
