import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import { HOUR, SECOND, ADVANCED, RECALL } from '../../core/reducers/reducers';

@Component({
    selector: 'home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnDestroy {
    private subscription: Subscription;
    public clock: Observable<any>;
    public people$: Observable<any>;
    public seconds$: Observable<any>;
    public person$;
    public recall$;
    public click$;

    constructor(private store: Store<any>) {
        this.clock = store.select('clock');
        this.people$ = store.select('people');
        this.person$ = new Subject().map((value) => ({ type: ADVANCED, payload: value }));
        this.click$ = new Subject().map((value: string) => ({ type: HOUR, payload: parseInt(value, 10) }));
        this.recall$ = new Subject();
        this.seconds$ = Observable
            .interval(1000)
            .mapTo({ type: SECOND, payload: 1 });

        this.subscription = Observable.merge(
            this.click$,
            this.person$,
            this.seconds$,
            this.recall$.withLatestFrom(this.clock, (_, time) => time)
                .map((time) => ({ type: RECALL, payload: time }))
        ).subscribe((action) => {
            store.dispatch(action);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
