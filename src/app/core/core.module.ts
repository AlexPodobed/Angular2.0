import { NgModule } from '@angular/core';

import { LoaderBlockModule, FooterModule, HeaderModule, LogoModule } from './components';
import {
    LoaderBlockService, AuthService, DebugZoneService, AppState, StorageService
} from './services';

@NgModule({
    declarations: [],
    imports: [
        LoaderBlockModule,
        FooterModule,
        HeaderModule,
        LogoModule
    ],
    providers: [
        AppState,
        AuthService,
        StorageService,
        DebugZoneService,
        LoaderBlockService
    ],
    exports: [
        LoaderBlockModule,
        FooterModule,
        HeaderModule,
        LogoModule
    ]
})

export class CoreModule {
}
