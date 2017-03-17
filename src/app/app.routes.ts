import { Routes } from '@angular/router';
import { NoContentComponent } from './features/no-content';
import { HomeComponent } from './features/home';

import { COURSES_ROUTES } from './features/courses/';
import { LOGIN_ROUTES } from './features/login';

export const ROUTES: Routes = [
    ...COURSES_ROUTES,
    ...LOGIN_ROUTES,
    { path: '', component: HomeComponent },
    { path: '**', component: NoContentComponent }
];
