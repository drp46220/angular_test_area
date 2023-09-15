import { Injectable } from '@angular/core';
import { Chore } from './chore-model';
import { Subject } from 'rxjs';

@Injectable()
export class ChoreService {
  choreChanged = new Subject<Chore[]>();

  private chores: Chore[] = [
    // new Chore('dishes', 'clean the dishes', new Date()),
  ];

  setChore(chores: Chore[]) {
    this.chores = chores;
    this.choreChanged.next(this.chores.slice());
  }

  getChores() {
    return this.chores.slice();
  }

  getChore(id: number) {
    return this.chores.slice()[id];
  }

  addChore(chore: Chore) {
    this.chores.push(chore);
    this.choreChanged.next(this.chores.slice());
  }

  updateChore(newChore: Chore, index: number) {
    this.chores[index] = newChore;
    this.choreChanged.next(this.chores.slice());
  }

  deleteChore(index: number) {
    this.chores.splice(index, 1);
    this.choreChanged.next(this.chores.slice());
  }

  constructor() {}
}
