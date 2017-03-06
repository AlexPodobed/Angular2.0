import {Routes} from '@angular/router';
import {CoursesContainerComponent, CourseDetailsComponent, CourseFormComponent} from './index';

export const COURSES_ROUTES: Routes = [
    {path: 'courses', component: CoursesContainerComponent},
    {path: 'course-details', component: CourseDetailsComponent},
    {path: 'course-form', component: CourseFormComponent}
];
