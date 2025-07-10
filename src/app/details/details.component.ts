import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

/**
 * Notes:
 * this.route.snapshot.params['id']:
 * Pass in the current id of housing location from url to this component.
 * ActivatedRoute is a reference to the current route we're matched against in the application. From this, we can get access to the route info.
 * 
 * Replace the initial property, housingLocationId = 0; and make a const variable in the constructor so that we can use it as a parameter to pass in the service.
 * The question mark in housingLocation?.id is called 'optional chaining operator'. It safe-guards calling .id from undefined so that there won't be an error.
 * 
 * [formGroup] is a property binding which can be used to bind a formGroup to a <form>.
 * (submit) is an event binding which can be used to bind to a click event.
 * The ?? operator is called the nullish coalescing operator. If the value on the left hand side is null or undefined, then the value on the right hand side is used.
 * 
 * Replace this.housingLocation = this.housingService.getHousingLocationById(housingLocationId) with a new HTTP request.
 */
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">
          
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">
          
          <button class="primary" type="submit">Apply</button>
        </form>
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
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    // this.housingLocationId = Number(this.route.snapshot.params['id']);
    const housingLocationId = Number(this.route.snapshot.params['id']);
    // this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
    this.housingService.getHousingLocationById(housingLocationId).then(
      (housingLocation: HousingLocation | undefined) => {
        this.housingLocation = housingLocation;
      }
    );
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
  }
}
