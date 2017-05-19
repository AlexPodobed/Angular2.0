import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'course-new-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-new-container.component.html'
})
export class CourseNewContainerComponent {
}
