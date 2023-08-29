import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class CounterService {
  inactiveToActive: number = 0;
  activeToInactive: number = 0;

  iCounter() {
    this.inactiveToActive++;
    console.log(this.inactiveToActive);
  }

  aCounter() {
    this.activeToInactive++;
    console.log(this.activeToInactive);
  }

  constructor() { }
}
