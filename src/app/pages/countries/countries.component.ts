import { Component, OnDestroy } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../../model/country';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-countries',
  imports: [RouterLink],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnDestroy {

  countries: Country[] = [];
  subscription: Subscription = new Subscription()

  constructor(private countriesService: CountryService) {
    this.subscription.add(this.countriesService.countries$.subscribe({
      next: (value) => {
        this.countries = value;
      },
    }))
  }

  setSearchTerm(term:string){
    this.countriesService.searchCountry(term)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
