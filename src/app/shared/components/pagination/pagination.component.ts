import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'sh-pagination',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './pagination.component.html'
})
export class PaginationComponent {
    @Input() public page: number;
    @Input() public total: number;
    @Input() public size: number;

    @Output() public onPaginate = new EventEmitter<number>();

    public onPageChanged(page) {
        this.onPaginate.emit(page);
    }
}
