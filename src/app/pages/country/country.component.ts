import { Component } from '@angular/core';
import { CountryInfo } from '../../../model/country';
import { Subscription } from 'rxjs';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-country',
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent {
  country: CountryInfo | null = null;
  subscription: Subscription = new Subscription()

  constructor(private countriesService: CountryService) {
    this.subscription.add(this.countriesService.country$.subscribe({
      next: (value) => {
        this.country = value;
      },
    }))
  }

  get languages() {
    return Object.values(this.country?.languages ?? {}).join(", ")
  }

  get currencies(): string {
    return Object.values(this.country?.currencies || {})
      .map(c => `${c.name} (${c.symbol})`)
      .join(", ");
  }

  get nativeNames(): string {
    return Object.values(this.country?.name.nativeName ?? {}).map(nativeLanguage => nativeLanguage)[0].common
  }

  get borders(): string {
    return this.country?.borders.join(", ") || ""
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
