import { EventEmitter, Injectable } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as _ from 'lodash';

@Injectable()
export class ValueAccessorService<T> implements ControlValueAccessor {
    public modelWrites: EventEmitter<T> = new EventEmitter<T>();
    private _model: T;
    private onTouche: (m: T) => void;
    private onChange: (m: T) => void;

    get value(): T {
        return this._model;
    }

    set value(value: T) {
        if (value !== this._model) {
            this._model = _.cloneDeep(value);

            if (this.onChange) {
                this.onChange(this._model);
            }
        }
    }

    writeValue(value: T): void {
        if (value !== this._model) {
            this._model = value;
            this.modelWrites.emit(value);
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouche = fn;
    }
}
