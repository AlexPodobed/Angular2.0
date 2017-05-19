import { Injectable } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

@Injectable()
export class ControlValueAccessorService implements ControlValueAccessor {
    private currentValue: any;

    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    set value(newValue) {
        if (newValue !== this.currentValue) {
            this.currentValue = newValue;
            this.onChangeCallback(newValue);
        }
    }

    get value(): any {
        return this.currentValue;
    }

    writeValue(value: any): void {
        if (value !== this.currentValue) {
            this.currentValue = value;
        }
    }

    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }

}
