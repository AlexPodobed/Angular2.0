import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { LoaderBlockModule, FooterModule, HeaderModule, LogoModule } from './components';
import {
    LoaderBlockService, AuthService, DebugZoneService, AppState, StorageService, AuthorizedHttp
} from './services';

import { PipesModule } from './pipes';

@NgModule({
    declarations: [],
    imports: [
        HttpModule,
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
        AuthorizedHttp,
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
