import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlValueAccessorService } from '../../../core/form';

const CUSTOM_DURATION_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ControlValueAccessorService),
    multi: true
};

@Component({
    selector: 'sh-duration-input',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './duration-input.component.html',
    styles: [require('./duration-input.component.scss')],
    providers: [CUSTOM_DURATION_VALUE_ACCESSOR, ControlValueAccessorService]
})
export class DurationInputComponent implements OnInit {
    constructor(private controlValueAccessor: ControlValueAccessorService) {
    }

    private _duration;

    get duration() {
        return this._duration;
    }

    set duration(value) {
        let parsed = DurationInputComponent.parseDuration(value);
        this.controlValueAccessor.value = parsed;
        this._duration = parsed;
    }

    private static parseDuration(value: any) {
        return /\D/.test(value) || !value.length ? value : parseInt(value, 10);
    }

    ngOnInit(): void {
        this.duration = this.controlValueAccessor.value;
    }
}
