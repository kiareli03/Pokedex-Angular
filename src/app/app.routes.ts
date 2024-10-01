import { Routes } from '@angular/router';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
    { path: '', component: HomeComponentComponent },
    { path: 'details/:id', component: DetailsComponent }
];
