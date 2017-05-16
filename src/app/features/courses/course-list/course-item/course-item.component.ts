import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourse } from '../../shared/course.model';

@Component({
    selector: 'course-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./course-item.component.scss')],
    templateUrl: './course-item.component.html'
})
export class CourseItemComponent {
    @Input() public course: ICourse;
    @Output() public onRemoved = new EventEmitter<ICourse>();

    public remove(): void {
        this.onRemoved.emit(this.course);
    }

    public update(): void {
        console.log('will be navigated to appropriate page');
    }
}
