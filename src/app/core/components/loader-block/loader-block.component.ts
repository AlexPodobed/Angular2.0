import { ChangeDetectionStrategy, Component,  OnInit } from '@angular/core';
import { LoaderBlockService } from '../../services';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-loader-block',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./loader-block.component.scss')],
    templateUrl: './loader-block.component.html'
})
export class LoaderBlockComponent implements OnInit {
    public show$: Observable<boolean>;

    constructor(private loaderBlockService: LoaderBlockService) {
    }

    ngOnInit() {
        this.show$ = this.loaderBlockService.loaderStatus$;
    }

}
