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
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, HomeChildComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
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
  message = 'Hello from Parent!';

  // For input and output practice with home-child component
  messageFromChild = '';

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  // For input and output practice with home-child component
  receiveMessage(newMessage: string): void {
    this.messageFromChild = newMessage;
  }
}
