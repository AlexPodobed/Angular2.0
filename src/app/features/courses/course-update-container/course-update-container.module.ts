import { NgModule } from '@angular/core';
import { CourseUpdateContainerComponent } from './course-update-container.component';
import { CourseFormModule } from '../course-form';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CourseUpdateContainerComponent],
    imports: [CommonModule, CourseFormModule],
    exports: [CourseUpdateContainerComponent]
})
export class CourseUpdateContainerModule {

}
