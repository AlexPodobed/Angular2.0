import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoaderBlockModule, FooterModule, HeaderModule, LogoModule } from './components';
import {
    LoaderBlockService, AuthService, AuthAPIService, DebugZoneService, AppState, StorageService, AuthorizedHttp
} from './services';

import { PipesModule } from './pipes';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LoaderBlockModule,
        FooterModule,
        HeaderModule,
        LogoModule,
        PipesModule
    ],
    providers: [
        AppState,
        AuthAPIService,
        AuthService,
        StorageService,
        AuthorizedHttp,
        DebugZoneService,
        LoaderBlockService
    ],
    exports: [
        BrowserModule,
        FormsModule,
        LoaderBlockModule,
        FooterModule,
        HeaderModule,
        LogoModule,
        PipesModule
    ]
})

export class CoreModule {
}
