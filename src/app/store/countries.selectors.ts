import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CountriesState } from "./countries.model";

export const selectCountryState = createFeatureSelector<CountriesState>('countries');

export const selectCountries = createSelector(
  selectCountryState,
  (state) => state.countries
);

export const selectSearchQuery = createSelector(
  selectCountryState,
  (state) => state.searchQuery
);

export const selectSearchCountry = createSelector(
  selectCountryState,
  (state) => state.country
);

export const selectTheme = createSelector(
  selectCountryState,
  (state) => state.isDark
);

