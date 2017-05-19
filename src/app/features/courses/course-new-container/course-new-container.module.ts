import { NgModule } from '@angular/core';
import { CourseNewContainerComponent } from './course-new-container.component';
import { CourseFormModule } from '../course-form';
@NgModule({
    declarations: [CourseNewContainerComponent],
    imports: [CourseFormModule],
    exports: [CourseNewContainerComponent]
})
export class CourseNewContainerModule {

}
