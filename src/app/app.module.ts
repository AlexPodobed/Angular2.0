import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule, ApplicationRef} from '@angular/core';
import {removeNgStyles, createNewHosts, createInputTransfer} from '@angularclass/hmr';
import {ENV_PROVIDERS} from './environment';

// App is our top level component
import {AppComponent} from './app.component';

// Features
import {CoursesModule} from './features/courses';

// Components
import {FooterModule, HeaderModule, LogoModule} from './core/components';

// Services
import {AppState} from './core/services';

// Application wide providers
const APP_PROVIDERS = [
    AppState
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        // import Angular's modules
        BrowserModule,
        FormsModule,
        HttpModule,
        // commons
        LogoModule,
        HeaderModule,
        FooterModule,
        // features
        CoursesModule
    ],
    providers: [
        // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {

    constructor(public appRef: ApplicationRef,
                public appState: AppState) {
    }

    public hmrOnInit(store: any) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            let restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    public hmrOnDestroy(store: any) {
        const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
        // save state
        const state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    public hmrAfterDestroy(store: any) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }

}