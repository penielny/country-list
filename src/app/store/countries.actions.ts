import { createAction, props } from "@ngrx/store";
import { Country, CountryInfo } from "../../model/country";

export const loadCountries = createAction("[Country] Load Countries")

export const loadCountriesSuccess = createAction("[Country] Load Countries Success",
    props<{ countries: Country[] }>()
)

export const loadCountriesFailure = createAction("[Country] Load Countries Failure",
    props<{ error: Error }>()
)

export const searchCountries = createAction("[Country] Search Countries",
    props<{ query: string }>()
)


export const searchCountriesSuccess = createAction("[Country] Search Countries Success",
    props<{ country: CountryInfo }>()
)

export const toggleTheme = createAction("[Country] Toggle Theme",
    props<{ theme: boolean }>()
)