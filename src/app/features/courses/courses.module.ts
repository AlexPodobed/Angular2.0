import { NgModule } from '@angular/core';

import { CoursesContainerModule } from './courses-container';
import { CourseDetailsModule } from './course-details';
import { CourseFormModule } from './course-form';

import { CourseService } from './shared';
import { LoaderBlockService } from '../../core/services';

@NgModule({
    declarations: [],
    imports: [
        CoursesContainerModule,
        CourseDetailsModule,
        CourseFormModule
    ],
    providers: [
        CourseService,
        LoaderBlockService
    ],
    exports: []
})

export class CoursesModule {
}
