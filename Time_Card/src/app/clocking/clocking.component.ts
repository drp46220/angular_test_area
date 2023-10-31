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
    return (this.currentDateTime = now.toUTCString());
  }

  clockIn() {
    this.timeIn = this.getDateTime();
    console.log(`time in ${this.timeIn}`);
  }

  clockOut() {
    this.timeOut = this.getDateTime();
    console.log(`time out: ${this.timeOut}`);
    this.timeDifference();
  }

  timeDifference() {
    const hours =
      Math.abs(+new Date(this.timeIn) - +new Date(this.timeOut)) /
      1000 / //milliseconds
      60 / //seconds
      60; //hours
    this.timeDiff = hours.toFixed(4).toString(); // round 4 decimals then convert to string

    console.log(`timeDIff: ${this.timeDiff}`);
  }
}
