import { Routes } from '@angular/router';
import {
    CoursesContainerComponent,
    CourseDetailsComponent,
    CourseNewContainerComponent,
    CourseUpdateContainerComponent,
    // CourseFormComponent
} from './index';

export const COURSES_ROUTES: Routes = [
    { path: 'courses', component: CoursesContainerComponent },
    { path: 'courses/new', component: CourseNewContainerComponent },
    { path: 'courses/update/:id', component: CourseUpdateContainerComponent },
    { path: 'courses/:id', component: CourseDetailsComponent }
];
