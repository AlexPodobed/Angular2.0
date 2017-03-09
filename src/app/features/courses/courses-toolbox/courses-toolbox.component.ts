import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'courses-toolbox',
    styles: [require('./courses-toolbox.scss')],
    templateUrl: './courses-toolbox.component.html'
})
export class CoursesToolboxComponent {
    @Output() public onSearch = new EventEmitter();
}
