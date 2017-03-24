import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { LoaderBlockService } from '../../../core/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'course-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./course-search.component.scss')],
    templateUrl: './course-search.component.html'
})
export class CourseSearchComponent {
    private _searchQuery: string = '';
    public loader$: Observable<boolean>;

    @Output() public search = new EventEmitter<string>();

    constructor(private loaderBlockService: LoaderBlockService) {
        this.loader$ = loaderBlockService.loaderStatus$;
    }

    get searchQuery(): string {
        return this._searchQuery;
    }

    set searchQuery(value: string) {
        this._searchQuery = value;
        this.search.emit(value);
    }

    public findCourse(): void {
        this.search.emit(this.searchQuery);
    }

}
