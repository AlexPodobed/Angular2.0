import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseItemComponent } from './course-item.component';
import {SharedCourseModule} from '../../shared';
import {PipesModule} from '../../../../core/pipes';

@NgModule({
    declarations: [CourseItemComponent],
    imports: [
        CommonModule,
        PipesModule,
        SharedCourseModule
    ],
    exports: [CourseItemComponent]
})
export class CourseItemModule {

}
