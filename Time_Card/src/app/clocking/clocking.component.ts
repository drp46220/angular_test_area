import { Component } from '@angular/core';

@Component({
  selector: 'app-clocking',
  templateUrl: './clocking.component.html',
  styleUrls: ['./clocking.component.css'],
})
export class ClockingComponent {
  currentDateTime: string;

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000); // Update every second
  }

  updateDateTime() {
    const now = new Date();
    this.currentDateTime = now.toISOString(); // You can format this as per your requirement
  }
}
