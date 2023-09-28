import { Injectable } from '@angular/core';
import { Climber } from './climber-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimbersService {
  constructor() {}

  climbersChanged = new Subject<Climber[]>();
  public climbers: Climber[] = [];

  setClimber(climbers: Climber[]) {
    this.climbers = climbers;
    this.climbersChanged.next(this.climbers.slice());
  }

  getClimbers() {
    return this.climbers.slice();
  }

  getClimber(id: number) {
    return this.climbers.slice()[id];
  }

  addClimber(climber: Climber) {
    this.climbers.push(climber);
    console.log('after push: ', this.climbers, this.climbers.slice());

    this.climbersChanged.next(this.climbers.slice());
  }

  // updateClimber(newClimber: Climber, index: number) {
  //   this.climbers[index] = newClimber;
  //   this.climbersChanged.next(this.climbers.slice());
  // }

  // deleteRecipe(index: number) {
  //   this.climbers.splice(index, 1);
  //   this.climbersChanged.next(this.climbers.slice());
  // }
}
