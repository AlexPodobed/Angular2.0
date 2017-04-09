import { NgModule } from '@angular/core';

import { CoursesContainerModule } from './courses-container';
import { CourseDetailsModule } from './course-details';
import { CourseFormModule } from './course-form';

import { SharedCourseModule } from './shared';
import { LoaderBlockService } from '../../core/services';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        SharedCourseModule,
        CoursesContainerModule,
        CourseDetailsModule,
        CourseFormModule,
    ],
    providers: [
        LoaderBlockService
    ],
    exports: []
})

export class CoursesModule {
}
