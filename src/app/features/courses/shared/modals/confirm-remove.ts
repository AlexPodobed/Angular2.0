import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ICourse }from'../course.model';

@Component({
    selector: 'removeCourseModal',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './templates/confirm-remove.html'
})
export class ConfirmModalModalComponent {
    @Input() course: ICourse;

    constructor(public activeModal: NgbActiveModal) {
    }
}
