import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { ValidateNumberInput, ValidatePositiveNumberInput } from '../../../core/form';
import { LoaderBlockService } from '../../../core/services';
import { CourseEffects } from '../state/courses.effects';
import * as actions from '../state/courses.actions';
import { ICourse } from '../shared';

@Component({
    selector: 'course-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-form.component.html'
})
export class CourseFormComponent implements OnInit, OnDestroy {
    @Input() public course: ICourse;
    public loading$: Observable<boolean>;
    public saveSuccess$: Observable<Action>;
    public courseForm: FormGroup;
    public coursesStore$;
    public formErrors: any = {
        title: '',
        description: '',
        duration: '',
        createdAt: ''
    };
    public validationMessages: any = {
        title: {
            required: 'Title is required.',
            minlength: 'Title must be at least 4 characters long.',
            maxlength: 'Title cannot be more than 24 characters long.',
        },
        description: {
            required: 'Description is required.',
            minlength: 'Description must be at least 4 characters long.',
            maxlength: 'Description cannot be more than 500 characters long.'
        },
        duration: {
            required: 'Duration is required.',
            numberOnly: 'Only numbers allowed',
            positiveNumber: 'Only Positive numbers allowed'
        },
        createdAt: {
            required: 'Date is required.'
        }
    };
    private subscriptions: Subscription[];

    constructor(private formBuilder: FormBuilder,
                private loaderBlockService: LoaderBlockService,
                private courseEffects: CourseEffects,
                private router: Router,
                private store: Store<any>) {

        this.coursesStore$ = this.store.select('courses');
        this.loading$ = this.coursesStore$.map((data) => data['loading']);
        this.saveSuccess$ = this.courseEffects.save$.filter((action) => action.type === actions.SAVE_COURSE_SUCCESS);

        this.subscriptions = [
            this.loading$.subscribe((loading) => this.loaderBlockService.toggleLoader(loading)),
            this.saveSuccess$.subscribe(() => this.redirectToListPage())
        ];
    }

    get isNewStrategy(): boolean {
        return !this.course;
    }

    public ngOnInit(): void {
        this.buildForm();
    }

    public ngOnDestroy(): void {
        this.subscriptions.map((sub) => sub.unsubscribe());
    }

    public cancel(): void {
        this.courseForm.reset({ emitEvent: true });
    }

    public save(): void {
        const model = Object.assign({}, this.course, this.courseForm.value);
        this.coursesStore$.dispatch(actions.saveCourseAction(model, this.isNewStrategy));
    }

    private onValueChanged(data?): void {
        if (this.courseForm) {
            _.forEach(this.formErrors, (text, field) => {
                const control = this.courseForm.get(field);
                this.formErrors[field] = '';

                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];

                    _.forEach(control.errors, (errorMessage, key) => {
                        this.formErrors[field] = messages[key] + ' ';
                    });
                }
            });
        }
    }

    private buildForm(): void {
        this.courseForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
            description: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(500)]],
            duration: [null, [ValidateNumberInput, Validators.required, ValidatePositiveNumberInput]],
            createdAt: [null, [Validators.required]]
        });

        if (!this.isNewStrategy) {
            this.courseForm.patchValue(this.course);
        }

        this.subscriptions.push(this.courseForm.valueChanges.subscribe((data) => this.onValueChanged(data)));
    }

    private redirectToListPage(): void {
        this.router.navigate(['/courses']);
    }
}
