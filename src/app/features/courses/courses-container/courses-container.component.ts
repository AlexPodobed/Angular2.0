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
}
