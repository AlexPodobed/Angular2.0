import {Routes} from '@angular/router';
import {NoContentComponent} from './features/no-content';
import {HomeComponent} from './features/home';

import {COURSES_ROUTES} from './features/courses/';

export const ROUTES: Routes = [
    ...COURSES_ROUTES,
    {path: '', component: HomeComponent},
    {path: '**', component: NoContentComponent}
];
