import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseListComponent} from './course-list.component';
import {CourseItemModule} from './course-item';
import {CoursesStateService} from '../shared/courses-state.service';

@NgModule({
    declarations: [CourseListComponent],
    imports: [CommonModule, CourseItemModule],
    providers: [CoursesStateService],
    exports: [CourseListComponent]
})
export class CourseListModule {

}
