import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../shared/course.model';

import {CoursesStateService} from '../shared';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    @Input('items') public courseItems: ICourse[];

    constructor(private coursesStateService: CoursesStateService) {
    }

    ngOnInit() {
        console.log(this.courseItems);
    }

    remove(course: ICourse) {
        this.coursesStateService.removeCourse(course);
    }

    edit(course: ICourse) {
        this.coursesStateService.editCourse(course);
    }
}
