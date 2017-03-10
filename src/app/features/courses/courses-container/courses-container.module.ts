import {NgModule} from '@angular/core';

import {CourseListModule} from '../course-list';
import {CoursesToolboxModule} from '../courses-toolbox';
import {CoursesContainerComponent} from './courses-container.component';

@NgModule({
    declarations: [CoursesContainerComponent],
    imports: [CourseListModule, CoursesToolboxModule],
    exports: [CoursesContainerComponent]
})
export class CoursesContainerModule {

}
