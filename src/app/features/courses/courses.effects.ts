import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import {
    LOAD_COURSES,
    fetchListSuccessAction,
    fetchListErrorAction
} from './courses.actions';
import { CourseService } from './shared/services/course.service';
import { Store } from "@ngrx/store";

@Injectable()
export class CourseEffects {
    constructor(private action$: Actions, private store$: Store<any>, private courseService: CourseService) {
    }

    @Effect() loadCourses$ = this.action$
        .ofType(LOAD_COURSES)
        .withLatestFrom(this.store$.select('courses'))
        .map(([action, store]) => ({ page: store['page'], size: store['size'] }))
        .switchMap((data) => this.courseService.getAllSimple(data)
            .map((res) => fetchListSuccessAction(res))
            .catch(err => Observable.of(fetchListErrorAction(err)))
        );
}
