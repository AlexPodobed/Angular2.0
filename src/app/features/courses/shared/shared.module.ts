import { NgModule } from '@angular/core';

import { NoResultsComponent } from './no-results.component';
import { CourseService } from './services/course.service';
import { CourseModalsModule } from './modals';
import { ColorizeByDateDirective } from './directives';

@NgModule({
    declarations: [
        NoResultsComponent,
        ColorizeByDateDirective
    ],
    providers: [CourseService],
    imports: [CourseModalsModule],
    exports: [
        CourseModalsModule,
        NoResultsComponent,
        ColorizeByDateDirective
    ]
})
export class SharedModule {
    constructor() {
        console.log('-*-****** SharedModule initizlied');
    }
}
