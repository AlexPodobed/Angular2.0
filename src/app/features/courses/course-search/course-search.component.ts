import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoaderBlockService } from '../../../core/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'course-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./course-search.component.scss')],
    templateUrl: './course-search.component.html'
})
export class CourseSearchComponent implements OnInit {
    @Input() public active: string;
    @Output() public search = new EventEmitter<string>();

    public searchQuery: string = '';
    public loader$: Observable<boolean>;

    constructor(private loaderBlockService: LoaderBlockService) {
        this.loader$ = loaderBlockService.loaderStatus$;
    }

    ngOnInit(): void {
        this.searchQuery = this.active;
    }

    public findCourse(): void {
        this.search.emit(this.searchQuery);
    }

}
