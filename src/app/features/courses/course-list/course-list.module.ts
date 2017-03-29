import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from './course-item';
import { SharedModule } from '../shared';

@NgModule({
    declarations: [CourseListComponent],
    imports: [
        CommonModule,
        SharedModule,
        CourseItemModule],
    providers: [],
    exports: [CourseListComponent]
})
export class CourseListModule {

}
