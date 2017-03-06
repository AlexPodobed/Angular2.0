import {Routes} from '@angular/router';
import {CoursesContainerComponent} from './features/courses';
import {NoContentComponent} from './features/no-content';

export const ROUTES: Routes = [
    {path: '', component: CoursesContainerComponent},
    {path: 'courses', component: CoursesContainerComponent},
    {path: '**', component: NoContentComponent}
];
