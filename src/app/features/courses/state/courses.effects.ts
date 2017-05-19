import { Effect, Actions, toPayload } from '@ngrx/effects';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

import * as actions from './courses.actions';
import { CoursesState } from './courses-state.model';
import { ConfirmModalModalComponent, ICourse, CourseService, ICoursesRequest, ICoursePagingResponse } from '../shared';

@Injectable()
export class CourseEffects {
    private openConfirmModal(course: ICourse) {
        const modalRef = this.modalService.open(ConfirmModalModalComponent);
        modalRef.componentInstance.course = course;
        return Observable.fromPromise(modalRef.result)
            .catch(() => Observable.empty());
    }

    private getPaginationMetaData(coursesState: CoursesState): ICoursesRequest {
        return {
            page: coursesState.page,
            size: coursesState.size,
            query: coursesState.query
        }
    }

    constructor(private action$: Actions,
                private store$: Store<any>,
                private courseService: CourseService,
                private modalService: NgbModal) {
    }

    @Effect() public loadCourses$ = this.action$
        .ofType(actions.LOAD_COURSES)
        .withLatestFrom(this.store$.select('courses'))
        .map(([action, coursesState]: [any, CoursesState]) => this.getPaginationMetaData(coursesState))
        .switchMap((data: ICoursesRequest) => this.courseService.getAll(data)
            .map((res: ICoursePagingResponse) => actions.fetchListSuccessAction(res))
            .catch((err) => Observable.of(actions.fetchListErrorAction(err)))
        );

    @Effect() public removeCourse$ = this.action$
        .ofType(actions.REMOVE_COURSE)
        .map(toPayload)
        .switchMap((course: ICourse) => this.courseService.remove(course.id)
            .map((res) => actions.removeCourseSuccessAction())
            .catch((err) => Observable.of(actions.removeCourseErrorAction(err)))
        )
        .share();

    @Effect() public openPopup = this.action$
        .ofType(actions.REMOVE_COURSE_POPUP)
        .map(toPayload)
        .switchMap((course: ICourse) => this.openConfirmModal(course)
            .map((c: ICourse) => actions.removeCourseAction(c))
            .catch(() => Observable.empty())
        );

    @Effect() public paginate$ = this.action$
        .ofType(actions.SELECT_PAGE)
        .switchMap(() => Observable.of(actions.fetchListAction()));

    @Effect() public search$ = this.action$
        .ofType(actions.SEARCH_COURSE)
        .switchMap(() => Observable.of(actions.fetchListAction()));

    @Effect() public save$ = this.action$
        .ofType(actions.SAVE_COURSE)
        .map(toPayload)
        .switchMap(({ model, isNew }: { model: ICourse, isNew: boolean }) =>
            (isNew ? this.courseService.save(model) : this.courseService.update(model))
                .map((course: ICourse) => actions.saveCourseSuccessAction(course))
                .catch((err) => Observable.of(actions.saveCourseFailAction(err)))
        )
        .share();

    @Effect() public get$ = this.action$
        .ofType(actions.GET_COURSE)
        .map(toPayload)
        .withLatestFrom(this.store$.select('courses'))
        .switchMap(([action, state]: [any, CoursesState]) => {
            let cached = _.find(state.items, { id: action.id });
            return cached ? Observable.of({ ...cached }).delay(0) : this.courseService.get(action.id);
        })
        .switchMap((course: ICourse) => Observable.of(actions.getCourseActionSuccess(course)))
        .catch((err) => Observable.of(actions.getCourseActionFail(err)))
        .share();
}
