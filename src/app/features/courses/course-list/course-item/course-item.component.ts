import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../shared/course.model';

@Component({
    selector: 'course-item',
    styles: [require('./course-item.component.scss')],
    templateUrl: './course-item.component.html'
})
export class CourseItemComponent {
    @Input() public course: ICourse;
    @Output() public onRemoved = new EventEmitter<ICourse>();
    @Output() public onUpdated = new EventEmitter<ICourse>();

    public remove(): void {
        this.onRemoved.emit(this.course);
    }

    public update(): void {
        this.onUpdated.emit(this.course);
    }
}
