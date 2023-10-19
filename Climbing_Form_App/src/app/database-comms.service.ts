import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Climber } from './climber-model';
import { Observable, Subject, catchError, map, tap, throwError } from 'rxjs';
import { ClimbersService } from './climbers.service';

@Injectable({
  providedIn: 'root',
})
export class DatabaseCommsService {
  FireBaseURL = 'https://climbing-waivers-default-rtdb.firebaseio.com/';

  climbersChanged = new Subject<Climber[]>();

  constructor(
    private http: HttpClient,
    private climberService: ClimbersService
  ) {}

  climberStore() {
    const climbers = this.climberService.getClimbers();
    this.http
      .put(`${this.FireBaseURL}/climbers.json`, climbers)
      .subscribe(() => {
        `{climbers}`;
        // console.log('Response from Firebase:', response);
        // console.log('climbers:', climbers);
      });
  }

  climberFetch() {
    return this.http.get<Climber[]>(this.FireBaseURL + 'climbers.json').pipe(
      map((response) => {
        const climbersArray: Climber[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            climbersArray.push({ id: key, ...response[key] });
          }
        }
        return climbersArray;
      }),
      tap((climbers) => {
        this.climberService.setClimber(climbers);
      })
    );
  }

  climberFetchs() {
    return this.http.get<any>(`${this.FireBaseURL}/climbers.json`).pipe(
      map((response) => {
        if (!response || !response['climbers']) {
          console.error('Climbers data not found in Firebase response.');
          console.log('Firebase response:', response);
          return [];
        }

        const climbers: Climber[] = [];
        response.forEach((climberData: any) => {
          const { birthday, dateCreated, guardian, id, name } = climberData[0];
          const climber = new Climber(name, id, birthday, guardian);
          climber.dateCreated = new Date(dateCreated);
          climbers.push(climber);
        });

        return climbers;
      }),
      catchError((error) => {
        console.error('Error fetching data from Firebase:', error);
        return throwError(
          'Error fetching data from Firebase. Please check the console for details.'
        );
      })
    );
  }
}
