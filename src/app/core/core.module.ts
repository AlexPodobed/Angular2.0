import { NgModule } from '@angular/core';

import { LoaderBlockModule, FooterModule, HeaderModule, LogoModule } from './components';
import {
    LoaderBlockService, AuthService, DebugZoneService, AppState, StorageService
} from './services';

import { PipesModule } from './pipes';

@NgModule({
    declarations: [],
    imports: [
        LoaderBlockModule,
        FooterModule,
        HeaderModule,
        LogoModule,
        PipesModule
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
        LogoModule,
        PipesModule
    ]
})

export class CoreModule {
}
