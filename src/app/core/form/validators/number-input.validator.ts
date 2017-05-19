import { FormControl } from '@angular/forms';
import { isNumber } from 'lodash';

export function ValidateNumberInput(control: FormControl): { [key: string]: boolean } {
    return isNumber(control.value) ? null : { 'numberOnly': true };
}
