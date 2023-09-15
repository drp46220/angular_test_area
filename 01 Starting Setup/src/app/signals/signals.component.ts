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
  // counter is a signal now and has to be called as a function << {{ counter() }} >> in templates. its value will be returned

  increment() {
    // this.counter++; // standard increment without a signal
    this.counter.update((oldCounter) => oldCounter + 1); // updates counter value oldCounter = counter -> oldCounter + 1 --> counter updated to 1 more
    // don't forget to use this updated signal in the template

    this.actions.push("INCREMENT");
  }

  decrement() {
    // this.counter--; // standard decrement without a counter
    this.counter.update((oldCounter) => oldCounter - 1);
    this.actions.push("DECREMENT");
  }
}
