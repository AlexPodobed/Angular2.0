import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseItemComponent } from './course-item.component';
import { SharedCourseModule } from '../../shared';
import { PipesModule } from '../../../../core/pipes';

@NgModule({
    declarations: [CourseItemComponent],
    imports: [
        CommonModule,
        PipesModule,
        RouterModule,
        SharedCourseModule
    ],
    exports: [CourseItemComponent]
})
export class CourseItemModule {

}
