import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CourseListModule } from '../course-list';
import { CourseSearchModule } from '../course-search';
import { CoursesContainerComponent } from './courses-container.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [CoursesContainerComponent],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        CourseListModule,
        CourseSearchModule
    ],
    providers: [],
    exports: [CoursesContainerComponent]
})
export class CoursesContainerModule {

}
