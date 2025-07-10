import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { listData } from '../listData';
import { HomeChildComponent } from '../home-child/home-child.component';
import { HousingService } from '../housing.service';

/**
 * Notes:
 * "let housingLocation of housingLocationList" of *ngFor is called Angular template syntax, which will create a template varaible called housingLocation.
 * [housingLocation] is property binding, meaning it's HousingLocationComponent.housingLocation, and "housingLocation" is the housingLocation variable from HomeComponent.
 * Replace housingLocationList: HousingLocation[] = listData; with housingLocationList: HousingLocation[] = []; so that the mock data is now coming from HousingService instead of listData (a export const file).
 * 
 * Replace this.housingLocationList = this.housingService.getAllHousingLocations(); with the new HTTP service - use the returned Promise to update the housingLocationList property.
 * 
 * To make the filter at the top work, we need to retrieve data from the filter in the template for this component.
 * 1. Use a template variable - #filter (the # creates a template variable called "filter").
 * 2. filter.value: this value is a property of the input HTML element. This allows to pass the value in the input elemnt directly into our component class.
 * 3. Replace let housingLocation of housingLocationList in the ngFor with let housingLocation of filteredLocationList.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, HomeChildComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
      <app-home-child [message]="message" (messageEvent)="receiveMessage($event)"></app-home-child>
      <p>
        Message from Child:{{ messageFromChild }}
      </p>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // housingLocationList: HousingLocation[] = listData;
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  // For input and output practice with home-child component
  message = 'Hello from Parent!';
  messageFromChild = '';

  constructor() {
    // this.housingLocationList = this.housingService.getAllHousingLocations();
    this.housingService.getAllHousingLocations().then(
      (housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      }
    );
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList; // this allows users to clear the search box and see all the housing locations.
    }
    // actual filter logic here:
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  // For input and output practice with home-child component
  receiveMessage(newMessage: string): void {
    this.messageFromChild = newMessage;
  }
}
