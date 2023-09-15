import { NgFor } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);

  // counter = 0; // not a signal
  counter = signal(0); //set variable equal to a signal and pass its desired value
  // counter is a signal now and has to be called as a function << counter() >> . its value will be returned

  increment() {
    // this.counter++; // standard increment without a signal
    // this.actions.push("INCREMENT"); // standard way without signals to add things to an array

    // update example
    // updates based on existing value
    // assigns new value
    // this.counter.update((oldCounter) => oldCounter + 1); // updates counter value oldCounter = counter -> oldCounter + 1 --> counter updated to 1 more
    // don't forget to use this updated signal in the template

    // set example
    // assigns new value
    this.counter.set(this.counter() + 1);

    // mutate  example
    // edits existing value
    // mutate can updates objects that are mutable. numbers are not mutable, only overridable
    this.actions.mutate((oldActions) => oldActions.push("increments"));
    // only use .push() with mutate and not with update
  }

  decrement() {
    // this.counter--; // standard decrement without a counter
    this.counter.update((oldCounter) => oldCounter - 1);
    // this.actions.push("DECREMENT");
    this.actions.update((oldActions) => [...oldActions, "decrements"]); // updates actions = oldActions + '<whatever>'
    // only use .push() with mutate and not with update
  }
}
