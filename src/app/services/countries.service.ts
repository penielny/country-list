import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as CountriesAction from "./../store/countries.actions"
import { Country, CountryInfo } from "../../model/country";
import { Observable } from "rxjs";
import * as CountriesSelector from "./../store/countries.selectors"
import * as CountryAction from "./../store/countries.actions"
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries$: Observable<Country[]>;
  country$: Observable<CountryInfo | null>;
  isDarkMode$: Observable<Boolean>;

  regions = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania"
  ]

  constructor(private store: Store) {
    this.store.dispatch(CountriesAction.loadCountries());
    this.countries$ = this.store.select(CountriesSelector.selectCountries)
    this.country$ = this.store.select(CountriesSelector.selectSearchCountry)
    this.isDarkMode$ = this.store.select(CountriesSelector.selectTheme)
  }

  searchCountry(name: string) {
    this.store.dispatch(CountryAction.searchCountries({ query: name }))
  }

  toggleTheme(theme: boolean) {
    this.store.dispatch(CountriesAction.toggleTheme({ theme }))
  }


}