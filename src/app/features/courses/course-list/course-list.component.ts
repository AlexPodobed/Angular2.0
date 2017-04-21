import {
    Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';

import { ICourse } from '../shared/course.model';
import { CourseService, ConfirmModalModalComponent, ICoursesRequest } from '../shared';
import { LoaderBlockService } from '../../../core/services';

import { isEmpty } from 'lodash';

@Component({
    selector: 'course-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit, OnChanges, OnDestroy {
    private removeSubscription: Subscription;
    private options: ICoursesRequest;

    @Input() public query: string;

    public courses$: Observable<ICourse[]>;
    public isEmpty: boolean;

    constructor(private courseService: CourseService,
                private cd: ChangeDetectorRef,
                private loaderBlockService: LoaderBlockService,
                private modalService: NgbModal) {
    }

    public ngOnInit() {
        this.fetchCourses();
    }

    public ngOnDestroy(): void {
        this.removeSubscription && this.removeSubscription.unsubscribe();
    }

    public ngOnChanges(changes: SimpleChanges) {
        let queryChange = changes['query'];

        if (queryChange && !queryChange.isFirstChange()) {
            this.query = queryChange.currentValue;
            this.fetchCourses();
        }
    }

    public fetchCourses() {
        this.options = {
            query: this.query,
            page: 0,
            size: 5
        };
        this.loaderBlockService.show();
        this.courses$ = this.courseService.getAll(this.options)
            .do((courses: ICourse[]) => this.onCoursesFetched(courses));
    }

    public onCoursesFetched(courses: ICourse[]): void {
        this.isEmpty = isEmpty(courses);
        this.loaderBlockService.hide();
    }

    public onItemRemoved(): void {
        this.loaderBlockService.hide();
        this.fetchCourses();
        this.cd.markForCheck()
    }

    public remove(course: ICourse): void {
        this.removeSubscription = this.openConfirmModal(course)
            .do(() => this.loaderBlockService.show())
            .switchMapTo(this.courseService.remove(course.id))
            .do(() => this.onItemRemoved())
            .catch((err) => Observable.empty())
            .subscribe();
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
