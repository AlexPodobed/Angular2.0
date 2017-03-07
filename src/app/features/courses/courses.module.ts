import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {CourseItemComponent, CourseListComponent} from './course-list';
import {CoursesContainerComponent} from './courses-container';
import {CourseDetailsComponent} from './course-details';
import {CourseFormComponent} from './course-form';
import {CourseSearchComponent} from './course-search';

import {CourseService} from './shared/course.service';

const COMPONENTS = [
    CoursesContainerComponent,
    CourseDetailsComponent,
    CourseSearchComponent,
    CourseFormComponent,
    CourseListComponent,
    CourseItemComponent
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    providers: [CourseService],
    exports: COMPONENTS
})

export class CoursesModule {
}
