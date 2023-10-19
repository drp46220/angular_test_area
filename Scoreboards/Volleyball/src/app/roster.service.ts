import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from './team.model';

@Injectable({
  providedIn: 'root',
})
export class RosterService {
  constructor(private http: HttpClient) {}

  // get team array data file
  getTeamData(): Observable<Team[]> {
    return this.http.get<Team[]>('assets/data/teamData.json');
  }
}
