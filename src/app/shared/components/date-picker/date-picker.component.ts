import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';

import { ControlValueAccessorService } from '../../../core/form';

const CUSTOM_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ControlValueAccessorService),
    multi: true
};

@Component({
    selector: 'sh-date-picker',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './date-picker.component.html',
    styles: [require('./date-picker.component.scss')],
    providers: [CUSTOM_DATEPICKER_VALUE_ACCESSOR, ControlValueAccessorService]
})
export class DatePickerComponent implements OnInit {
    private static dateFormat: string = 'YYYY-MM-DD';
    private _timestamp: string;

    private static parseDateString(dateStr: string) {
        let date = moment(dateStr);
        return date.isValid() ? +(date.format('x')) : '';
    }

    private static setDefaultDate(timestamp: number) {
        let date = moment(timestamp);
        return date.isValid()
            ? date.format(DatePickerComponent.dateFormat)
            : moment().format(DatePickerComponent.dateFormat);
    }

    get timestamp() {
        return this._timestamp;
    }

    set timestamp(value: string) {
        this.controlValueAccessor.value = DatePickerComponent.parseDateString(value);
        this._timestamp = value;
    }

    ngOnInit(): void {
        this.timestamp = DatePickerComponent.setDefaultDate(this.controlValueAccessor.value);
    }

    constructor(private controlValueAccessor: ControlValueAccessorService) {
    }
}
