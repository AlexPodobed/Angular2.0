import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// ngrx deps
import { StoreModule, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects, auth } from './core/state/auth';
import { CourseEffects, courses } from './features/courses/state';

import { ENV_PROVIDERS } from './environment';

// Routes
import { ROUTES } from './app.routes';

// Core module
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Features
import { CoursesModule } from './features/courses';
import { LoginModule } from './features/login';
import { HomeComponent } from './features/home';

// Components
import { NoContentComponent } from './features/no-content';
import { AppComponent } from './app.component';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, NoContentComponent, HomeComponent],
    imports: [
        RouterModule.forRoot(ROUTES, { useHash: false }),
        StoreModule.provideStore(
            compose(
                localStorageSync({ keys: ['auth'] }),
                combineReducers
            )({ auth, courses })
        ),
        EffectsModule.run(AuthEffects),
        EffectsModule.run(CourseEffects),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 5
        }),
        NgbModule.forRoot(),
        // commons
        CoreModule,
        SharedModule,
        // features
        CoursesModule,
        LoginModule
    ],
    providers: [
        // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS
    ]
})
export class AppModule {
}
