import { NgModule } from '@angular/core';
import { DatePickerComponent } from './date-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [DatePickerComponent],
    imports: [FormsModule],
    exports: [DatePickerComponent]
})
export class DatepickerModule {

}
