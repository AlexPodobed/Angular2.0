import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from "rxjs";

@Component({
    selector: 'sh-pagination',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
    @Input() public items: Observable<any>;
    @Input() public page: number;
    @Input() public total: number;
    @Input() public size: number;

    @Output() public onPaginate = new EventEmitter<any>();


    public pageItems: number[];

    public ngOnInit(): void {
        console.log('[PaginationComponent]', this.items);

        this.pageItems = Array.from(Array(Math.ceil(this.total / this.size)).keys());

        console.log(this.pageItems);
    }

    public onPageNext(){

    }

    public onPagePrev(){

    }

    public onPageSelect(index){
        console.log(index);
    }
}
