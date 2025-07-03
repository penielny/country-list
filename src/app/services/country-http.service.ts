import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheHttpService } from './cacheHttpClient';
import { Observable, forkJoin } from 'rxjs';
import { Country, CountryInfo } from '../../model/country';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryHttpService {

  BASE_URL = "https://restcountries.com/v3.1/"

  constructor(private httpClient: CacheHttpService) { }

  getCountries(): Observable<Country[]> {
    return this.httpClient.get(`${this.BASE_URL}all?fields=name,capital,region,population,flags,cca3`)
  }

  searchCountries(name: string): Observable<CountryInfo[]> {
    return this.httpClient.get(`${this.BASE_URL}name/${name}`)
  }

  getCountry(code: string): Observable<CountryInfo[]> {
    return this.httpClient.get<CountryInfo[]>(`${this.BASE_URL}alpha/${code}`)
  }



  getCountriesByCodes(codes: string[]): Observable<Country[]> {
    const requests = codes.map(code =>
      this.httpClient.get<Country[]>(`${this.BASE_URL}alpha/${code}`).pipe(
        map(response => response[0])
      )
    );

    return forkJoin(requests);
  }

  getCountriesByRegion(region: string) {
    return this.httpClient.get(`${this.BASE_URL}region/${region}`)
  }

}
