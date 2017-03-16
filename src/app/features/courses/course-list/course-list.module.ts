import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from './course-item';
import { CoursesStateService, NoResultsComponent } from '../shared';

@NgModule({
    declarations: [CourseListComponent, NoResultsComponent],
    imports: [CommonModule, CourseItemModule],
    providers: [CoursesStateService],
    exports: [CourseListComponent]
})
export class CourseListModule {

}
