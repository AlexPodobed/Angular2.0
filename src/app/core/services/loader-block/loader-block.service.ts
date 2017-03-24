import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

/* tslint:disable */
@Injectable()
export class LoaderBlockService {
    private loaderSource: Subject<any>;
    public loaderStatus$: Observable<boolean>;

    constructor() {
        console.info('LoaderBlockService initialized')
        this.loaderSource = new Subject();
        this.loaderStatus$ = this.loaderSource.asObservable();
    }

    show() {
        this.loaderSource.next(true);
    }

    hide() {
        this.loaderSource.next(false);
    }
}
