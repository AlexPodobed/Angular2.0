import {NgModule} from '@angular/core';
import {CoursesToolboxComponent} from './courses-toolbox.component';
import {CourseSearchModule} from './course-search';
import {CoursesStateService} from '../shared/courses-state.service';

@NgModule({
    declarations: [CoursesToolboxComponent],
    imports: [CourseSearchModule],
    providers: [CoursesStateService],
    exports: [CoursesToolboxComponent]
})
export class CoursesToolboxModule {

}
