import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from './course-item';
import { SharedCourseModule } from '../shared';

import { PipesModule } from '../../../core/pipes';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [CourseListComponent],
    imports: [
        SharedModule,
        CommonModule,
        SharedCourseModule,
        PipesModule,
        CourseItemModule],
    providers: [],
    exports: [CourseListComponent]
})
export class CourseListModule {

}
