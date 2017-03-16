import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService, CoursesStateService, ICourseState, ACTIONS } from '../shared';
import { ICourse } from '../shared/course.model';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'courses-container',
    styles: [require('./courses-container.scss')],
    templateUrl: './courses-container.component.html'
})
export class CoursesContainerComponent implements OnInit, OnDestroy {
    public courses: ICourse[];
    public subscription: Subscription;

    constructor(private courseService: CourseService,
                private coursesStateService: CoursesStateService) {
        this.courses = [];
    }

    public ngOnInit() {
        this.courses = this.courseService.getAll();
        this.subscription = this.coursesStateService.courseState$.subscribe(
            this.onStateChange.bind(this)
        );
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private onStateChange(state: ICourseState) {
        switch (state.action) {
            case ACTIONS.REMOVE:
                this.removeCourse(state.course);
                break;
            case ACTIONS.EDIT:
                this.editCourse(state.course);
                break;
            case ACTIONS.SEARCH:
                this.searchCourse(state.query);
                break;
            default:
                console.log(`unhandled action: ${state.action}`);
        }
    }

    private removeCourse(course: ICourse): void {
        this.courseService
            .remove(course.id)
            .then(() => this.courses.splice(this.courses.indexOf(course), 1));
    }

    private editCourse(course: ICourse): void {
        this.courseService.update(course);
    }

    private searchCourse(query: string): void {
        this.courseService
            .findByQuery(query)
            .then((courses) => this.courses = courses);
    }
}
