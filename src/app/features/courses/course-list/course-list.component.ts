import {
    Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { ICourse } from '../shared/course.model';
import { CourseService, ConfirmModalModalComponent } from '../shared';
import { LoaderBlockService } from '../../../core/services';

import { isEmpty } from 'lodash';

@Component({
    selector: 'course-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit, OnChanges {
    @Input() public query: string;

    public courses$: Observable<ICourse[]>;
    public isEmpty: boolean;

    constructor(private courseService: CourseService,
                private loaderBlockService: LoaderBlockService,
                private modalService: NgbModal) {
    }

    public ngOnInit() {
        this.loaderBlockService.show();
        this.courses$ = this.courseService.getAll()
            .do((courses: ICourse[]) => {
                this.isEmpty = isEmpty(courses);
                this.loaderBlockService.hide();
            });
    }

    public ngOnChanges(changes: SimpleChanges) {
        let queryChange = changes['query'];

        if (queryChange && !queryChange.isFirstChange()) {
            this.query = queryChange.currentValue;
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
