import { Component } from '@angular/core';
import { DebugZoneService } from './core/services';
import '../styles/styles.scss';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private debugZoneService: DebugZoneService) {
        debugZoneService.init();
    }
}
