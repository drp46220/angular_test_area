import { Component } from '@angular/core';

@Component({
  selector: 'app-clocking',
  templateUrl: './clocking.component.html',
  styleUrls: ['./clocking.component.css'],
})
export class ClockingComponent {
  currentDateTime: string;
  timeIn: string;
  timeOut: string;
  timeDiff: string;

  constructor() {}

  ngOnInit(): void {
    this.getDateTime();
    setInterval(() => this.getDateTime(), 1000); // Update every second
  }

  getDateTime() {
    const now = new Date();
    this.currentDateTime = now.toUTCString();
  }

  clockIn() {
    console.log(`time in ${this.getDateTime()} ${this.currentDateTime}`);
  }

  clockOut() {
    console.log(`time out ${this.getDateTime()} ${this.currentDateTime}`);
  }

  timeDifference() {}
}
