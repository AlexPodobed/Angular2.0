import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'courses-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./courses-container.scss')],
    templateUrl: './courses-container.component.html'
})
export class CoursesContainerComponent {
    public searchQuery: string;

    public search(query: string) {
        this.searchQuery = query;
    }
}
