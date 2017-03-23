import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'no-content',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './no-content.component.html'
})
export class NoContentComponent {

}
