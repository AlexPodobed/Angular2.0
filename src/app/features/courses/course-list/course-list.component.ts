import {
    Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { ICourse } from '../shared/course.model';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { CourseService, ConfirmModalModalComponent } from '../shared';

@Component({
    selector: 'course-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit, OnChanges {
    @Input() public query: string;

    public courseList: ICourse[];

    constructor(private courseService: CourseService,
                private ref: ChangeDetectorRef,
                private modalService: NgbModal) {
    }

    public ngOnInit() {
        this.courseList = [];
        this.fetchCourses();
    }

    public ngOnChanges(changes: SimpleChanges) {
        let queryChange = changes['query'];

        if (queryChange && !queryChange.isFirstChange()) {
            this.searchCourse(queryChange.currentValue);
        }
    }

    public fetchCourses(): void {
        this.courseService.getAll()
            .then(this.setCourseList.bind(this));
    }

    private searchCourse(query: string): void {
        this.courseService.findByQuery(query)
            .then(this.setCourseList.bind(this));
    }

    public setCourseList(courses: ICourse[]): void {
        this.courseList = courses;
        this.ref.markForCheck();
    }

    public remove(course: ICourse): void {
        this.openConfirmModal(course)
            .then(() => this.courseService.remove(course.id))
            .then(() => this.courseList.splice(this.courseList.indexOf(course), 1))
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
