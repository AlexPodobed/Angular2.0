import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoaderBlockModule, FooterModule, HeaderModule, LogoModule, ModalModule } from './components';
import * as CoreServices from './services';

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
        PipesModule,
        ModalModule
    ],
    providers: [
        CoreServices.AuthAPIService,
        CoreServices.AuthService,
        CoreServices.AuthGuard,
        CoreServices.StorageService,
        CoreServices.AuthorizedHttp,
        CoreServices.DebugZoneService,
        CoreServices.LoaderBlockService
    ],
    exports: [
        BrowserModule,
        FormsModule,
        LoaderBlockModule,
        FooterModule,
        HeaderModule,
        LogoModule,
        PipesModule,
        ModalModule
    ]
})

export class CoreModule {
}
