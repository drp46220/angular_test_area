import { NgFor } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions: string[] = [];
  counter = 0;

  increment() {
    this.counter++;
    this.actions.push("INCREMENT");
  }

  decrement() {
    this.counter--;
    this.actions.push("DECREMENT");
  }
}
