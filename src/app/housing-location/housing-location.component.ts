import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

/**
 * Notes:
 * Use [src] not src, so "housingLocation.photo" becomes property binding i.e. the value is an actual property from the component class, instead of simply a string.
 * {{...}} is called Angular Interpolation.
 */
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior design of {{ housingLocation.name }}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation; // ! means this won't be null or undefined
}
