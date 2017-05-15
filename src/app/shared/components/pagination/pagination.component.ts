import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'sh-pagination',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './pagination.component.html'
})
export class PaginationComponent {
    public pageNum: number

    @Input() set page(number) {
        console.log(number)
        this.pageNum = number + 1;
    };

    @Input() public total: number;
    @Input() public size: number;

    @Output() public onPaginate = new EventEmitter<number>();

    public onPageChanged(page) {
        this.onPaginate.emit(page - 1);
    }
}
