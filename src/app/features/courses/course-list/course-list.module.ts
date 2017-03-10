import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseListComponent} from './course-list.component';
import {CourseItemModule} from './course-item';

@NgModule({
    declarations: [CourseListComponent],
    imports: [CommonModule, CourseItemModule],
    exports: [CourseListComponent]
})
export class CourseListModule {

}
