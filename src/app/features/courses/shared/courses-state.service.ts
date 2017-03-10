import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ICourse} from './course.model';
import {ACTIONS} from './course-actions';

export interface ICourseState {
    action: string;
    course?: ICourse;
    query?: string;
}

@Injectable()
export class CoursesStateService {
    private courseStateSource = new Subject<ICourseState>();

    public courseState$ = this.courseStateSource.asObservable();

    public removeCourse(course: ICourse) {
        this.courseStateSource.next({action: ACTIONS.REMOVE, course});
    }

    public editCourse(course: ICourse) {
        this.courseStateSource.next({action: ACTIONS.EDIT, course});
    }

    public searchCourses(query: string) {
        this.courseStateSource.next({action: ACTIONS.SEARCH, query});
    }
}
