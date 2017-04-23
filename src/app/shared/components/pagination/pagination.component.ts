import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from "rxjs";

@Component({
    selector: 'sh-pagination',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
    @Input() public page: number;
    @Input() public total: number;
    @Input() public size: number;

    @Output() public onPaginate = new EventEmitter<number>();

    public ngOnInit(): void {
        console.log('[PaginationComponent]', this.total);}

    public onPageChanged(page){
        console.log('page changed: ', page);
        this.onPaginate.emit(page);
    }
}
