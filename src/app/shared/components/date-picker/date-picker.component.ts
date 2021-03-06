import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';

import { ValueAccessorService } from '../../../core/form';

const CUSTOM_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ValueAccessorService),
    multi: true
};

@Component({
    selector: 'sh-date-picker',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './date-picker.component.html',
    styles: [require('./date-picker.component.scss')],
    providers: [CUSTOM_DATEPICKER_VALUE_ACCESSOR, ValueAccessorService]
})
export class DatePickerComponent implements OnInit {
    private static dateFormat: string = 'YYYY-MM-DD';

    constructor(private valueAccessor: ValueAccessorService<number|string>,
                private cd: ChangeDetectorRef) {
        this.valueAccessor.modelWrites.subscribe(this.onWriteChange.bind(this));
    }

    private _timestamp: string;

    get timestamp() {
        return this._timestamp;
    }

    set timestamp(value: string) {
        this.valueAccessor.value = DatePickerComponent.parseDateString(value);
        this._timestamp = value;
    }

    private static parseDateString(dateStr: string) {
        let date = moment(dateStr);
        return date.isValid() ? +(date.format('x')) : '';
    }

    private static setDefaultDate(timestamp: number|string) {
        let date = moment(timestamp);
        return date.isValid()
            ? date.format(DatePickerComponent.dateFormat)
            : moment().format(DatePickerComponent.dateFormat);
    }

    public ngOnInit(): void {
        this.timestamp = DatePickerComponent.setDefaultDate(this.valueAccessor.value);
    }

    private onWriteChange(value) {
        this.timestamp = value;
        this.cd.markForCheck()
    }
}
