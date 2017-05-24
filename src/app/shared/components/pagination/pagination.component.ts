import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'sh-pagination',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnChanges {
    public size: number;
    public total: number;
    public loaded: boolean;
    @Input() public options: any;
    @Output() public onPaginate = new EventEmitter<number>();

    private _page: number;

    get page(): number {
        return this._page;
    }

    set page(number) {
        this._page = number + 1;
    };

    public ngOnChanges(changes: SimpleChanges): void {
        let optionsChange = changes['options'];

        if (optionsChange && !optionsChange.isFirstChange()) {
            let options = optionsChange.currentValue;
            this.loaded = options.loaded;
            this.size = options.size;
            this.total = options.total;
            this.page = options.page;
        }
    }

    public onPageChanged(page) {
        this.onPaginate.emit(page - 1);
    }
}
