import {
    Component, Input, OnInit, OnChanges, SimpleChanges,
    ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { isEmpty } from 'lodash';

import { CourseService, ConfirmModalModalComponent, ICoursesRequest, ICoursePagingResponse, ICourse } from '../shared';
import { LoaderBlockService } from '../../../core/services';
import { fetchListAction, selectCoursePageAction } from '../courses.actions';

@Component({
    selector: 'course-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit, OnChanges, OnDestroy {
    private subscriptions: Subscription[] = [];
    private options: ICoursesRequest;
    private courseStore;

    @Input() public query: string;

    public courses: ICourse[];
    public isEmpty: boolean;

    constructor(private courseService: CourseService,
                private cd: ChangeDetectorRef,
                private loaderBlockService: LoaderBlockService,
                private modalService: NgbModal,
                private store: Store<any>) {

        this.courseStore = this.store.select('courses');

        this.loading$ = this.courseStore.map(data => data['loading']);
        this.courses$ = this.courseStore.map(data => data['items']);
        this.total$ = this.courseStore.map(data => data['total']);
        this.size$ = this.courseStore.map(data => data['size']);
        this.page$ = this.courseStore.map(data => data['page']);

        this.subscriptions.push(
            this.loading$.subscribe((isLoading) => this.loaderBlockService.toggleLoader(isLoading)),
            this.page$.subscribe((num) => {
                this.page = num;
            })
        )
    }

    public ngOnInit() {

        // this.options = {
        //     query: this.query,
        //     page: 0,
        //     size: 3
        // };
        // this.fetchCourses();

        this.courseStore.dispatch(fetchListAction());
    }

    public ngOnDestroy(): void {
        this.subscriptions.map((sub) => sub.unsubscribe());
    }

    public ngOnChanges(changes: SimpleChanges) {
        let queryChange = changes['query'];

        if (queryChange && !queryChange.isFirstChange()) {
            this.options.query = queryChange.currentValue;
            // this.fetchCourses();
        }
    }

    // public fetchCourses() {
    //     // this.loaderBlockService.show();
    //     this.subscriptions.push(
    //         this.courseService.getAll(this.options)
    //             .do((res) => this.onCoursesFetched(res))
    //             .subscribe()
    //     );
    // }

    public fetchMore(page: number) {
        // this.options.page = page;
        // console.log(page);
        this.courseStore.dispatch(selectCoursePageAction(page));
        this.courseStore.dispatch(fetchListAction())
        // this.fetchCourses();
    }

    //
    // public onCoursesFetched(res: ICoursePagingResponse): void {
    //     this.options.total = res.total;
    //     this.courses = res.items;
    //     this.isEmpty = isEmpty(res.items);
    //     // this.loaderBlockService.hide();
    //     this.cd.markForCheck();
    // }

    public onItemRemoved(): void {
        this.loaderBlockService.hide();
        this.fetchCourses();
    }

    public remove(course: ICourse): void {
        this.subscriptions.push(
            this.openConfirmModal(course)
                .do(() => this.loaderBlockService.show())
                .switchMapTo(this.courseService.remove(course.id))
                .do(() => this.onItemRemoved())
                .catch((err) => Observable.empty())
                .subscribe()
        );
    }

    public update(course: ICourse): void {
        this.courseService.update(course);
    }

    private openConfirmModal(course: ICourse) {
        const modalRef = this.modalService.open(ConfirmModalModalComponent);
        modalRef.componentInstance.course = course;
        return Observable.fromPromise(modalRef.result);
    }
}
