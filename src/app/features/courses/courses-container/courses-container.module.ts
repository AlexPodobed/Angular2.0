import { NgModule } from '@angular/core';

import { CourseListModule } from '../course-list';
import { CourseSearchModule } from '../course-search';
import { CoursesContainerComponent } from './courses-container.component';

import { CourseModalsModule } from '../shared';

@NgModule({
    declarations: [CoursesContainerComponent],
    imports: [
        CourseListModule,
        CourseSearchModule,
        CourseModalsModule
    ],
    providers: [],
    exports: [CoursesContainerComponent]
})
export class CoursesContainerModule {

}
