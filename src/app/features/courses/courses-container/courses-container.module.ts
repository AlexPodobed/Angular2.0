import { NgModule } from '@angular/core';

import { CourseListModule } from '../course-list';
import { CoursesToolboxModule } from '../courses-toolbox';
import { CoursesContainerComponent } from './courses-container.component';

import { CoursesStateService, CourseModalsModule } from '../shared';

@NgModule({
    declarations: [CoursesContainerComponent],
    imports: [
        CourseListModule,
        CoursesToolboxModule,
        CourseModalsModule
    ],
    providers: [CoursesStateService],
    exports: [CoursesContainerComponent]
})
export class CoursesContainerModule {

}
