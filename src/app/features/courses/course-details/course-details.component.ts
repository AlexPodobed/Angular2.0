import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'course-details',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-details.component.html'
})
export class CourseDetailsComponent {
}
