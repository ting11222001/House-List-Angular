import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { listData } from '../listData';

/**
 * Notes:
 * "let housingLocation of housingLocationList" of *ngFor is called Angular template syntax, which will create a template varaible called housingLocation.
 * [housingLocation] is property binding, meaning it's HousingLocationComponent.housingLocation, and "housingLocation" is the housingLocation variable from HomeComponent.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = listData;
}
