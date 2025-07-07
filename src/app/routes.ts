import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '', // default
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'details/:id', // parameterized routes
    component: DetailsComponent,
    title: 'Detail Page'
  }
];

export default routeConfig;