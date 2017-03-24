import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../../entities';

@Component({
    selector: 'nav-menu',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent {
    @Input() public user: IUser;
    @Input() public opened: boolean;
    @Output() public logout = new EventEmitter<void>();
}
