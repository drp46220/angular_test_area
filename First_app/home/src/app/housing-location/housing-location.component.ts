import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <!-- add image. add header for name. add body -->
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})

// needs the "!" since this is expecting a value to be passed
// "!" is a non-null assertion operator
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}