import { NgFor } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions: string[] = [];
  // counter = 0; // not a signal
  counter = signal(0); //set variable equal to a signal and pass its desired value

  increment() {
    this.counter++;
    this.actions.push("INCREMENT");
  }

  decrement() {
    this.counter--;
    this.actions.push("DECREMENT");
  }
}
