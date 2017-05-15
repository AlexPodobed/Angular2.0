import { Component, Input } from '@angular/core';

@Component({
    selector: 'sh-clock',
    templateUrl: './clock.component.html'
})
export class ClockComponent {
    @Input() public time;
}
