import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ICourse }from'../course.model';

@Component({
    selector: 'removeCourseModal',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="modal-header bg-danger text-white">
            <h4 class="modal-title">Delete Course</h4>
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss()">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>Do you really want to remove <strong>{{course.title}}</strong>?</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger" (click)="activeModal.dismiss()">no
            </button>
            <button type="button" class="btn btn-outline-primary" (click)="activeModal.close(course)">Yes
            </button>
        </div>
    `
})
export class ConfirmModalModalComponent {
    @Input() course: ICourse;

    constructor(public activeModal: NgbActiveModal) {
    }
}
