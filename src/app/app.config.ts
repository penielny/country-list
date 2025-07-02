import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { countriesReducer } from './store/countries.reducer';
import { CountriesEffects } from './store/countries.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideHttpClient(),
    provideHttpClient(),
    provideStore({ countries: countriesReducer }),
    provideEffects([CountriesEffects]), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
