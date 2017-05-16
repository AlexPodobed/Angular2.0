import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../shared';

@Component({
    selector: 'course-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-list.component.html'
})
export class CourseListComponent {
    @Input() public courses;
    @Output() public onRemove = new EventEmitter<ICourse>();
}
