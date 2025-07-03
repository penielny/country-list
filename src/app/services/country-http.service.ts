import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheHttpService } from './cacheHttpClient';
import { Observable } from 'rxjs';
import { Country, CountryInfo } from '../../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryHttpService {

  regions = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania"
  ]

  BASE_URL = "https://restcountries.com/v3.1/"

  constructor(private httpClient: CacheHttpService) { }

  getCountries():Observable<Country[]> {
    return this.httpClient.get(`${this.BASE_URL}all?fields=name,capital,region,population,flags`)
  }

  searchCountries(name: string):Observable<CountryInfo[]> {
    return this.httpClient.get(`${this.BASE_URL}name/${name}`)
  }

  getCountriesByRegion(region: string) {
    return this.httpClient.get(`${this.BASE_URL}region/${region}`)
  }

}
