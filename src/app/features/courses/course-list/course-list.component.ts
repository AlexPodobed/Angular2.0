import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {ICourse} from '../shared/course.model';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    @Input('items') public courseItems: ICourse[];
    @Output() public onRemove = new EventEmitter();
    @Output() public onEdit = new EventEmitter();

    ngOnInit() {
        console.log(this.courseItems);
    }
}
