import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseItemComponent } from './course-item.component';
import {SharedModule} from '../../shared';
import {PipesModule} from '../../../../core/pipes';

@NgModule({
    declarations: [CourseItemComponent],
    imports: [
        CommonModule,
        PipesModule,
        SharedModule
    ],
    exports: [CourseItemComponent]
})
export class CourseItemModule {

}
