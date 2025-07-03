import { Component, OnDestroy, ViewChild } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../../model/country';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnDestroy {

  countries: Country[] = [];
  allCountries: Country[] = [];
  searchTerm: string = ""
  subscription: Subscription = new Subscription()

  selectedRegion = '';

  constructor(protected countriesService: CountryService) {
    this.subscription.add(this.countriesService.countries$.subscribe({
      next: (value) => {
        this.allCountries = value;
        this.onInput()
      },
    }))
  }



  filterCountries(): void {
    const term = this.searchTerm.trim().toLowerCase();

    this.countries = this.allCountries.filter(country => {
      const matchesRegion = this.selectedRegion ? country.region === this.selectedRegion : true;
      const matchesSearch = term
        ? country.name.common?.toLowerCase().includes(term)
        : true;

      return matchesRegion && matchesSearch;
    });
  }


  onInput(): void {
    this.filterCountries();
  }

  filterByRegion(region: string): void {
    this.selectedRegion = region;
    this.filterCountries();
  }

  setSearchTerm(term: string) {
    this.countriesService.searchCountry(term)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
