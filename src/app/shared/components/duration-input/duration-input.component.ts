import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessorService } from '../../../core/form';

const CUSTOM_DURATION_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ValueAccessorService),
    multi: true
};

@Component({
    selector: 'sh-duration-input',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './duration-input.component.html',
    styles: [require('./duration-input.component.scss')],
    providers: [CUSTOM_DURATION_VALUE_ACCESSOR, ValueAccessorService]
})
export class DurationInputComponent implements OnInit {

    constructor(private valueAccessor: ValueAccessorService<number>,
                private cd: ChangeDetectorRef) {

        this.valueAccessor.modelWrites.subscribe(this.onWriteChange.bind(this));
    }

    private _duration;

    get duration() {
        return this._duration;
    }

    set duration(value) {
        let parsed = DurationInputComponent.parseDuration(value);
        this.valueAccessor.value = parsed;
        this._duration = parsed;
    }

    private static parseDuration(value: any) {
        return /\D/.test(value) || !value.length ? value : parseInt(value, 10);
    }

    ngOnInit(): void {
        this.duration = this.valueAccessor.value;
    }

    private onWriteChange(value) {
        this.duration = value;
        this.cd.markForCheck()
    }
}
