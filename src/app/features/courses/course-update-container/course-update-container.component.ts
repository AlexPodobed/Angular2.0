import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { LoaderBlockService } from '../../../core/services';
import { CourseEffects } from '../state/courses.effects';
import * as actions from '../state/courses.actions';
import { Action } from '@ngrx/store';
import { ICourse } from '../shared/course.model';

@Component({
    selector: 'course-update-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-update-container.component.html'
})
export class CourseUpdateContainerComponent implements OnDestroy {
    private subscriptions: Subscription[] = [];
    public coursesStore$;
    public getSuccess$;
    public loading$;
    public currentCourse: ICourse;

    constructor(private loaderBlockService: LoaderBlockService,
                private cd: ChangeDetectorRef,
                private route: ActivatedRoute,
                private courseEffects: CourseEffects,
                private store: Store<any>) {

        this.coursesStore$ = this.store.select('courses');
        this.loading$ = this.coursesStore$.map((data) => data['loading']);
        this.getSuccess$ = this.courseEffects.get$
            .filter((action: Action) => action.type === actions.GET_COURSE_SUCCESS)
            .map((action: Action) => action.payload);

        this.subscriptions = [
            this.loading$.subscribe((loading) => this.loaderBlockService.toggleLoader(loading)),
            this.route.params.subscribe((data) => {
                let id = data['id'];
                this.getCurrentCourse(id);
            }),
            this.getSuccess$.subscribe((course: ICourse) => {
                this.currentCourse = course;
                this.cd.markForCheck();
            })
        ]
    }

    ngOnDestroy(): void {
        this.subscriptions.map((sub) => sub.unsubscribe());
    }

    public getCurrentCourse(id: string): void {
        this.coursesStore$.dispatch(actions.getCourseAction(id));
    }
}
