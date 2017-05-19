import { NgModule } from '@angular/core';
import { CourseFormComponent } from './course-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [CourseFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [CourseFormComponent]
})
export class CourseFormModule {

}
