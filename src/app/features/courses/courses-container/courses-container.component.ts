import {Component, OnInit} from '@angular/core';
import {CourseService} from '../shared/course.service';
import {ICourse} from '../shared/course.model';
import {findIndex} from 'lodash';

@Component({
    selector: 'courses-container',
    styles: [require('./courses-container.scss')],
    templateUrl: './courses-container.component.html'
})
export class CoursesContainerComponent implements OnInit {
    public courses: ICourse[];

    constructor(private courseService: CourseService) {
        this.courses = [];
    }

    ngOnInit() {
        this.courses = this.courseService.getCourses();
    }

    public removeCourse({id}): void {
        this.courseService.remove(id).then(() => {
            let index: number = findIndex(this.courses, {id});
            this.courses.splice(index, 1);
        })
    }

    public editCourse({course}: { course: ICourse }): void {
        this.courseService.edit(course);
    }

    public searchCourse({query}: { query: string }): void {
        this.courseService.findByQuery(query);
    }
}
