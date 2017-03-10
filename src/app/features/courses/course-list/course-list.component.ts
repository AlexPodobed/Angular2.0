import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from '../shared/course.model';

import {CoursesStateService} from '../shared';

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    @Input() public courseItems: ICourse[];

    constructor(private coursesStateService: CoursesStateService) {
    }

    public ngOnInit() {
        console.log(this.courseItems);
    }

    public remove(course: ICourse) {
        this.coursesStateService.removeCourse(course);
    }

    public edit(course: ICourse) {
        this.coursesStateService.editCourse(course);
    }
}
