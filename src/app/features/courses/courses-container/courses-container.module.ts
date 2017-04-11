import { NgModule } from '@angular/core';

import { CourseListModule } from '../course-list';
import { CourseSearchModule } from '../course-search';
import { CoursesContainerComponent } from './courses-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CoursesContainerComponent],
    imports: [
        RouterModule,
        CourseListModule,
        CourseSearchModule
    ],
    providers: [],
    exports: [CoursesContainerComponent]
})
export class CoursesContainerModule {

}
