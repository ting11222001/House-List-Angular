import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

/**
 * Notes:
 * Use [src] not src, so "housingLocation.photo" becomes property binding i.e. the value is an actual property from the component class, instead of simply a string.
 * {{...}} is called Angular Interpolation.
 * Replace <a href=""></a> with router link directive e.g. <a routerLink="details"></a> for "Learn More".
 * Use [routerLink] to do property binding e.g. <a [routerLink]="['/details', housingLocation.id]"></a>.
 * The learn more links should be e.g. localhost:4200/details/2
 */
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior design of {{ housingLocation.name }}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation; // ! means this won't be null or undefined
}
