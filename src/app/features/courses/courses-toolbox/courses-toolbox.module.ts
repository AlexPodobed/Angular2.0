import {NgModule} from '@angular/core';
import {CoursesToolboxComponent} from './courses-toolbox.component';
import {CourseSearchModule} from './course-search';

@NgModule({
    declarations: [CoursesToolboxComponent],
    imports: [CourseSearchModule],
    exports: [CoursesToolboxComponent]
})
export class CoursesToolboxModule {

}
