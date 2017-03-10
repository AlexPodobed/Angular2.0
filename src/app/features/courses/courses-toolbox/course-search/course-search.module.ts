import {NgModule} from '@angular/core';
import {CourseSearchComponent} from './course-search.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
    declarations: [CourseSearchComponent],
    imports: [
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [CourseSearchComponent]
})
export class CourseSearchModule {

}
