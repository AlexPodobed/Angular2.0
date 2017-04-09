import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'sh-date-picker',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './date-picker.component.html',
    styles: [require('./date-picker.component.scss')]
})
export class DatePickerComponent {

}
