import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ICourse} from '../../shared/course.model';

@Component({
    selector: 'course-item',
    styles: [require('./course-item.component.scss')],
    templateUrl: './course-item.component.html'
})
export class CourseItemComponent {
    @Input('item') public course: ICourse;
    @Output('onRemoved') public onRemoved = new EventEmitter();
    @Output('onEdit') public onEdit = new EventEmitter();

    remove() {
        this.onRemoved.emit({
            id: this.course.id
        })
    }

    edit() {
        this.onEdit.emit({
            course: this.course
        })
    }
}
