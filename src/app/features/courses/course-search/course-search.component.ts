import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'course-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./course-search.component.scss')],
    templateUrl: './course-search.component.html'
})
export class CourseSearchComponent {
    @Output() public search = new EventEmitter<string>();

    get searchQuery(): string {
        return this._searchQuery;
    }

    set searchQuery(value: string) {
        this._searchQuery = value;
        this.search.emit(value);
    }

    private _searchQuery: string = '';

    public findCourse(): void {
        this.search.emit(this.searchQuery);
    }

}
