import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

/**
 * Notes:
 * Pass in the current id of housing location from url to this component.
 * ActivatedRoute is a reference to the current route we're matched against in the application. From this, we can get access to the route info.
 */
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      Details works! Here is the housing location id from the URL: {{ housingLocationId }}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
}
