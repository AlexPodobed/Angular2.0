import { NgModule } from '@angular/core';

import { CoursesContainerModule } from './courses-container';
import { CourseDetailsModule } from './course-details';
import { CourseFormModule } from './course-form';
import { CourseNewContainerModule } from './course-new-container';
import { CourseUpdateContainerModule } from './course-update-container';

import { SharedCourseModule } from './shared';
import { LoaderBlockService } from '../../core/services';
import { SharedModule } from '../../shared';

@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        SharedCourseModule,
        CoursesContainerModule,
        CourseDetailsModule,
        // CourseFormModule,
        CourseNewContainerModule,
        CourseUpdateContainerModule
    ],
    providers: [
        LoaderBlockService
    ],
    exports: []
})

export class CoursesModule {
}
