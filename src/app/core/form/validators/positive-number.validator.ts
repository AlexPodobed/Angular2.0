import { FormControl } from '@angular/forms';
import { isNumber } from 'lodash';

export function ValidatePositiveNumberInput(control: FormControl): { [key: string]: boolean } {
    const n = control.value;
    return isNumber(n)
        ? (n >= 0) ? null : { positiveNumber: true }
        : null;
}
