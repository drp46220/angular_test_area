import { Component } from '@angular/core';

@Component({
  selector: 'app-clocking',
  templateUrl: './clocking.component.html',
  styleUrls: ['./clocking.component.css'],
})
export class ClockingComponent {
  currentDateTime: string;

  constructor() {}

  ngOnInit(): void {
    this.getDateTime();
    setInterval(() => this.getDateTime(), 1000); // Update every second
  }

  getDateTime() {
    const now = new Date();
    this.currentDateTime = now.toUTCString();
  }
}
