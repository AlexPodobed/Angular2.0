import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {ICourse} from '../shared/course.model';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    @Input('items') public courseItems: ICourse[];

    // todo: decide where to place REMOVE / EDIT methods implementation (here or in cource-container.component)

    ngOnInit() {
        console.log(this.courseItems);
    }
}
