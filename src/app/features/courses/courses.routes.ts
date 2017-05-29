import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/services';

import {
    CoursesContainerComponent,
    CourseDetailsComponent,
    CourseNewContainerComponent,
    CourseUpdateContainerComponent
} from './index';

export const COURSES_ROUTES: Routes = [
    { path: 'courses', component: CoursesContainerComponent, canActivate: [AuthGuard] },
    { path: 'courses/new', component: CourseNewContainerComponent, canActivate: [AuthGuard] },
    { path: 'courses/update/:id', component: CourseUpdateContainerComponent, canActivate: [AuthGuard] },
    { path: 'courses/:id', component: CourseDetailsComponent, canActivate: [AuthGuard] }
];
