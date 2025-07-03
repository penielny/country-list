import { Country, CountryInfo } from "../../model/country";

export interface CountriesState {
    countries : Country[],
    loading: boolean;
    searchQuery:string;
    error: any;
    country:CountryInfo|null;
    isDark:boolean;
}