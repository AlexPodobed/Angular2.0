import { NgModule } from '@angular/core';
import { CourseSearchComponent } from './course-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CourseSearchComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [CourseSearchComponent]
})
export class CourseSearchModule {

}
