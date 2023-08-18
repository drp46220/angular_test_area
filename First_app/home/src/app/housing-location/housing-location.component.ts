import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      housing-location-component works!
    </p>
  `,
  styleUrls: ['./housing-location.component.css']
})

// needs the "!" since this is expecting a value to be passed
// "!" is a non-null assertion operator
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
