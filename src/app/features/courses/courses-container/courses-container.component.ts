import {Component} from '@angular/core';
import {CourseService} from '../shared/course.service';
import {ICourse} from '../shared/course.model';

@Component({
    selector: 'courses-container',
    styles: [require('./courses-container.scss')],
    templateUrl: './courses-container.component.html'
})
export class CoursesContainerComponent {
    public courses: ICourse[];

    constructor(private courseService: CourseService) {
        this.courses = courseService.getCourses();
    }

    public removeCourse({id}): void {
        console.log(`course ${id} will be removed`);
    }

    public editCourse({course}: { course: ICourse }): void {
        console.log(`course ${course.title} will be updated`);
    }
}
