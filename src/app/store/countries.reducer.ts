import { createReducer, on } from "@ngrx/store";
import { CountriesState } from "./countries.model";
import * as CountryActions from "./countries.actions"

export const initialState: CountriesState = {
    countries: [],
    searchQuery: "",
    loading: false,
    error: null,
    country:null
};


export const countriesReducer = createReducer(
    initialState,

    on(CountryActions.loadCountries, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(CountryActions.loadCountriesSuccess, (state, payload) => ({
        ...state,
        loading: false,
        countries: payload.countries
    })),

    on(CountryActions.loadCountriesFailure, (state, payload) => ({
        ...state,
        countries: [],
        loading: false,
        error: payload.error
    })),

    on(CountryActions.searchCountries, (state, { query }) => ({
        ...state,
        loading: true,
        searchQuery: query
    })),

    on(CountryActions.searchCountriesSuccess, (state, { country }) => ({
        ...state,
        loading: false,
        country
    }))

)