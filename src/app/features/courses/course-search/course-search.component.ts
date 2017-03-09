import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'course-search',
    styles: [require('./course-search.component.scss')],
    templateUrl: './course-search.component.html'
})
export class CourseSearchComponent {
    @Output() public onSearch = new EventEmitter();
    public searchQuery: string;

    constructor() {
        this.searchQuery = '';
    }

    public findCourse(): void {
        this.onSearch.emit({
            query: this.searchQuery
        });
        this.searchQuery = '';
    }

}
