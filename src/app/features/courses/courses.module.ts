import { NgModule } from '@angular/core';

import { CoursesContainerModule } from './courses-container';
import { CourseDetailsModule } from './course-details';
import { CourseFormModule } from './course-form';

import { SharedModule } from './shared';
import { LoaderBlockService } from '../../core/services';

@NgModule({
    declarations: [],
    imports: [
        SharedModule,
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
