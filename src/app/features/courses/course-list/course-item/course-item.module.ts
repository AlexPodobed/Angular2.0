import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseItemComponent } from './course-item.component';
import {SharedModule} from '../../shared';

@NgModule({
    declarations: [CourseItemComponent],
    imports: [SharedModule, CommonModule],
    exports: [CourseItemComponent]
})
export class CourseItemModule {

}
