import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Climber } from './climber-model';
import { Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseCommsService {
  FireBaseURL = 'https://climbing-waivers-default-rtdb.firebaseio.com/';

  private climbers: Climber[] = [];
  climbersChanged = new Subject<Climber[]>();

  constructor(private http: HttpClient) {}

  setClimbers(climbers: Climber[]) {
    this.climbers = climbers;
    this.climbersChanged.next(this.climbers.slice());
  }

  getClimbers() {
    return this.climbers.slice();
  }

  addClimber(climber: Climber) {
    let c = new Climber();
    const _time = new Date();

    const age = this.yearsDiff(climber.birthday, _time);

    if (age >= 18) {
      c.isOfAge(climber.name, climber.id, climber.birthday);
    } else {
      c.isNotOfAge(
        climber.name,
        climber.id,
        climber.birthday,
        climber.guardianName
      );
    }
    this.climbers.push(c);
    this.climbersChanged.next(this.climbers.slice());

    this.climbersStore();
  }

  climbersStore() {
    const climbers = this.getClimbers();
    this.http
      .put(this.FireBaseURL + 'climbers.json', climbers)
      .subscribe((response) => {
        console.log(climbers);
      });
  }

  // climbersFetch() {
  //   return this.http.get<Climber[]>(this.FireBaseURL + 'climbers.json').pipe(
  //     map((climbers) => {
  //       return climbers.map((recipe) => {
  //         return {
  //           ...recipe,
  //         };
  //       });
  //     }),
  //     tap((climbers) => {
  //       this.setClimbers(climbers);
  //     })
  //   );
  // }

  // find age of climber
  yearsDiff(d1: Date, d2: Date) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
  }
}
