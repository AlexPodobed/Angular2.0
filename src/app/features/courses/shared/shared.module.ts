import { NgModule } from '@angular/core';

import { CourseService } from './services/course.service';
import { CourseModalsModule } from './modals';
import { ColorizeByDateDirective } from './directives';

@NgModule({
    declarations: [
        ColorizeByDateDirective
    ],
    providers: [CourseService],
    imports: [CourseModalsModule],
    exports: [
        CourseModalsModule,
        ColorizeByDateDirective
    ]
})
export class SharedCourseModule {
}
