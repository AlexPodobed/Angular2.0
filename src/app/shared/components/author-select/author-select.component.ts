import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'sh-author-select',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './author-select.component.html',
    styles: [require('./author-select.component.scss')]
})
export class AuthorSelectComponent {

}
