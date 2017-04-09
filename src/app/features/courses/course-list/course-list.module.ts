import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from './course-item';
import { SharedCourseModule } from '../shared';
import { PipesModule } from '../../../core/pipes';

@NgModule({
    declarations: [CourseListComponent],
    imports: [
        CommonModule,
        SharedCourseModule,
        PipesModule,
        CourseItemModule],
    providers: [],
    exports: [CourseListComponent]
})
export class CourseListModule {

}
