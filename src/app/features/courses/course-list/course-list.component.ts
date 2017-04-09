import {
    Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';

import { ICourse } from '../shared/course.model';
import { CourseService, ConfirmModalModalComponent } from '../shared';
import { LoaderBlockService } from '../../../core/services';
import { FilterByPipe } from '../../../core/pipes';

import { isEmpty } from 'lodash';

@Component({
    selector: 'course-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit, OnChanges {
    private searchSource: Subject<string>;

    @Input() public query: string;

    public filteredCourses$: Observable<ICourse[]>;
    public courses$: Observable<ICourse[]>;
    public search$: Observable<string>;
    public isEmpty: boolean;

    constructor(private courseService: CourseService,
                private loaderBlockService: LoaderBlockService,
                private filterByPipe: FilterByPipe,
                private modalService: NgbModal) {
        this.searchSource = new Subject();
        this.search$ = this.searchSource.asObservable().debounceTime(100).startWith('');
    }

    public ngOnInit() {
        this.loaderBlockService.show();
        this.courses$ = this.courseService.getAll();

        this.filteredCourses$ = this.courses$
            .combineLatest(this.search$,
                (courses: ICourse[], query: string) =>
                    this.filterByPipe.transform(courses, { title: query }
                )
            )
            .do((courses: ICourse[]) => {
                this.isEmpty = isEmpty(courses);
                this.loaderBlockService.hide();
            });
    }

    public ngOnChanges(changes: SimpleChanges) {
        let queryChange = changes['query'];

        if (queryChange && !queryChange.isFirstChange()) {
            this.searchSource.next(queryChange.currentValue);
        }
    }

    public remove(course: ICourse): void {
        this.openConfirmModal(course)
            .then(() => this.courseService.remove(course.id))
            .then(() => this.loaderBlockService.show())
            .catch(() => console.log('catch rejected stage'));
    }

    public update(course: ICourse): void {
        this.courseService.update(course);
    }

    private openConfirmModal(course: ICourse) {
        const modalRef = this.modalService.open(ConfirmModalModalComponent);
        modalRef.componentInstance.course = course;

        return modalRef.result;
    }
}
