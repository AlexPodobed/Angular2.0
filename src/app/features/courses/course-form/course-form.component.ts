import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'course-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-form.component.html'
})
export class CourseFormComponent {

    cancel(): void {
        console.log('canceled');
    }

    save(e): void {
        e.preventDefault();

        console.log('saved')
    }
}
