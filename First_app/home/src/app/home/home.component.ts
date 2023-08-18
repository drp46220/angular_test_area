import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  // input form and search button. *no functionality yet*
  template: `
    <section>
      <form>
        <input type="text" placeholder="placeholding test">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  // get styles from this .css file
  styleUrls: ['./home.component.css'],
})
export class HomeComponent { }
