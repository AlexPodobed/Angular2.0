import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'course-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-form.component.html'
})
export class CourseFormComponent {
}
