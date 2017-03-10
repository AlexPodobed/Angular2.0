import {Component} from '@angular/core';
import {CoursesStateService} from '../shared/courses-state.service';

@Component({
    selector: 'courses-toolbox',
    styles: [require('./courses-toolbox.scss')],
    templateUrl: './courses-toolbox.component.html'
})
export class CoursesToolboxComponent {
    constructor(private coursesStateService: CoursesStateService) {}

    public search(query: string) {
        this.coursesStateService.searchCourses(query);
    }
}
