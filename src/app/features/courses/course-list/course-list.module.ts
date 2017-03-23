import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from './course-item';
import { NoResultsComponent } from '../shared';

@NgModule({
    declarations: [CourseListComponent, NoResultsComponent],
    imports: [CommonModule, CourseItemModule],
    providers: [],
    exports: [CourseListComponent]
})
export class CourseListModule {

}
