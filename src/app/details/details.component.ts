import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

/**
 * Notes:
 * Pass in the current id of housing location from url to this component.
 * ActivatedRoute is a reference to the current route we're matched against in the application. From this, we can get access to the route info.
 * Replace the initial property, housingLocationId = 0; and make a const variable in the constructor so that we can use it as a parameter to pass in the service.
 * The question mark in housingLocation?.id is called 'optional chaining operator'. It safe-guards calling .id from undefined so that there won't be an error.
 */
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo" alt="">
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-lication">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply Now to live here</h2>
        <button class="primary" type="button">Apply</button>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  // housingLocationId = 0;
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    // this.housingLocationId = Number(this.route.snapshot.params['id']);
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
