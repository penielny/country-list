import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {

  subscription: Subscription = new Subscription();
  isDarkMode: Boolean = false;

  constructor(private countryService: CountryService) {
    this.subscription = this.countryService.isDarkMode$.subscribe({
      next: (value) => {
        this.isDarkMode = value;
      },
    })
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.countryService.toggleTheme(this.isDarkMode as boolean);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
