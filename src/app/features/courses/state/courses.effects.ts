import { Effect, Actions, toPayload } from '@ngrx/effects';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import {
    LOAD_COURSES, REMOVE_COURSE, REMOVE_COURSE_POPUP, SELECT_PAGE, SEARCH_COURSE,
    fetchListSuccessAction,
    fetchListErrorAction,
    removeCourseSuccessAction,
    removeCourseErrorAction,
    removeCourseAction,
    fetchListAction
} from './courses.actions';
import { ConfirmModalModalComponent, ICourse, CourseService } from '../shared';

@Injectable()
export class CourseEffects {
    private openConfirmModal(course: ICourse) {
        const modalRef = this.modalService.open(ConfirmModalModalComponent);
        modalRef.componentInstance.course = course;
        return Observable.fromPromise(modalRef.result)
            .catch(() => Observable.empty());
    }

    constructor(private action$: Actions,
                private store$: Store<any>,
                private courseService: CourseService,
                private modalService: NgbModal) {
    }

    @Effect() public loadCourses$ = this.action$
        .ofType(LOAD_COURSES)
        .withLatestFrom(this.store$.select('courses'))
        .map(([action, store]) => ({ page: store['page'], size: store['size'], query: store['query'] }))
        .switchMap((data) => this.courseService.getAll(data)
            .map((res) => fetchListSuccessAction(res))
            .catch((err) => Observable.of(fetchListErrorAction(err)))
        );

    @Effect() public removeCourse$ = this.action$
        .ofType(REMOVE_COURSE)
        .map(toPayload)
        .switchMap((course: ICourse) =>
            this.courseService.remove(course.id)
                .map((res) => removeCourseSuccessAction())
                .catch((err) => Observable.of(removeCourseErrorAction(err)))
        )
        .share();

    @Effect() public openPopup = this.action$
        .ofType(REMOVE_COURSE_POPUP)
        .map(toPayload)
        .switchMap((course: ICourse) => this.openConfirmModal(course)
            .map((c: ICourse) => removeCourseAction(c))
            .catch(() => Observable.empty())
        );

    @Effect() public paginate$ = this.action$
        .ofType(SELECT_PAGE)
        .switchMap(() => Observable.of(fetchListAction()));

    @Effect() public search$ = this.action$
        .ofType(SEARCH_COURSE)
        .switchMap(() => Observable.of(fetchListAction()));
}
