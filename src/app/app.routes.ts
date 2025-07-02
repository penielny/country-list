import { Routes } from '@angular/router';
import { CountriesComponent } from './pages/countries/countries.component';
import { CountryComponent } from './pages/country/country.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "country",
        pathMatch: "full"
    },
    {
        path: 'country',
        component: CountriesComponent
    },
    {
        path: 'country/:id',
        component: CountryComponent
    }
];
