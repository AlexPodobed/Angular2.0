import { NgModule } from '@angular/core';
import { CourseFormComponent } from './course-form.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    declarations: [CourseFormComponent],
    imports: [SharedModule],
    exports: [CourseFormComponent]
})
export class CourseFormModule {

}
