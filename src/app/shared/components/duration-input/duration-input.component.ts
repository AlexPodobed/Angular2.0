import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'sh-duration-input',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './duration-input.component.html',
    styles: [require('./duration-input.component.scss')]
})
export class DurationInputComponent {
    public duration: number = 180;
}
