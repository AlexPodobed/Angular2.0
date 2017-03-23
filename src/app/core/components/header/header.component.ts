import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [require('./header.component.scss')],
    templateUrl: './header.component.html'
})
export class HeaderComponent {

}
