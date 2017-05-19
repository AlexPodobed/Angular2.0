import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as actions from '../state/courses.actions';
import { LoaderBlockService } from '../../../core/services';
import { CourseEffects } from '../state/courses.effects';
import { ICourse } from '../shared';

@Component({
    selector: 'courses-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./courses-container.scss')],
    templateUrl: './courses-container.component.html'
})
export class CoursesContainerComponent implements OnDestroy, OnInit {
    private subscriptions: Subscription[] = [];

    public loading$: Observable<boolean>;
    public removeSuccess$: Observable<any>;
    public query$: Observable<string>;
    public courses$;

    constructor(private store: Store<any>,
                private courseEffects: CourseEffects,
                private loaderBlockService: LoaderBlockService) {
        this.courses$ = this.store.select('courses');
        this.loading$ = this.courses$.map((data) => data['loading']);
        this.query$ = this.courses$.map((data) => data['query']);
        this.removeSuccess$ = this.courseEffects.removeCourse$.filter(({ type }) => type === actions.REMOVE_COURSE_SUCCESS);

        this.subscriptions.push(
            this.loading$.subscribe((loading) => this.loaderBlockService.toggleLoader(loading)),
            this.removeSuccess$.subscribe(() => this.fetchCourses())
        );
    }

    public ngOnInit(): void {
        this.fetchCourses();
    }

    public ngOnDestroy(): void {
        this.subscriptions.map((sub) => sub.unsubscribe());
    }

    public onSearch(query: string) {
        this.courses$.dispatch(actions.searchQuesryAction(query));
    }

    public fetchCourses(): void {
        this.courses$.dispatch(actions.fetchListAction());
    }

    public fetchMoreCourses(page: number) {
        this.courses$.dispatch(actions.selectCoursePageAction(page));
    }

    public remove(course: ICourse): void {
        this.courses$.dispatch(actions.openRemoveCoursePopupAction(course));
    }
}
