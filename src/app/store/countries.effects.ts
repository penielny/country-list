import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CountriesAction from './countries.actions';
import { CountryHttpService } from '../services/country-http.service';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as CountrySelector from "./countries.selectors"


@Injectable()
export class CountriesEffects {
    loadCountries$;
    loadSearchQuery$;
    constructor(
        private actions$: Actions,
        private countryService: CountryHttpService,
        private store: Store
    ) {
        this.loadCountries$ = createEffect(() =>
            this.actions$.pipe(
                ofType(CountriesAction.loadCountries),
                switchMap(() =>
                    this.countryService.getCountries().pipe(
                        map((countries) =>
                            CountriesAction.loadCountriesSuccess({ countries })
                        ),
                        catchError((error) =>
                            of(CountriesAction.loadCountriesFailure({ error }))
                        )
                    )
                )
            )
        );
        this.loadSearchQuery$ = createEffect(() =>
            this.actions$.pipe(
                ofType(CountriesAction.searchCountries),
                withLatestFrom(this.store.select(CountrySelector.selectSearchQuery)),
                switchMap(([action, query]) =>
                    this.countryService.getCountry(query).pipe(
                        switchMap((countryinfo) => {
                            const country = countryinfo[0];
                            const borderCodes = country.borders || [];

                            if (borderCodes.length === 0) {
                                return of(
                                    CountriesAction.searchCountriesSuccess({ country: { ...country, full_borders: [] } })
                                );
                            }

                            return this.countryService.getCountriesByCodes(borderCodes).pipe(
                                map((borderCountries) =>
                                    CountriesAction.searchCountriesSuccess({
                                        country: {
                                            ...country,
                                            full_borders: borderCountries
                                        }
                                    })
                                )
                            );
                            
                        }),
                        catchError((error) =>
                            of(CountriesAction.loadCountriesFailure({ error }))
                        )
                    )
                )
            )
        );
    }


}
