import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

/* tslint:disable */
@Injectable()
export class LoaderBlockService {
    private loaderSource: Subject<any>;
    public loaderStatus$: Observable<boolean>;

    constructor() {
        this.loaderSource = new Subject();
        this.loaderStatus$ = this.loaderSource.asObservable();
    }

    show() {
        this.loaderSource.next(true);
    }

    hide() {
        this.loaderSource.next(false);
    }

    toggleLoader(flag: boolean) {
        this.loaderSource.next(flag);
    }
}
