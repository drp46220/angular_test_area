import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Climber } from './climber-model';
import { Subject, map, tap } from 'rxjs';
import { ClimbersService } from './climbers.service';

@Injectable({
  providedIn: 'root',
})
export class DatabaseCommsService {
  FireBaseURL = 'https://climbing-waivers-default-rtdb.firebaseio.com/';

  private climbers: Climber[] = [];
  climbersChanged = new Subject<Climber[]>();

  constructor(
    private http: HttpClient,
    private climberService: ClimbersService
  ) {}

  climberStore() {
    const climbers = this.climberService.getClimbers();
    this.http.put(this.FireBaseURL + 'recipes.json', climbers);
  }

  climberFetch() {
    return this.http.get<Climber[]>(this.FireBaseURL + 'climbers.json').pipe(
      map((climbers) => {
        return climbers.map((climbers) => {
          return {
            ...climbers,
          };
        });
      }),
      tap((climbers) => {
        this.climberService.setClimber(climbers);
      })
    );
  }
}
