import { Injectable } from '@angular/core';
import { Climber } from './climber-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimbersService {
  constructor() {}

  climbersChanged = new Subject<Climber[]>();
  private climbers: Climber[] = [];

  setClimber(climbers: Climber[]) {
    this.climbers = climbers;
    this.climbersChanged.next(this.climbers.slice());
  }

  getClimbers() {
    return this.climbers.slice();
  }

  addClimber(climber: Climber) {
    this.climbers.push(climber);
    console.log('after push: ', this.climbers.slice());

    this.climbersChanged.next(this.climbers.slice());
  }
}
